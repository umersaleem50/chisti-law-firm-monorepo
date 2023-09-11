'use client';
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// eslint-disable-next-line @nx/enforce-module-boundaries
import { make_appointment_data } from 'apps/frontend/text/make_appoinement_data';
import Section from '../../Stateless/Section/Section';
import classes from './Make_Appointment.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import Form_Appointment from '../../forms/appointment/form_appointment';
const Make_Appointment = () => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_TOKEN || '';

  const mapContainer = useRef(null);
  const map: React.MutableRefObject<mapboxgl.Map | null> = useRef(null);
  const [lng] = useState(-70.9);
  const [lat] = useState(42.35);
  const [zoom] = useState(9);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    new mapboxgl.Marker().setLngLat([-70.9, 42.35]).addTo(map.current);
  });

  return (
    <div className={classes['appointment']}>
      <Section
        heading={make_appointment_data.heading}
        paragraph={make_appointment_data.paragraph}
        varient="fullScreen"
      >
        <div className={classes['container']}>
          <div className={classes['map']} ref={mapContainer}></div>
          <Form_Appointment customClasses={[classes['form']]} />
        </div>
      </Section>
    </div>
  );
};
export default Make_Appointment;
