import Typography from '@/Components/Typography/Typography';
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
  value?: string;
  onChange?: any;
  label?: string;
};

const Select_Input = ({
  options,
  selected,
  value,
  onChange,
  label,
}: ISelect) => {
  return (
    <div className={classes['select']}>
      {label && (
        <label>
          <Typography vairent="p" component="p" color="var(--color-font)">
            {label}
          </Typography>
        </label>
      )}
      <select
        className={classes['input']}
        defaultValue={selected}
        value={value}
        onChange={onChange}
      >
        {generateOptions(options)}
      </select>
    </div>
  );
};

export default Select_Input;
