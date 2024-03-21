'use client';
import ExpandedComponent from '@/Components/Stateless/Expendable/expandable';
import Loading_Spinner from '@/Components/Stateless/Loading_Spinner/Loading_Spinner';
import Typography from '@/Components/Typography/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { ILawyer } from '@/Components/Layouts/Lawyer_Detail/Lawyer_Details';
import Team_Manager_Expendable from '@/Components/Stateless/Expendable/team_manager_expendable';
import Edit_Profile_Modal from '@/Components/Stateful/Edit_Profile_Modal/Edit_Profile_Modal';
import { envConfig } from '@/envConfig';
// export interface I {
//   firstName: string;
//   lastName: string;
//   email: string;
//   workplace: string;
//   phone: string;
//   address: string;
//   subject: string;
//   createdOn: string;
// }

function Manage_Team_Table() {
  const [appointments, setAppointments] = useState<ILawyer[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const columns = [
    {
      name: 'Firstname',
      selector: (row: any) => row.firstName,
    },
    {
      name: 'Lastname',
      selector: (row: any) => row.lastName,
    },
    {
      name: 'Emails',
      selector: (row: any) => row.email,
    },
    {
      name: 'Workplace',
      selector: (row: any) => row.workplace,
    },
    {
      name: 'Professions',
      selector: (row: any) => row.professions.join(', '),
    },
    {
      name: 'Contact',
      selector: (row: any) => row.contact,
    },
    {
      name: 'Bio',
      selector: (row: any) => row.bio,
    },
  ];

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await axios({
        url:
          (envConfig.API_PATH || 'http://localhost:3333/api/v1') + '/lawyers',
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
      <Edit_Profile_Modal
        id="jkfjdkf"
        isOpen={toggleModal}
        setIsOpen={setToggleModal}
      />
      {isLoading && <Loading_Spinner />}
      {!error && !isLoading && (
        <DataTable
          columns={columns}
          data={appointments}
          expandableRows
          expandableRowsComponent={Team_Manager_Expendable({
            setIsOpen: setToggleModal,
          })}
        />
      )}
      {error && (
        <Typography vairent="secondary" component="h5">
          {error || 'Failed to fetch lawyers, something went wrong!'}
        </Typography>
      )}
    </>
  );
}

export default Manage_Team_Table;
