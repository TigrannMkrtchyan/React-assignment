'use client';
import React from 'react';
import Map, {
  NavigationControl,
  Marker,
  Source,
  Layer,
  MapLib,
} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import MapMarker from '../mapMarker';
import data from '@/utils/stops_list.json';

import 'maplibre-gl/dist/maplibre-gl.css';
import { useDelivery } from '@/hooks/useDelivery';

const MapComponent: React.FC = () => {
  const { deliveredSequence } = useDelivery();

  const linesSource: GeoJSON.FeatureCollection<GeoJSON.LineString> = {
    type: 'FeatureCollection',
    features: [],
  };

  for (let i = 0; i < data.length - 1; i++) {
    const startPoint: [number, number] = [data[i].lng, data[i].lat];
    const endPoint: [number, number] = [data[i + 1].lng, data[i + 1].lat];
    const lineFeature: GeoJSON.Feature<GeoJSON.LineString> = {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [startPoint, endPoint],
      },
      properties: {},
    };

    linesSource.features.push(lineFeature);
  }

  return (
    <div>
      <Map
        mapLib={maplibregl as MapLib<any>}
        initialViewState={{
          longitude: data[0].lng,
          latitude: data[0].lat,
          zoom: 14,
        }}
        style={{ width: '100%', height: ' calc(100vh - 77px)' }}
        mapStyle='https://tiles.stadiamaps.com/styles/osm_bright.json'
      >
        <NavigationControl position='top-left' />
        {data.map((value, i) => (
          <Marker
            key={i}
            longitude={value.lng}
            latitude={value.lat}
            color='#1329FE'
          >
            <MapMarker
              currentDeliveredNumber={deliveredSequence}
              sequenceNumber={value.sequence_number}
            />
          </Marker>
        ))}
        <Source id='lines' type='geojson' data={linesSource}>
          <Layer
            id='lineLayer'
            type='line'
            paint={{
              'line-color': '#1329FE',
              'line-width': 4,
            }}
          />
        </Source>
      </Map>
    </div>
  );
};

export default MapComponent;
