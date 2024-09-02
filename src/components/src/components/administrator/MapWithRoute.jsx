import React, { useCallback, useState } from "react";
import axios from "axios";
import MapContainer from "./MapContainer";
import L from "leaflet";

const MapWithRoute = () => {
  const [map, setMap] = useState(null);

  const handleMapLoad = useCallback((loadedMap) => {
    setMap(loadedMap);
  }, []);

  React.useEffect(() => {
    if (map) {
      // Define your waypoints
      const start = [28.6139, 77.209]; // Example starting point
      const end = [28.7041, 77.1025]; // Example ending point

      // Fetch route from OSRM
      axios
        .get(
          `http://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=false`
        )
        .then((response) => {
          const route = response.data.routes[0];
          const coordinates = route.geometry.coordinates.map((coord) => [
            coord[1],
            coord[0],
          ]);

          // Add route to map
          L.polyline(coordinates, { color: "blue" }).addTo(map);
          map.fitBounds(L.polyline(coordinates).getBounds()); // Fit map to route
        })
        .catch((error) => {
          console.error("Error fetching route:", error);
        });
    }
  }, [map]);

  return (
    <div>
      <MapContainer onMapLoad={handleMapLoad} />
    </div>
  );
};

export default MapWithRoute;
