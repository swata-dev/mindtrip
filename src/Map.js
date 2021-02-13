import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="pin">{text}</div>;

const Map = props => {
  const [center,setCenter] = useState({
    lat: 34.99,
    lng: 135.91
  });
  const [zoom,setZoom] = useState(14);
  const [api,setApi] = useState(process.env.REACT_APP_MAP_API_KEY);

  useEffect(()=>{
  })

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: api.slice(1,-2) }}
        defaultCenter={center}
        zoom={zoom}
      >
        <AnyReactComponent
          lat={center.lat}
          lng={center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
 
export default Map;