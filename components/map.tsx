import * as React from 'react';
import Map from 'react-map-gl';
 
const MyMap = () => {
  return (
   <Map
      mapboxAccessToken={"pk.eyJ1IjoibmVlbGRhaGFrZSIsImEiOiJjbHgzaDN6bGwwYzhqMmlvbWlneXVubGphIn0.ZcbsX4IIvVOYjAuPYKZisA"}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
};

export default MyMap;
