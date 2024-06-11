'use client'

import * as React from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Pool } from 'pg'; 

// PostgreSQL configuration
const pool = new Pool({
  user: 'postgres',
  host: 'vgeo-1.c271tjjdrfsu.us-east-1.rds.amazonaws.com',
  database: 'postgres',
  password: '8ktR9MI:-0c]',
  port: 5432, 
});

const MAPBOX_TOKEN = "pk.eyJ1IjoibmVlbGRhaGFrZSIsImEiOiJjbHgzaDN6bGwwYzhqMmlvbWlneXVubGphIn0.ZcbsX4IIvVOYjAuPYKZisA"; 
const GEOJSON_URL = '/censustestblock.json'; 

export default function Home() {
  const [geojsonData, setGeojsonData] = React.useState(null);
  const [dataFromDB, setDataFromDB] = React.useState(''); 

  // Fetch GeoJSON data
  React.useEffect(() => {
    fetch(GEOJSON_URL)
      .then(response => response.json())
      .then(data => setGeojsonData(data))
      .catch(error => console.error('Error fetching GeoJSON data:', error));
  }, []);

  // Fetch data from PostgreSQL when component mounts
  React.useEffect(() => {
    const fetchDataFromDB = async () => {
      try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM test_table'); 
        setDataFromDB(result.rows[0].text_column); 
        client.release();
      } catch (error) {
        console.error('Error fetching data from PostgreSQL:', error);
      }
    };
    fetchDataFromDB(); 
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
          style={{width: "100vw", height: "100vh"}}
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
              {dataFromDB || 'Loading...'} {/* Display fetched data or Loading text */}
            </button>
          </div>
        </Map>
      </main>
    </div>
  );
}
