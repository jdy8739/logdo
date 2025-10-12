import { GatsbySSR } from 'gatsby';
import Layout from './src/components/common/layout/Layout';
import { ThemeProvider } from './src/contexts/ThemeContext';
import 'prismjs/themes/prism-tomorrow.min.css';
import './src/styles/prism-theme.css';
import './src/styles/fonts.css';
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
