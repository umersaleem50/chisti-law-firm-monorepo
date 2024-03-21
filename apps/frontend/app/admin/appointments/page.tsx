'use client';

import Typography from '@/Components/Typography/Typography';
import Appointment_Table from '@/Components/tables/appointments/appointmentsTable';

function Appointments() {
  return (
    <div style={{ maxWidth: '65vw' }}>
      <Typography vairent="h6" component="h5">
        Your Appointments
      </Typography>
      <Appointment_Table />
    </div>
  );
}

export default Appointments;
