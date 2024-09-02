import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapContainer = ({ onMapLoad }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([28.6139, 77.209], 12); // Center on New Delhi

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Notify parent component that map is loaded
      if (onMapLoad) {
        onMapLoad(map);
      }

      return () => {
        map.remove();
      };
    }
  }, [onMapLoad]);

  return <div ref={mapRef} style={{ height: "500px" }}></div>;
};

export default MapContainer;
