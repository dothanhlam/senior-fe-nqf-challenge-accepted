import React from 'react';
import { Component, PropTypes } from "react";

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GoogleMapHoC = withScriptjs(withGoogleMap(props => {
    const { currentLocation, searchLocation } = props;
    if (!currentLocation) {
        return null;
    }
    const { coords } = currentLocation;
    const { location } = searchLocation || {};
    return (
        <GoogleMap
            defaultZoom={16}
            center={location || {lat: coords.latitude, lng: coords.longitude}}
        >
            <Marker position={location || {lat: coords.latitude, lng: coords.longitude}}/>
        </GoogleMap>
    );
}));

export default class GoogleMapForm extends Component {
    static propTypes = {
        currentLocation: PropTypes.object,
        searchLocation: PropTypes.object,
    }

    buildComponent = (props, state) => {
        const { currentLocation , searchLocation } = props;
        return (
            <GoogleMapHoC { ...props } { ...currentLocation } { ...searchLocation } />
        )
    }

    render() {
        return this.buildComponent(this.props, this.state);
    }
}