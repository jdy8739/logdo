import { graphql, type HeadFC, type PageProps } from 'gatsby';
import '../styles/reset.css';
import PostList from '../components/main/PostList';

export default function Index({
  data: {
    allContentfulBlogPost: { nodes: posts },
  },
}: PageProps<Queries.IndexPageQuery>) {
  return (
    <>
      <PostList posts={posts} />
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
        category
        thumbnail {
          gatsbyImageData(width: 500)
        }
        decription {
          decription
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
