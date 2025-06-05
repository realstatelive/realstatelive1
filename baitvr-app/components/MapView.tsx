import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { properties as defaultProperties } from '../data/properties';

const MAP_TOKEN = '';
const MAP_STYLE = 'https://api.maptiler.com/maps/streets/style.json?key=Get_Your_Free_Key';

const propertyIcons = {
  palace: '/images/palace.jpg',
  villa: '/images/villa.jpg',
  apartment: '/images/apartment.jpg',
  clinic: '/images/clinic.jpg',
  shop: '/images/shop.jpg',
  office: '/images/office.jpg',
};

// مواقع افتراضية للوحدات (عشوائية لكل دولة)
const locations = [
  { lng: 31.2357, lat: 30.0444 }, // القاهرة
  { lng: 55.2708, lat: 25.2048 }, // دبي
  { lng: 46.6753, lat: 24.7136 }, // الرياض
  { lng: 47.9783, lat: 29.3759 }, // الكويت
  { lng: 50.5832, lat: 26.2235 }, // المنامة
  { lng: 51.5310, lat: 25.2854 }, // الدوحة
  { lng: 58.3829, lat: 23.5880 }, // مسقط
  { lng: 35.9106, lat: 31.9632 }, // عمّان
  { lng: 3.0588, lat: 36.7538 }, // الجزائر
  { lng: -7.5898, lat: 33.5731 }, // الدار البيضاء
];

type Property = typeof defaultProperties[number];

const MapView: React.FC<{ properties?: Property[] }> = ({ properties = defaultProperties }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) return;
    mapRef.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: 'https://tiles.stadiamaps.com/styles/alidade_smooth.json',
      center: [31.2357, 30.0444],
      zoom: 3.5,
    });

    properties.slice(0, 100).forEach((property, idx) => {
      const loc = locations[idx % locations.length];
      const el = document.createElement('div');
      el.style.width = '36px';
      el.style.height = '36px';
      el.style.borderRadius = '50%';
      el.style.overflow = 'hidden';
      el.style.border = '2px solid #fff';
      el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
      // معالجة نوع العقار ليكون من الأنواع المعروفة فقط
      const iconUrl = propertyIcons[property.type as keyof typeof propertyIcons] || '/images/palace.jpg';
      el.style.background = `url(${iconUrl}) center/cover`;
      el.title = property.title;
      new maplibregl.Marker(el)
        .setLngLat([loc.lng, loc.lat])
        .setPopup(new maplibregl.Popup().setHTML(`<b>${property.title}</b><br/>${property.location}<br/>${property.status}`))
        .addTo(mapRef.current!);
    });
  }, [properties]);

  return <div ref={mapContainer} style={{ width: '100%', height: 400, borderRadius: 16, margin: '32px 0' }} />;
};

export default MapView;
