'use client';
import classes from './Button.module.scss';
import { CSSProperties } from 'react';
import { IconBaseProps } from 'react-icons/lib';
export type IButton = {
  varient: 'primary' | 'outline' | 'text';
  children?: any;
  style?: CSSProperties;
  text?: string;
  onClick?: any;
  customClasses?: string[];
  iconStart?: React.ElementType<IconBaseProps>;
  iconEnd?: any;
  modifier?: 'secondary';
  isActive?: boolean;
};

const Button = ({
  varient,
  children,
  text,
  onClick,
  style,
  customClasses,
  iconEnd,
  iconStart,
  modifier,
  isActive,
}: IButton) => {
  return (
    <button
      className={[
        classes['button'],
        classes[varient],
        modifier ? classes[`${varient}--${modifier}`] : '',
        isActive ? classes[`${varient}--active`] : '',
        customClasses,
      ]
        .flat()
        .join(' ')}
      onClick={onClick}
      style={style}
    >
      {iconStart && iconStart}
      {children || text}
      {iconEnd && iconEnd}
    </button>
  );
};

export default Button;
