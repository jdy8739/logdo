import { graphql, type HeadFC, type PageProps } from 'gatsby';
import '../styles/reset.css';
import Layout from '../components/common/Layout';

export default function Index({
  data: {
    allContentfulBlogPost: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  return (
    <Layout>
      {nodes.map(({ title, slug, date }) => (
        <div key={slug}>
          {title} / {date} / {slug}
        </div>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query IndexPage {
    allContentfulBlogPost {
      nodes {
        title
        slug
        date
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
