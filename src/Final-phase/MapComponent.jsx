import React, { useState, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { debounce } from 'lodash';

const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
};

const MapComponent = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)
  const [search, setSearch] = useState('');

  const fetchLocation = async (query) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        const newPosition = [parseFloat(lat), parseFloat(lon)];
        setPosition(newPosition);
      } else {
        alert('Location not found');
      }
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  const debouncedFetchLocation = useCallback(debounce(fetchLocation, 1000), []);

  useEffect(() => {
    if (search) {
      debouncedFetchLocation(search);
    }
  }, [search, debouncedFetchLocation]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a location"
      />
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '800px', width: '100%' }}
      >
        <ChangeView center={position} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
