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

const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const stored = localStorage.getItem('theme');
              const theme = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
              const effective = theme === 'system'
                ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                : theme;
              document.documentElement.setAttribute('data-theme', effective);
            } catch (e) {}
          })();
        `,
      }}
    />,
  ]);
};

export { wrapPageElement, onRenderBody };
