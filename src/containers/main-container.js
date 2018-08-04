import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

import { getAddresses } from '../reducers';

class MainContainer extends Component {
    static propTypes = {
        addresses: PropTypes.object,
        dispatch: PropTypes.func.isRequired,
    }

    constructor() {
        super()
    }

    componentDidMount() {
       this.props.dispatch(actions.syncAddressSaga());
    }


    buildComponent = props => {
        const {addresses} = props;
        if (addresses) {
            return (
                <div>
                    <ul>
                    {
                        Object.entries(addresses).map(item => {
                            console.log(item)
                            return (
                                <li key={item[0]}>{item[1].street} - { item[1].district }</li>
                            )
                        })
                    }
                    </ul>
                </div>
            )
        }

        return (
            <div>...loading</div>
        )
    }

    render() {
        return this.buildComponent(this.props)
    }
}

function mapStateToProps(state) {
    return {
        addresses: getAddresses(state),
    }
}

export default connect(mapStateToProps)(MainContainer);
