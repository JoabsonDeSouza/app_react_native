import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyAGuX2YlSgmZu1LMc9WG4nbE0Grq5Kaapo"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
