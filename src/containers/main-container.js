import React, {PropTypes, Component} from 'react';

import { Grid, Row, Col } from "react-bootstrap";

import { observer } from 'mobx-react';
import { createAutoSubscriber } from 'firebase-nest';

class MainContainer extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
    }


    buildComponent = (props, state) => {
        const { store } = props;
        const addresses = store.getAdressList();

        if (!addresses) {
            return (
                <div>...loading</div>
            )
        }

        for (let value of addresses.entries()) {
            console.log(value)
        }
        return (<div>ok</div>);
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
