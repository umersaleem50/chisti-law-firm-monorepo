import Filter_Tab, {
  IFilter,
} from '../../../../Components/Stateless/Filter_Tab/Filter_Tab';
import classes from './Team_Filters.module.scss';
const Team_Filters = ({ children }: { children?: any }) => {
  const filterData: IFilter[] = [
    {
      heading: 'Filters: ',
      options: [
        {
          text: 'By Profession',
          type: 'text',
          id: 'heading',
        },
        {
          text: 'Civil Lawyers',
          type: 'checkbox',
          id: 'civil-lawyers',
        },
        {
          text: 'Criminal Lawyers',
          type: 'checkbox',
          id: 'criminal-lawyers',
        },
        {
          text: 'Cyber Lawyers',
          type: 'checkbox',
          id: 'cyber-lawyers',
        },
        {
          text: 'Tax Lawyers',
          type: 'checkbox',
          id: 'tax-lawyers',
        },
        {
          text: 'By Expirence',
          type: 'text',
          id: 'heading',
        },
        {
          text: '+3 Years',
          type: 'checkbox',
          id: '3-years',
        },
        {
          text: '+5 Years',
          type: 'checkbox',
          id: '5-years',
        },
        {
          text: '+10 Years',
          type: 'checkbox',
          id: '10-years',
        },
      ],
    },
  ];

  return (
    <div className={classes['filters']}>
      <Filter_Tab data={filterData} />
      {children}
    </div>
  );
};

export default Team_Filters;
