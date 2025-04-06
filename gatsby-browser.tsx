import { GatsbySSR } from 'gatsby';
import Layout from './src/components/common/Layout';
import 'prismjs/themes/prism-tomorrow.min.css';

const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
}: {
  element: React.ReactNode;
}) => {
  return <Layout>{element}</Layout>;
};

export { wrapPageElement };
