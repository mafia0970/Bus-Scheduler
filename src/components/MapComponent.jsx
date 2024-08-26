import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";

const MultiRouteMap = () => {
  useEffect(() => {
    const map = L.map("map").setView([28.6139, 77.209], 13); // Centered on New Delhi

    // Base tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // First route: India Gate to Red Fort
    const route1 = L.Routing.control({
      waypoints: [
        L.latLng(28.6139, 77.209), // India Gate
        L.latLng(28.6562, 77.241), // Red Fort
      ],
      routeWhileDragging: false,
      lineOptions: {
        styles: [{ color: "blue", opacity: 1, weight: 5 }],
      },
    }).addTo(map);

    // Second route: Qutub Minar to Lotus Temple
    const route2 = L.Routing.control({
      waypoints: [
        L.latLng(28.5244, 77.1855), // Qutub Minar
        L.latLng(28.5535, 77.2588), // Lotus Temple
      ],
      routeWhileDragging: false,
      lineOptions: {
        styles: [{ color: "green", opacity: 1, weight: 5 }],
      },
    }).addTo(map);

    // Third route: Connaught Place to Akshardham Temple
    const route3 = L.Routing.control({
      waypoints: [
        L.latLng(28.6315, 77.2167), // Connaught Place
        L.latLng(28.6127, 77.2773), // Akshardham Temple
      ],
      routeWhileDragging: false,
      show: false,
      lineOptions: {
        styles: [{ color: "red", opacity: 1, weight: 5 }],
      },
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
};

export default MultiRouteMap;
