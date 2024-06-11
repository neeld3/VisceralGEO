'use client';

import * as React from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const GEOJSON_URL = '/censustestblock.json';
const MAPBOX_TOKEN="pk.eyJ1IjoibmVlbGRhaGFrZSIsImEiOiJjbHgzaDN6bGwwYzhqMmlvbWlneXVubGphIn0.ZcbsX4IIvVOYjAuPYKZisA";

export default function Home() {
  const [geojsonData, setGeojsonData] = React.useState(null);
  const [dataFromDB, setDataFromDB] = React.useState('test');

  React.useEffect(() => {
    fetch(GEOJSON_URL)
      .then(response => response.json())
      .then(data => setGeojsonData(data))
      .catch(error => console.error('Error fetching GeoJSON data:', error));
  }, []);

  React.useEffect(() => {
    fetch('/data')
      .then(response => response.json())
      .then(data => setDataFromDB(data.data.text_column))
      .catch(error => console.error('Error fetching data from API:', error));
  }, []);

  return (
    <div>
      <main>
        <Map
          initialViewState={{
            latitude: 40.7831,
            longitude: -73.9712,
            zoom: 14
          }}
          style={{ width: "100vw", height: "100vh" }}
          mapStyle="mapbox://styles/neeldahake/clx3jup4k00i701qogxka2fvc"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {geojsonData && (
            <Source id="census-block" type="geojson" data={geojsonData}>
              <Layer
                id="census-block-layer"
                type="fill"
                paint={{
                  'fill-color': '#888888',
                  'fill-opacity': 0.4,
                }}
              />
              <Layer
                id="census-block-outline"
                type="line"
                paint={{
                  'line-color': '#000000',
                  'line-width': 2,
                }}
              />
            </Source>
          )}
          <Marker longitude={-73.9712} latitude={40.7831} color="red" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <button className="px-4 py-2 bg-gray-700 text-white font-bold rounded-md">
              {dataFromDB}
            </button>
          </div>
        </Map>
      </main>
    </div>
  );
}
