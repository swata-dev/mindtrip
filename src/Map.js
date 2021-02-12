import React , { useState,useEffect } from 'react';

const Map = props => {
  const latitude = 34.997724;// 緯度
  const longitude = 135.913759;// 経度
  const API_KEY = process.env.REACT_APP_MAP_API_KEY;

  useEffect(()=>{
    console.log(latitude);
    console.log(longitude);
    console.log(API_KEY);
  })
  return (
    <section className="map">
      <p>image</p>
      <p>image</p>
      <p>image</p>
      <p>image</p>
    </section>
  );
}

export default Map;