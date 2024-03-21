'use client';
import Button from '@/Components/Button/Button';
import Typography from '@/Components/Typography/Typography';
import AddCase from '@/Components/forms/addCase/addCase';
import { envConfig } from '@/envConfig';
import axios from 'axios';
import React, { useState } from 'react';
import { ExpanderComponentProps } from 'react-data-table-component';

interface ICaseType {
  _id?: any;
  __v?: any;
  prevDate: string;
  title: string;
  caseCategory: string;
  stage: string;
  courtName: string;
  nextDate: string;
}

interface Props extends ExpanderComponentProps<ICaseType> {
  handleUpdate?: any;
}

const dateTypes = ['createOn', 'nextDate', 'prevDate'];

const isTypeDate = (date: string) => {
  return dateTypes.includes(date);
};

const ExpandableCase: React.FC<Props> = ({
  data,
  handleUpdate,
}: {
  data: any;
  handleUpdate?: any;
}) => {
  const { _id, __v, ...restData }: ICaseType = data;
  const objectKeys = Object.keys(restData);
  const objectValues = Object.values(restData);

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(restData.title);
  const [prevDate, setPrevDate] = useState(restData.prevDate);
  const [nextDate, setNextDate] = useState(restData.nextDate);
  const [caseCategory, setCaseCategory] = useState(restData.caseCategory);
  const [stage, setStage] = useState(restData.stage);
  const [courtName, setCourtName] = useState(restData.courtName);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios({
        url:
          (envConfig.API_PATH || 'http://localhost:3333/api/v1') +
          '/cases/' +
          id,
        method: 'delete',
      });
      if (response.status === 204) {
        alert('Deleted cases successfully!');
        // router.refresh();
        // window.location.reload();
        handleUpdate();
      }
    } catch (error: any) {
      if (error.message) alert(error.message);
      alert('something went wrong.');
    }
  };

  const handleUpdateDataEvent = () => {
    setIsOpen(true);
  };

  const onSumbitRequest = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios({
        url:
          (envConfig.API_PATH || 'http://localhost:3333/api/v1') +
          '/cases/' +
          _id,
        method: 'patch',
        data: { title, prevDate, nextDate, caseCategory, stage, courtName },
      });

      if (response.status === 200) {
        alert('Case updated!');
        setIsOpen(false);
        handleUpdate();
      }
    } catch (error: any) {
      if (error.message) alert(error.message);
      alert('Something went wrong!');
    }
  };

  return (
    <>
      <div style={{ padding: '2rem' }}>
        <AddCase
          onSubmit={onSumbitRequest}
          setters={{
            setCaseCategory,
            setCourtName,
            setIsOpen,
            setNextDate,
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
        {objectKeys.map((el: any, i: number) => {
          if (isTypeDate(el)) {
            const dateString: string | any = objectValues[i];
            objectValues[i] = new Date(dateString).toDateString();
          }
          return (
            <Typography vairent="p" component="p" key={i}>
              <b>{el}</b>: {objectValues[i]}
            </Typography>
          );
        })}

        <Button
          varient="primary"
          style={{ marginTop: '1rem' }}
          onClick={handleUpdateDataEvent}
        >
          Update
        </Button>
        <Button
          varient="outline"
          style={{ marginTop: '1rem', marginLeft: '2rem' }}
          onClick={() => handleDelete(_id)}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default ExpandableCase;
