import React, {PropTypes, Component} from 'react';


class MainContainer extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
    }


    buildComponent = props => {
        return (
            <div>
                <span>hello</span>
            </div>
        )
    }

    render() {
        return this.buildComponent(this.props)
    }
}

export default MainContainer;
