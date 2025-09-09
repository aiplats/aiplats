import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function GoogleMapAPI() {
  const center = { lat: 14.056346, lng: 121.154674 };
  const apikey = process.env.REACT_APP_GOOGLE_API;

  return (
    <LoadScript googleMapsApiKey = {apikey} >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "200px", borderRadius: "13px" }}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapAPI;
