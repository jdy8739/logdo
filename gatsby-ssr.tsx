import { GatsbySSR } from 'gatsby';
import Layout from './src/components/common/Layout';

const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
}: {
  element: React.ReactNode;
}) => {
  return <Layout>{element}</Layout>;
};

export { wrapPageElement };
