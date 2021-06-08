import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZHVuY2FuaWkiLCJhIjoiY2tsd2JpMDRxMDZ3OTJ4bHlmOTc5Ym9mNyJ9.Yuwlb-sjNEiXzFQVOwtpfA";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 36.8152081,
  latitude: -1.2810118,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

function App({data}) {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <StaticMap
        mapStyle="mapbox://styles/duncanii/ckjwkgecw041h17pcso3otkn3"
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} 
      />
    </DeckGL>
  );
}


export default App