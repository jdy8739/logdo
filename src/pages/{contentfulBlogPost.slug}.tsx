import { graphql } from 'gatsby';
import PostHeader from '../components/main/PostHeader';
import { PostDetail } from '../types/type';
import PostBody from '../components/main/PostBody';

export default function Post({
  data: { contentfulBlogPost: post },
}: PostDetail) {
  return (
    <>
      <PostHeader post={post} />
      <PostBody />
    </>
  );
}

export const query = graphql`
  query PostPage($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date
      category
      thumbnail {
        gatsbyImageData(width: 1000)
      }
      decription {
        decription
      }
      content {
        raw
      }
    }
  }
`;
