import { CSSProperties } from 'react';
import classes from './Textbox.module.scss';
export interface ITextbox {
  label?: string;
  placeholder: string;
  required?: boolean;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string | number;
  type?: 'text' | 'password' | 'email' | 'field';
  inputStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  textboxStyle?: CSSProperties;
  customClasses?: string[];
  varient?: 'default' | 'field';
  isField?: boolean;
}

const Textbox = ({
  label,
  placeholder,
  required,
  onChange,
  value,
  type = 'text',
  inputStyle,
  labelStyle,
  textboxStyle,
  customClasses,
  varient = 'default',
  isField = false,
}: ITextbox) => {
  return (
    <div
      className={[classes['textbox'], customClasses].flat().join(' ')}
      style={textboxStyle}
    >
      {label && (
        <label style={labelStyle} className={classes['textbox__label']}>
          {label}
        </label>
      )}

      {!isField ? (
        <input
          className={[classes['input'], classes[`input--${varient}`]].join(' ')}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          value={value}
          type={type}
          style={inputStyle}
        />
      ) : (
        <textarea
          rows={5}
          className={[classes['input'], classes[`input--field`]].join(' ')}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          value={value}
          style={inputStyle}
        />
      )}
    </div>
  );
};

export default Textbox;
