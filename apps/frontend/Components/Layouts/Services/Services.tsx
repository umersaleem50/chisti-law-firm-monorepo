'use client';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { services_data } from 'apps/frontend/text/homepage_texts';
import Section from '../../Stateless/Section/Section';
import Service_Card, {
  IServiceCard,
} from '../../Stateless/Service_Card/Service_Card';
import classes from './Service.module.scss';
const Services = () => {
  return (
    <Section
      heading="Services"
      paragraph="We’re offering a ton of services for you. Our lawyers are professionals and have ton of experience in their respected field."
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
