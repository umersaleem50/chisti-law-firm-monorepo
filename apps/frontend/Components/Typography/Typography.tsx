import { CSSProperties, createElement } from 'react';
import classes from './Typography.module.scss';
export type ITypography = {
  component: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  vairent: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hero' | 'secondary';
  textProps?: any;
  text?: any;
  children?: any;
  customClasses?: string[];
  style?: CSSProperties;
  color?: string;
};
const Typography = ({
  component,
  textProps,
  text,
  children,
  vairent,
  customClasses,
  style,
  color,
}: ITypography) => {
  const typogarphyElement = createElement(
    component,
    {
      className: [classes[vairent], customClasses].flat().join(' '),
      style: { color, ...style },
      ...textProps,
    },
    text || children
  );
  return typogarphyElement;
};

export default Typography;
