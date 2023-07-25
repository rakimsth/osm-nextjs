import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";

const Map = () => {
  const [center, setCenter] = useState({ lat: 27.717245, lng: 85.323959 });
  const ZOOM_LEVEL = 7;
  const mapRef = useRef();
  const position = [27.717245, 85.323959];
  return (
    <>
      <div className="container">
        <div className="container">
          <h1 className="text-center-mt-5">OpenStreetMap</h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="container">
              <MapContainer
                center={center}
                zoom={ZOOM_LEVEL}
                scrollWheelZoom={true}
                ref={mapRef}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
