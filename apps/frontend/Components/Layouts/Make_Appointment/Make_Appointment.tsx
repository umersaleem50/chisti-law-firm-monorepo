'use client';
import { forwardRef, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { text } from './text';
import Section from '../../Stateless/Section/Section';
import classes from './Make_Appointment.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import Form_Appointment from '../../forms/appointment/form_appointment';
import { envConfig } from '@/envConfig';
const Make_Appointment = ({ ref }: { ref: any }) => {
  mapboxgl.accessToken = envConfig.MAP_TOKEN || '';

  const mapContainer = useRef(null);
  const map: React.MutableRefObject<mapboxgl.Map | null> = useRef(null);
  const [lng] = useState(73.09);
  const [lat] = useState(31.422234);
  const [zoom] = useState(14);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.scrollZoom.disable();

    // 31.422234, 73.080888

    new mapboxgl.Marker().setLngLat([73.080888, 31.422234]).addTo(map.current);
  });

  return (
    <div className={classes['appointment']} ref={ref} id="appointment-id">
      <Section
        heading={text['heading']}
        paragraph={text['paragraph']}
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
export default forwardRef(Make_Appointment);
