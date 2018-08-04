import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import { Grid, Row, Col } from "react-bootstrap";


import * as actions from '../actions';
import { GOOGLE_MAP_API } from '../sagas/google-map';

import {getAddresses, getCurrentLocation, getSearchLocation} from '../reducers';

import AddressForm from '../components/address-form';
import AddressList from '../components/address-list';
import GoogleMapForm from '../components/google-map-form';

class MainContainer extends Component {
    static propTypes = {
        location: PropTypes.object,
        searchLocation: PropTypes.object,
        addresses: PropTypes.object,
        dispatch: PropTypes.func.isRequired,
    }

    constructor() {
        super()
        this.state = {
            selectedAddress: null
        }
    }

    componentDidMount() {
       this.props.dispatch(actions.syncAddressSaga());
       this.props.dispatch(actions.getCurrentLocationSaga());
    }


    submitHandler = (state, selectedAddress) => {
        this.props.dispatch(actions.addAddressSaga(state, selectedAddress));
        this.setState({selectedAddress: null});
    }

    deleteHandler = addressId => {
        this.props.dispatch(actions.deleteAddressSaga(addressId));
    }

    updateHandler = addressId => {
        this.setState(
            {
                selectedAddress: addressId,
            }
        )

        const { addresses } = this.props;
        const query = Object.values(addresses[addressId].address).join(' ');
        this.props.dispatch(actions.serchLocationSaga(query));
    }

    buildComponent = (props, state) => {
        const { addresses, location, searchLocation } = props;
        const { selectedAddress } = state;
        const gmapURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API}&v=3.exp&libraries=geometry,drawing,places`;

        if (addresses) {
            const updatedAddress = {selectedAddress,   ...addresses[selectedAddress]};
            return (
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <AddressForm
                                submitHandler={this.submitHandler}
                                updatedAddress={updatedAddress}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <GoogleMapForm
                                searchLocation={searchLocation}
                                currentLocation={location}
                                googleMapURL={gmapURL}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </Col>
                    </Row>
                    <AddressList
                        addresses={addresses}
                        deleteHandler={this.deleteHandler}
                        updateHandler={this.updateHandler}
                    />
                </Grid>
            )
        }

        return (
            <div>...loading</div>
        )
    }

    render() {
        return this.buildComponent(this.props, this.state)
    }
}

function mapStateToProps(state) {
    return {
        addresses: getAddresses(state),
        location: getCurrentLocation(state),
        searchLocation: getSearchLocation(state)
    }
}

export default connect(mapStateToProps)(MainContainer);
