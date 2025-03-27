import { graphql, type HeadFC, type PageProps } from 'gatsby';
import '../styles/reset.css';
import PostList from '../components/main/PostList';

export default function Index({
  data: {
    allContentfulBlogPost: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  return (
    <>
      <PostList posts={nodes} />
    </>
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
