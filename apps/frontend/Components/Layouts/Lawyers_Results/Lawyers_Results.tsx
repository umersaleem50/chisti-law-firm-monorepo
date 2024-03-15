'use client';
import { useEffect, useState } from 'react';
import Lawyer_Card, {
  ILawyerCard,
} from '../../Stateless/Lawyer_Card/Lawyer_Card';
import Typography from '../../Typography/Typography';
import classes from './Lawyers_Results.module.scss';
import axios from 'axios';
import { envConfig } from '@/envConfig';

export interface IServiceResult {
  src: string;
  heading: string;
  description: string;
  dataArr: Array<{ heading: string; paragraph?: string }>;
}

const generateContent = (dataArr: Array<ILawyerCard>) => {
  return dataArr.map((el, i) => {
    return (
      <Lawyer_Card
        profilePicture={el.profilePicture}
        firstName={el.firstName}
        lastName={el.lastName}
        workplace={el.workplace}
        expirenceYears={el.expirenceYears}
        professions={el.professions}
        _id={el._id}
        key={i}
      />
    );
  });
};

const Lawyers_Results = () => {
  const [lawyers, setLaywer] = useState([]);
  const [error, setError] = useState(false);
  const fetchLawyers = async () => {
    try {
      const response = await axios({
        url: (envConfig.API_URL || 'http://localhost:3333/api/v1') + '/lawyers',
        method: 'GET',
      });
      if (response.status === 200) {
        setLaywer(response.data.data);
      }
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchLawyers();
  }, []);

  return (
    <div className={classes['results']}>
      <div className={classes['results__top']}>
        <Typography vairent="p" component="p" text={`Results:`} />
        <Typography
          vairent="p"
          component="p"
          text={`${lawyers.length} Results found`}
        />
      </div>
      <div className={classes['container']}>
        {error && (
          <Typography vairent="p" component="p">
            Something went wrong!
          </Typography>
        )}
        {generateContent(lawyers)}
      </div>
    </div>
  );
};

export default Lawyers_Results;
