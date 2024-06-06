import * as React from 'react';
import Map, {Source, Layer} from 'react-map-gl';
import type {CircleLayer} from 'react-map-gl';
import type {FeatureCollection} from 'geojson';

const geojson: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
  ]
};

const layerStyle: CircleLayer = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};
 
const MyMap: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
  });

  return (
   <Map
      mapboxAccessToken="<pk.eyJ1IjoibmVlbGRhaGFrZSIsImEiOiJjbHgzaDN6bGwwYzhqMmlvbWlneXVubGphIn0.ZcbsX4IIvVOYjAuPYKZisA>"
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
