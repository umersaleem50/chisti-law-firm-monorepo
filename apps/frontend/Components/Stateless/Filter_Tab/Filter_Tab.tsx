'use client';
import { useState } from 'react';
import Button, { Back_to_Home_Button } from '../../Button/Button';
import Textbox from '../../Inputs/Textbox/Textbox';
import classes from './Filter_Tab.module.scss';
import Typography from '../../Typography/Typography';
import Checkbox from '../../Inputs/Checkbox/Checkbox';

export type IFilterOptions = {
  type: 'text' | 'button' | 'checkbox';
  // optionType: 'button' | 'checkbox';
  text: string;
  isActive?: boolean;
  id: string;
};
export interface IFilter {
  heading: string;
  options: IFilterOptions[];
}

const Filter_Tab = ({
  data,
  activeId,
}: {
  data: IFilter[];
  activeId?: string;
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [activeValue, setActiveValue] = useState(activeId);

  const generate_options = (optionsArr: IFilterOptions[]) => {
    return optionsArr.map((el, i) => {
      if (el.type === 'text') {
        return (
          <Typography
            vairent="p"
            component="p"
            key={i}
            customClasses={[classes['container__text']]}
            color={'var(--color-secondary)'}
          >
            {el.text}
          </Typography>
        );
      } else if (el.type === 'button') {
        return (
          <Button
            varient="fullwidth"
            onClick={() => setActiveValue(el.id)}
            key={i}
            id={el.id}
            isActive={el.id === activeValue}
          >
            {el.text}
          </Button>
        );
      } else {
        return (
          <Checkbox text={el.text} isChecked={el.isActive} key={i} id={el.id} />
        );
      }
    });
  };

  const generate_filters = (dataArr: IFilter[]) => {
    return dataArr.map((el, i) => {
      return (
        <div className={classes['container']} key={i}>
          <Typography
            vairent="h5"
            component="h5"
            customClasses={[classes['heading']]}
          >
            {el.heading}
          </Typography>
          {generate_options(el.options)}
        </div>
      );
    });
  };

  return (
    <div className={classes['tab']}>
      <Back_to_Home_Button />
      <Textbox
        type="search"
        placeholder="Search for service"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {generate_filters(data)}
    </div>
  );
};
export default Filter_Tab;
