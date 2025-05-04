"use client";
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface MapboxMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  markerColor?: string;
  className?: string;
}

export default function MapboxMap({
  latitude,
  longitude,
  zoom = 14,
  markerColor = '#3b82f6',
  className = ''
}: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !latitude || !longitude) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom
    });

    new mapboxgl.Marker({ color: markerColor })
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    map.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      map.current?.remove();
    };
  }, [latitude, longitude, zoom, markerColor]);

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-full rounded-lg ${className}`}
    />
  );
}