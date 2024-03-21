import Section from '../../Stateless/Section/Section';
import classes from './Blogs.module.scss';
import { text } from './text';
import Blog_Card from '../../Stateless/Blog_Card/Blog_Card';
import GenerateUi from '@/utils/generate-ui/generate-ui';
import { envConfig } from '@/envConfig';
import Typography from '@/Components/Typography/Typography';

const fetchThreeLatestBlogs = async () => {
  try {
    const res = await fetch(
      (envConfig.API_PATH || 'http://localhost:3333/api/v1') + '/blogs?limit=3',
      { method: 'get', cache: 'no-store' }
    );
    const dataObj = await res.json();
    if (dataObj.data) return dataObj.data;
    
    return dataObj;

  } catch (error) {
    console.log('this is error at blogs.tsx');

    throw new Error('this is error that is causes');
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
        {blogs.length === 0 && <div>
          <Typography vairent='p' component='p'>No latest blogs found.</Typography>
        </div>}
      </Section>
    </aside>
  );
};
export default Blogs;
