import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 35.689198, lng: 51.388973 }}
    />
  );
}
const WrrapedMap = withScriptjs(withGoogleMap(Map));
const Maps = () => {
  return (
    <div style={{ width: "100%", height: "100%", borderRadius: "5px" }}>
      <WrrapedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA372PcuJQKYrKADjhHTLLDVcfsoCzF-4M&callback=initMap`}
        loadingElement={<div style={{ height: "500px" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};
export default Maps;
