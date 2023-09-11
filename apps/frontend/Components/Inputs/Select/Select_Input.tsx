import classes from './Select_Input.module.scss';

export type IOptions = {
  value: string | number;
  text: string | number;
};

const generateOptions = (options: IOptions[]) => {
  return options.map(({ value, text }, i: number) => {
    return (
      <option className={classes['option']} value={value} key={i}>
        {text}
      </option>
    );
  });
};
export type ISelect = {
  options: IOptions[];
  selected?: string;
};

const Select_Input = ({ options, selected }: ISelect) => {
  return (
    <select className={classes['select']} defaultValue={selected}>
      {generateOptions(options)}
    </select>
  );
};

export default Select_Input;
