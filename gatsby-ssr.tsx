import { GatsbySSR } from 'gatsby';
import Layout from './src/components/common/layout/Layout';
import { ThemeProvider } from './src/contexts/ThemeContext';

const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
}: {
  element: React.ReactNode;
}) => {
  return (
    <ThemeProvider>
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};

export { wrapPageElement };
