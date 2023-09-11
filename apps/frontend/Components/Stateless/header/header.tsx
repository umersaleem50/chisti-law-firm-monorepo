'use client';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { header_text } from 'apps/frontend/text/homepage_texts';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import Tags, { ITag } from '../Tags/Tags';
import classes from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

const tagsArr: ITag[] = [
  { primaryText: 'more than', secondaryText: '+300 Cases' },
  { primaryText: 'more than', secondaryText: '+300 Cases' },
  { primaryText: 'more than', secondaryText: '+300 Cases' },
];

export function Header(props: HeaderProps) {
  return (
    <div className={classes['container']}>
      <div className={classes['left']}>
        <div className={classes['left__headings']}>
          <Typography vairent="hero" component="h1">
            {header_text['primary']}
          </Typography>
          <Typography vairent="p" component="p">
            {header_text['paragraph']}
          </Typography>
        </div>

        <div className={classes['left__buttons']}>
          <Button
            varient="primary"
            onClick={() => {
              alert('header:34');
            }}
            style={{ marginRight: '2rem' }}
          >
            Book appointment
          </Button>
          <Button
            varient="text"
            onClick={() => {
              alert('header:41');
            }}
          >
            Learn More
          </Button>
        </div>
        <div className={classes['left__tags']}>{generateTags(tagsArr)}</div>
      </div>
      <div className={classes['right']}>right</div>
    </div>
  );
}

function generateTags(arrTags: ITag[]) {
  return arrTags.map(({ primaryText, secondaryText }, i) => {
    return (
      <Tags primaryText={primaryText} secondaryText={secondaryText} key={i} />
    );
  });
}

export default Header;
