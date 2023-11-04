// eslint-disable-next-line @nx/enforce-module-boundaries
import Section from '../../Stateless/Section/Section';
import classes from './Blogs.module.scss';
import { text } from './text';
import Blog_Card, { IBlogCard } from '../../Stateless/Blog_Card/Blog_Card';
import { GenerateUi } from '@law-firm/generate-ui';

const temp_blog_data: IBlogCard[] = [
  {
    alt: 'civil law',
    heading: 'Why you should file for the civil suit?',
    paragraph:
      'We’re offering a ton of services for you. Our lawyers are professionals and have ton of experience in their respected field.',
    src: 'blog.jpg',
    isButtonActive: true,
  },
  {
    alt: 'civil law',
    heading: 'Why you should file for the civil suit?',
    paragraph:
      'We’re offering a ton of services for you. Our lawyers are professionals and have ton of experience in their respected field.',
    src: 'blog.jpg',
  },
  {
    alt: 'civil law',
    heading: 'Why you should file for the civil suit?',
    paragraph:
      'We’re offering a ton of services for you. Our lawyers are professionals and have ton of experience in their respected field.',
    src: 'blog.jpg',
  },
];

const Blogs = () => {
  return (
    <div className={classes['blogs']}>
      <Section
        heading={text['heading']}
        paragraph={text['paragarph']}
        buttonOptions={{
          text: 'Show All',
          url: '/team',
          varient: 'outline',
        }}
      >
        <div className={classes['container']}>
          {GenerateUi({ RenderElement: Blog_Card, dataArr: temp_blog_data })}
        </div>
      </Section>
    </div>
  );
};
export default Blogs;
