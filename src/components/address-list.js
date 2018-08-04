import { Component, PropTypes } from "react";
import React from "react";
import { Table, Panel, Button } from 'react-bootstrap';

export default class AddressList extends Component {
    static propTypes = {
        addresses: PropTypes.object,
        deleteHandler: PropTypes.func.isRequired,
        updateHandler: PropTypes.func.isRequired,

    }

    deleteHandler = e => {
        console.log('delete: ')
     //   this.props.deleteHandler(e.target.value)
    }

    updateHandler = e => {
        this.props.updateHandler(e.target.value);
    }

    buildComponent = (props, state) => {
        const { addresses } = props;
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
                            Object.entries(addresses).map(item => {
                                const { address } = item[1]
                                return (
                                    <tr key={item[0]}>
                                        <td>{address.street}</td>
                                        <td>{address.ward}</td>
                                        <td>{address.district}</td>
                                        <td>{address.city}</td>
                                        <td>{address.country}</td>
                                        <td>
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
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </Panel.Body>
                <Panel.Footer>total: {} </Panel.Footer>
            </Panel>
        );
    }

    render() {
        return this.buildComponent(this.props, this.state)
    }
}

