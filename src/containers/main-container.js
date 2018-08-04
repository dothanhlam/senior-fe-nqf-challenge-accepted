import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { getAddresses } from '../reducers';

import AddressForm from '../components/address-form';
import AddressList from '../components/address-list';

class MainContainer extends Component {
    static propTypes = {
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
    }

    buildComponent = (props, state) => {
        const { addresses } = props;
        const { selectedAddress } = state;
        if (addresses) {
            const updatedAddress = {selectedAddress,   ...addresses[selectedAddress]};
            return (
                <div>
                    <AddressForm
                        submitHandler={this.submitHandler}
                        updatedAddress={updatedAddress}
                    />
                    <AddressList
                        addresses={addresses}
                        deleteHandler={this.deleteHandler}
                        updateHandler={this.updateHandler}
                    />
                </div>
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
    }
}

export default connect(mapStateToProps)(MainContainer);
