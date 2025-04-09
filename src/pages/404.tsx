import { HeadFC, PageProps } from 'gatsby';
import SEO from '../components/common/Seo';
import NotFound from '../components/common/404/NotFound';

const NotFoundPage: React.FC<PageProps> = () => {
  return <NotFound />;
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO />;
