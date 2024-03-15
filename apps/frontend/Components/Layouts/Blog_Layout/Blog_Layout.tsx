import Image from 'next/image';
import classes from './Blog_Layout.module.scss';
import Typography from '@/Components/Typography/Typography';
import { Back_to_Home_Button } from '@/Components/Button/Button';
import GenerateUi from '@/utils/generate-ui/generate-ui';
import Blog_Content, { IBlogContent } from './Blog_Content';
import { envConfig } from '@/envConfig';
export interface IBlogLayout {
  coverPicture: string;
  heading: string;
  description: string;
  readtime: string;
  createdOn: string;
  content: IBlogContent[];
}
const BlogLayout = ({
  coverPicture,
  heading,
  description,
  readtime,
  createdOn,
  content,
}: IBlogLayout) => {
  return (
    <article className={classes['main']}>
      <div className={classes['main__top']}>
        <Back_to_Home_Button />
        <Typography vairent="h5" component="h4">
          Posted On: <time>{new Date(createdOn).toDateString()}</time>
        </Typography>
      </div>
      <figure className={classes['coverPicture']}>
        <Image
          src={
            envConfig.STORAGE_BUCKET_URL + '/assets/blogs/large/' + coverPicture
          }
          alt="Blog"
          fill
          style={{ objectFit: 'cover' }}
        />
      </figure>
      <Typography vairent="secondary" component="h1">
        {heading}
      </Typography>
      <div className={classes['main__top']}>
        <Typography
          vairent="p"
          component="p"
          customClasses={[classes['description']]}
        >
          {description}
        </Typography>
        <Typography vairent="h3" component="h3" color="var(--color-secondary)">
          {readtime}
        </Typography>
      </div>
      {GenerateUi({ RenderElement: Blog_Content, dataArr: content })}
    </article>
  );
};

export default BlogLayout;
