import { GatsbySSR } from 'gatsby';
import Layout from './src/components/common/layout/Layout';

const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      as="style"
      crossOrigin="anonymous"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
      key="pretendard-font"
    />,
  ]);
};

const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
}: {
  element: React.ReactNode;
}) => {
  return <Layout>{element}</Layout>;
};

export { wrapPageElement, onRenderBody };
