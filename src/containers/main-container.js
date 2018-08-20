import React, {PropTypes, Component} from 'react';

import { Grid, Row, Col } from "react-bootstrap";

import { observer } from 'mobx-react';
import AddressForm from '../components/address-form';
import AddressList from '../components/address-list';

import { createAutoSubscriber } from 'firebase-nest';

class MainContainer extends Component {

    constructor() {
        super()
    }

    submitHandler = (state, selectedAddress) => {
    }

    deleteHandler = addressId => {
    }

    updateHandler = addressId => {
    }

    exportCSVHandler = () => {
    }

    buildComponent = (props, state) => {
        const { store } = props;
        const addresses = store.getAddresses();

        if (!addresses) {
            return (
                <div>...loading</div>
            )
        }

        let addrList = [];
        addresses.forEach(value => {
            const { city, country, district, id, street, ward } = value['address'];
            addrList.push({
                city, country, district, id, street, ward
            })
        });

        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <AddressForm
                            submitHandler={this.submitHandler}/>
                    </Col>
                </Row>
                <AddressList
                    addresses={addrList}
                    deleteHandler={this.deleteHandler}
                    updateHandler={this.updateHandler}
                    exportCSVHandler={this.exportCSVHandler}
                />
            </Grid>
        )

    }

    render() {
        return this.buildComponent(this.props, this.state)
    }
}

export default createAutoSubscriber({
    getSubs: (props, state) => {
        return props.store.getSubs('addresses');
    },

    subscribeSubs: (subs, props, state) => props.store.subscribeSubsWithPromise(subs)


})(observer(MainContainer));
