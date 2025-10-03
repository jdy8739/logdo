import { GatsbySSR } from 'gatsby';
import Layout from './src/components/common/layout/Layout';
import { ThemeProvider } from './src/contexts/ThemeContext';
import './src/styles/prism-theme.css';
import './src/styles/global.css.ts';

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
