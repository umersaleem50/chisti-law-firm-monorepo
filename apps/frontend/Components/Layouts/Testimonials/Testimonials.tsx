'use client';
import { useState } from 'react';
import { GenerateUi } from '@law-firm/generate-ui';
import { testmonials_text } from '../../../text/testimonial_section_text';
import Section from '../../Stateless/Section/Section';
import classes from './Testimonial.module.scss';
import Testimonial_Card, {
  ITestimonialCard,
} from '../../Stateless/Testimonial_Card/Testimonial_Card';
import Slider_Dots from '../../Stateless/Slider_Dots/Slider_Dots';

const temp_comment_data: ITestimonialCard[] = [
  {
    isActive: true,
    personName: 'Bilal Zahid',
    text: '“Working with Mian, Shafeeq Sb. was very great. He’s very corporative & gives very good advice”',
  },
  {
    personName: 'Bilal Zahid',
    text: '“Working with Mian, Shafeeq Sb. was very great. He’s very corporative & gives very good advice”',
  },
  {
    personName: 'Bilal Zahid',
    text: '“Working with Mian, Shafeeq Sb. was very great. He’s very corporative & gives very good advice”',
  },
  {
    personName: 'Bilal Zahid',
    text: '“Working with Mian, Shafeeq Sb. was very great. He’s very corporative & gives very good advice”',
  },
];

const Testimonials = () => {
  const [count, setCount] = useState<number>(1);
  return (
    <div className={classes['testmonials']}>
      <Section
        heading={testmonials_text.heading}
        paragraph={testmonials_text.paragraph}
      >
        <div className={classes['container']}>
          <Slider_Dots
            count={count}
            dotsLength={temp_comment_data.length}
            setCount={setCount}
          />
          <div className={classes['slider']}>
            {GenerateUi({
              RenderElement: Testimonial_Card,
              dataArr: temp_comment_data,
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Testimonials;
