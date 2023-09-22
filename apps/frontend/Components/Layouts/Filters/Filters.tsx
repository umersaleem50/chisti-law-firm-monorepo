import Filter_Tab from '../../Stateless/Filter_Tab/Filter_Tab';
import Section from '../../Stateless/Section/Section';
import classes from './Filters.module.scss';
import { IFilter } from '../../Stateless/Filter_Tab/Filter_Tab';
export interface IFilters {
  data: IFilter[];
  activeId: string;
}

const Filters = ({ data, activeId }: IFilters) => {
  return (
    <div className={classes['filters']}>
      <Filter_Tab data={data} activeId={activeId} />
      <div>results</div>
    </div>
  );
};

export default Filters;
