'use client';
import Typography from '@/Components/Typography/Typography';
import CasesTable from '@/Components/tables/cases/casesTable';
import classes from './page.module.scss';
import Button from '@/Components/Button/Button';
import { IoIosAdd as IconAdd } from 'react-icons/io';
import AddCase from '@/Components/forms/addCase/addCase';
import { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [prevDate, setPrevDate] = useState('');
  const [nextDate, setNextDate] = useState('');
  const [caseCategory, setCaseCategory] = useState('Civil Cases');
  const [stage, setStage] = useState('');
  const [courtName, setCourtName] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const onSumbitRequest = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios({
        url:
          (process.env.NEXT_PUBLIC_API_PATH || 'http://localhost:3333/api/v1') +
          '/cases',
        method: 'post',
        data: { title, prevDate, nextDate, caseCategory, stage, courtName },
      });

      if (response.status === 201) {
        alert('Case created!');
        setIsOpen(false);
        // router.refresh();
        window.location.reload();
      }
    } catch (error: any) {
      console.log(error);

      if (error.message) alert(error.message);
    }
  };
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
      <div style={{ width: '100%' }}>
        <div className={classes['main__top']}>
          <Typography vairent="h6" component="h5">
            Your Cases
          </Typography>
          <Button
            varient="text"
            customClasses={[classes['button']]}
            onClick={handleOpenModal}
          >
            <IconAdd className={classes['icon']} />
            Add Case
          </Button>
        </div>

        <CasesTable />
      </div>
    </>
  );
}
