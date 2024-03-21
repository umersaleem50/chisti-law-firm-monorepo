'use client';
import ExpandableCase from '@/Components/Stateless/Expendable/expandable_cases';
import Loading_Spinner from '@/Components/Stateless/Loading_Spinner/Loading_Spinner';
import Typography from '@/Components/Typography/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import classes from './caseTable.module.scss';
import { IoIosAdd as IconAdd } from 'react-icons/io';
import Button from '@/Components/Button/Button';
import AddCase from '@/Components/forms/addCase/addCase';
import { Input } from '@/Components/Inputs/Textbox/Textbox.stories';
import Textbox from '@/Components/Inputs/Textbox/Textbox';
import { envConfig } from '@/envConfig';

export interface ICaseType {
  _id?: string;
  __v?: any;
  prevDate: string;
  title: string;
  caseCategory: string;
  stage: string;
  courtName: string;
  nextDate: string;
}

function CasesTable() {
  const [cases, setCases] = useState<any>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const columns = [
    {
      name: 'Previous Date',
      selector: (row: ICaseType) => new Date(row.prevDate).toDateString(),
    },
    {
      name: 'Next Date',
      selector: (row: ICaseType) => new Date(row.nextDate).toDateString(),
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
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [prevDate, setPrevDate] = useState('');
  const [nextDate, setNextDate] = useState('');
  const [caseCategory, setCaseCategory] = useState('Civil Cases');
  const [stage, setStage] = useState('');
  const [courtName, setCourtName] = useState('');
  // const [searchValue, setSearchValue] = useState('');
  const [searchNextDate, setSearchNextDate] = useState('');
  const [searchPrevDate, setSearchPrevDate] = useState('');
  const [params, setParams] = useState({});

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleUpdateParams = (key: any, value: any) => {
    setParams((prev: any) => {
      prev[key] = value;
      return { ...prev };
    });
  };
  const onSumbitRequest = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: (envConfig.API_PATH || 'http://localhost:3333/api/v1') + '/cases',
        method: 'post',
        data: { title, prevDate, nextDate, caseCategory, stage, courtName },
      });

      if (response.status === 201) {
        alert('Case created!');
        setIsOpen(false);
        handleUpdate();
      }
    } catch (error: any) {
      if (error.message) alert(error.message);
      alert('Something went wrong!');
    }
  };

  const fetchCases = async () => {
    setLoading(true);

    try {
      const response = await axios({
        url: (envConfig.API_PATH || 'http://localhost:3333/api/v1') + '/cases',
        method: 'get',
        params: params,
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

  const handleUpdate = () => {
    return fetchCases();
  };

  useEffect(() => {
    fetchCases();
  }, [params]);

  return (
    <>
      <AddCase
        onSubmit={onSumbitRequest}
        setters={{
          setIsOpen: setIsOpen,
          setCourtName,
          setNextDate,
          setCaseCategory,
          setPrevDate,
          setStage,
          setTitle,
        }}
        values={{
          caseCategory,
          courtName,
          isOpen,
          nextDate,
          prevDate,
          stage,
          title,
        }}
      />
      <div className={classes['top']}>
        <Typography vairent="h6" component="h5">
          Your Cases
        </Typography>
        <div className={classes['top__action']}>
          <Textbox
            type="date"
            label="Previous Date"
            value={searchPrevDate}
            onChange={(e) => {
              setSearchPrevDate(e.target.value);
              handleUpdateParams('prevDate', e.target.value);
            }}
          />
          <Textbox
            type="date"
            label="Next Date"
            value={searchNextDate}
            onChange={(e) => {
              setSearchNextDate(e.target.value);
              handleUpdateParams('nextDate', e.target.value);
            }}
          />
          {/* <Textbox
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            type="search"
            label="Search"
            placeholder="Search by anything"
          /> */}
          <Button
            varient="text"
            customClasses={[classes['button']]}
            onClick={() => setParams({})}
          >
            Reset Search
          </Button>
          <Button
            varient="outline"
            customClasses={[classes['button']]}
            onClick={handleOpenModal}
          >
            <IconAdd className={classes['icon']} />
            Add Case
          </Button>
        </div>
      </div>
      {isLoading && <Loading_Spinner />}
      {!error && !isLoading && (
        <DataTable
          columns={columns}
          data={cases}
          expandableRows
          className={classes['table']}
          expandableRowsComponent={ExpandableCase}
          expandableRowsComponentProps={{ handleUpdate: handleUpdate }}
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
