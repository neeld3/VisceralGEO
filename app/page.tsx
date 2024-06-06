'use client'
import * as React from 'react';
import Head from 'next/head';
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = "pk.eyJ1IjoibmVlbGRhaGFrZSIsImEiOiJjbHgzaDN6bGwwYzhqMmlvbWlneXVubGphIn0.ZcbsX4IIvVOYjAuPYKZisA"; // Set your mapbox token here

export default function Home() {
  return (
    <div>
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
        <Marker longitude={40.7831} latitude={73.9712} color="red" />
        <div style={{ position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)' }}>
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'gray', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '4px' }}>
            Upload CSV
          </button>
        </div>
      </Map>

    </div>
  );
}
