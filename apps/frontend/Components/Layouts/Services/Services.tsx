'use client';
import { services_data } from '@/text/homepage_texts';
import { text } from './text';
import Section from '../../Stateless/Section/Section';
import Service_Card, {
  IServiceCard,
} from '../../Stateless/Service_Card/Service_Card';
import classes from './Service.module.scss';
const Services = () => {
  return (
    <Section
      heading={text['heading']}
      paragraph={text['paragraph']}
      buttonOptions={{ text: 'show all', url: '/services' }}
    >
      <div className={classes['services']}>
        {generateServices(services_data)}
      </div>
    </Section>
  );
};

function generateServices(dataArr: IServiceCard[]) {
  return dataArr.map(({ Icon, url, title }, i) => {
    return <Service_Card Icon={Icon} url={url} title={title} key={i} />;
  });
}
export default Services;
