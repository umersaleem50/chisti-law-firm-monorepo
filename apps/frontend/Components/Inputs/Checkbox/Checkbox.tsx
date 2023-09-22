import { useState } from 'react';
import classes from './Checkbox.module.scss';

export interface ICheckbox {
  text: string;
  id: string | undefined;
  isChecked?: boolean;
  onClick?: () => void;
}

const Checkbox = ({
  text,
  id,
  isChecked = false,
  onClick = () => {},
}: ICheckbox) => {
  const [isActive, setIsActive] = useState(isChecked);
  return (
    <div
      className={classes['checkbox']}
      onClick={() => {
        setIsActive((prev) => !prev);
        onClick();
      }}
    >
      <input
        type="checkbox"
        className={[
          classes['checkbox__input'],
          isActive ? classes['checkbox__input--active'] : '',
        ].join(' ')}
        id={id}
        value={text}
      />

      <label className={classes['checkbox__label']} htmlFor={id}>
        {text}
      </label>
    </div>
  );
};
export default Checkbox;
