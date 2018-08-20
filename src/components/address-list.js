import { Component, PropTypes } from "react";
import React from "react";
import { Table, Panel, Button, ButtonToolbar } from 'react-bootstrap';

export default class AddressList extends Component {
    static propTypes = {
        addresses: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        deleteHandler: PropTypes.func.isRequired,
        updateHandler: PropTypes.func.isRequired,
        exportCSVHandler: PropTypes.func,
    }

    deleteHandler = e => {
        this.props.deleteHandler(e.target.value)
    }

    updateHandler = e => {
        this.props.updateHandler(e.target.value);
    }

    downloadCSVHandler = e => {
        this.props.exportCSVHandler(this.props.addresses);
    }

    buildComponent = (props, state) => {
        const { addresses } = props;
        const allAddress = Object.entries(addresses);
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h1">Address</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>Street</th>
                            <th>Ward</th>
                            <th>District</th>
                            <th>City/Province</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            allAddress.map(item => {
                                let address = item[1];
                                return (
                                    <tr key={item[0]}>
                                        <td>{address.street}</td>
                                        <td>{address.ward}</td>
                                        <td>{address.district}</td>
                                        <td>{address.city}</td>
                                        <td>{address.country}</td>
                                        <td>
                                            <ButtonToolbar>
                                                <Button
                                                    value={item[0]}
                                                    bsSize="xsmall"
                                                    bsStyle="primary"
                                                    onClick={this.updateHandler}>
                                                    Edit
                                                </Button>
                                                <Button
                                                    value={item[0]}
                                                    bsSize="xsmall"
                                                    bsStyle="danger"
                                                    onClick={this.deleteHandler}>
                                                    Delete
                                                </Button>
                                            </ButtonToolbar>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </Panel.Body>
                <Panel.Footer>
                    <Button bsSize="xsmall" bsStyle="primary" onClick={this.downloadCSVHandler}>
                        Total: {allAddress.length} - Download CSV
                    </Button>
                </Panel.Footer>
            </Panel>
        );
    }

    render() {
        return this.buildComponent(this.props, this.state)
    }
}

