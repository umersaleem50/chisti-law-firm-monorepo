'use client';
import ExpandedComponent from '@/Components/Stateless/Expendable/expandable';
import ExpandableCase from '@/Components/Stateless/Expendable/expandable_cases';
import Loading_Spinner from '@/Components/Stateless/Loading_Spinner/Loading_Spinner';
import Typography from '@/Components/Typography/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable, { ExpanderComponentProps } from 'react-data-table-component';

interface ICaseType {
  prevDate: string;
  title: string;
  caseCategory: string;
  stage: string;
  courtName: string;
  nextDate: string;
}

function CasesTable() {
  const [cases, setCases] = useState<ICaseType[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const columns = [
    {
      name: 'Previous Date',
      selector: (row: ICaseType) => new Date(row.prevDate).toDateString(),
    },
    {
      name: 'Title',
      selector: (row: ICaseType) => row.title,
    },
    {
      name: 'Case Category',
      selector: (row: ICaseType) => row.caseCategory,
    },
    {
      name: 'Stage',
      selector: (row: ICaseType) => row.stage,
    },
    {
      name: 'Count Name',
      selector: (row: ICaseType) => row.courtName,
    },
    {
      name: 'Next Date',
      selector: (row: ICaseType) => row.nextDate,
    },
  ];

  const deleteCaseFromArr = (arr: any, id: any) => {
    const arrCopy = [...arr];
    arrCopy.filter((val: any) => {
      return val._id !== id;
    });
    setCases(arrCopy);
  };

  const fetchCases = async () => {
    setLoading(true);
    try {
      const response = await axios({
        url: process.env.API_PATH || 'http://localhost:3333/api/v1' + '/cases',
        method: 'get',
      });

      if (response.status === 200) {
        setCases(response.data.data);
      }
    } catch (error: any) {
      if (error.message) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <>
      {isLoading && <Loading_Spinner />}
      {!error && !isLoading && (
        <DataTable
          columns={columns}
          data={cases}
          expandableRows
          expandableRowsComponent={ExpandableCase}
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

export default CasesTable;
