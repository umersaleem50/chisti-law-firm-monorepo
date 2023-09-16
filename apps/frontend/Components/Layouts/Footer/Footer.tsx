import Typography from '../../Typography/Typography';
import classes from './Footer.module.scss';
const Footer = () => {
  return (
    <>
      <footer className={classes['footer']}>
        <div className={classes['left']}>left</div>
        <div className={classes['right']}>right</div>
      </footer>
      <div className={classes['footer__copyright']}>
        <Typography component="p" vairent="p" color="var(--color-font)">
          &copy; All rights are reserved. 2023
        </Typography>
      </div>
    </>
  );
};

export default Footer;
