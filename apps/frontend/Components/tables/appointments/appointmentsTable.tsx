import ExpandedComponent from '@/Components/Stateless/Expendable/expandable';
import Loading_Spinner from '@/Components/Stateless/Loading_Spinner/Loading_Spinner';
import Typography from '@/Components/Typography/Typography';
import { envConfig } from '@/envConfig';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

export interface IAppointment {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  address: string;
  subject: string;
  createdOn: string;
}

function Appointment_Table() {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const columns = [
    {
      name: 'Firstname',
      selector: (row: IAppointment) => row.firstName,
    },
    {
      name: 'Lastname',
      selector: (row: IAppointment) => row.lastName,
    },
    {
      name: 'Emails',
      selector: (row: IAppointment) => row.email,
    },
    {
      name: 'Country',
      selector: (row: IAppointment) => row.country,
    },
    {
      name: 'Phone No.',
      selector: (row: IAppointment) => row.phone,
    },
    {
      name: 'Address',
      selector: (row: IAppointment) => row.address,
    },
    {
      name: 'Subject Matter',
      selector: (row: IAppointment) => row.subject,
    },
    {
      name: 'Created On',
      selector: (row: IAppointment) => new Date(row.createdOn).toDateString(),
    },
  ];

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await axios({
        url:
          (envConfig.API_PATH || 'http://localhost:3333/api/v1') +
          '/appointments',
        method: 'get',
      });

      if (response.status === 200) {
        setAppointments(response.data.data);
      }
    } catch (error: any) {
      if (error.message) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      {isLoading && <Loading_Spinner />}
      {!error && !isLoading && (
        <DataTable
          columns={columns}
          data={appointments}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
        />
      )}
      {error && (
        <Typography vairent="secondary" component="h5">
          {error || 'Failed to fetch appointments, something went wrong!'}
        </Typography>
      )}
    </>
  );
}

export default Appointment_Table;
