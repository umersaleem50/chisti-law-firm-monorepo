import Typography from '@/Components/Typography/Typography';
import classes from './Blog_Layout.module.scss';
export interface IBlogContent {
  heading: string;
  paragraph: string;
}
const Blog_Content = ({ heading, paragraph }: IBlogContent) => {
  return (
    <div className={classes['content']}>
      <Typography vairent="h5" component="h5" style={{ fontWeight: 'bold' }}>
        {heading}
      </Typography>
      <Typography
        vairent="p"
        component="p"
        customClasses={[classes['content__para']]}
      >
        {paragraph}
      </Typography>
    </div>
  );
};

export default Blog_Content;
