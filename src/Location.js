import React, { useState } from 'react';

const Location = () => {
  var Flickr = require('flickr-sdk');
  var flickr = new Flickr(FLICKR_API_KEY);
  var [latitude, setLatitude] = useState()
  var [longitude, setLongitude] = useState()

  flickr.photos.geo.getLocation({
    photo_id: 40848445013
  }).then(function (res) {
    setLatitude(res.body.photo.location.latitude)
    setLongitude(res.body.photo.location.longitude);
  }).catch(function (err) {
    console.error('check console', err);
  });

  return(
    <Map lat={latitude} lng={longitude} />
  );

}


export default Location