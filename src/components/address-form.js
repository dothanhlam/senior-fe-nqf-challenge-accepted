import React, {Component, PropTypes} from "react";
import { Button, ControlLabel, Form as form, FormControl, FormGroup, Panel } from "react-bootstrap";

export default class AddressForm extends Component {
    static propTypes = {
        submitHandler: PropTypes.func.isRequired,
        updatedAddress: PropTypes.object,
    }

    constructor(props) {
        super(props)
        this.state = {
            street: '',
            ward: '',
            district: '',
            city: '',
            country: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        const { updatedAddress } = nextProps;
        if (updatedAddress && updatedAddress.selectedAddress) {
            const { address } = updatedAddress;
            Object.entries(address).forEach(item => {
                this.setState({ [item[0]]: item[1] });
            })
        }
    }

    submitHandler = e => {
        e.preventDefault();
        const { updatedAddress } = this.props;
        this.props.submitHandler(this.state, updatedAddress ? updatedAddress.selectedAddress : null);
        this.resetState();
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    resetState = () => {
        this.setState({
            street: '',
            ward: '',
            district: '',
            city: '',
            country: ''
        });
    }

    buildComponent = (props, state) => {
        const { street, ward, district, city, country } = state;
        return (
            <Panel>
                <Panel.Body>
                    <form onSubmit={this.submitHandler}>
                        <FormGroup>
                            <ControlLabel>Street</ControlLabel>
                            <FormControl name="street" type="text" value={street} onChange={this.handleInputChange}/>
                            <FormControl.Feedback/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Ward</ControlLabel>
                            <FormControl name="ward" type="text" value={ward} onChange={this.handleInputChange}/>
                            <FormControl.Feedback/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>District</ControlLabel>
                            <FormControl name="district" type="text" value={district} onChange={this.handleInputChange}/>
                            <FormControl.Feedback/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>City/Provice</ControlLabel>
                            <FormControl name="city" type="text" value={city} onChange={this.handleInputChange}/>
                            <FormControl.Feedback/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Country</ControlLabel>
                            <FormControl name="country" type="text" value={country} onChange={this.handleInputChange}/>
                            <FormControl.Feedback/>
                        </FormGroup>
                        <Button bsSize="large" bsStyle="primary" type="submit">Submit</Button>
                    </form>
                </Panel.Body>
            </Panel>
        );
    }

    render() {
        return this.buildComponent(this.props, this.state)
    }
}