'use client';
import classes from './Button.module.scss';
import { CSSProperties } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { HiOutlineArrowNarrowLeft as IconBackToHomepage } from 'react-icons/hi';
import { CiMenuFries as IconMenu } from 'react-icons/ci';
import { IoCloseOutline as IconClose } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
export type IButton = {
  varient: 'primary' | 'outline' | 'text' | 'fullwidth';
  children?: any;
  style?: CSSProperties;
  text?: string;
  onClick?: any;
  customClasses?: string[];
  iconStart?: React.ElementType<IconBaseProps>;
  iconEnd?: any;
  modifier?: 'secondary';
  isActive?: boolean;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
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
  id,
  type,
}: IButton) => {
  return (
    <button
      id={id}
      type={type}
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

export const Back_to_Home_Button = ({
  text = 'back to homepage',
  url = '/',
  style,
}: {
  text?: string;
  url?: string;
  style?: CSSProperties;
}) => {
  const router = useRouter();
  return (
    <button
      className={classes['homepage']}
      onClick={() => router.push(url)}
      style={style}
    >
      <IconBackToHomepage style={{ marginRight: '1rem' }} />
      {text}
    </button>
  );
};

export const MenuButton = ({
  onClick,
  isToggle,
}: {
  onClick: any;
  isToggle: boolean;
}) => {
  return (
    <button className={classes['menu']} onClick={onClick} type="button">
      {!isToggle && <IconMenu className={classes['menu__icon']} />}
      {isToggle && <IconClose className={classes['menu__icon']} />}
    </button>
  );
};

export default Button;
