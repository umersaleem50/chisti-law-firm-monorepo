import Section from '../../Stateless/Section/Section';
import classes from './Blogs.module.scss';
import { text } from './text';
import Blog_Card from '../../Stateless/Blog_Card/Blog_Card';
import GenerateUi from '@/utils/generate-ui/generate-ui';

const fetchThreeLatestBlogs = async () => {
  try {
    const res = await fetch(
      (process.env.API_PATH || 'http://localhost:3333/api/v1') +
        '/blogs?limit=3',
      { method: 'get', cache: 'no-store' }
    );
    const dataObj = await res.json();
    if (dataObj.data) return dataObj.data;
    return dataObj;
  } catch (error) {
    throw new Error('Error');
  }
};

const Blogs = async () => {
  const blogs = await fetchThreeLatestBlogs();

  return (
    <aside className={classes['blogs']}>
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
          {GenerateUi({ RenderElement: Blog_Card, dataArr: blogs })}
        </div>
      </Section>
    </aside>
  );
};
export default Blogs;
