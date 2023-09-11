import Tags from './Tags';

export default {
  title: 'Stateless/Tags',
  component: Tags,
};

export const Primary = () => (
  <Tags primaryText="more than" secondaryText="+300 Cases" />
);
