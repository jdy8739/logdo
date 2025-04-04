import { graphql } from 'gatsby';
import PostHeader from '../components/main/PostHeader';
import { PostDetail } from '../types/type';
import PostBody from '../components/main/PostBody';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import RENDER_OPTIONS from '../const/render-options';

export default function Post({
  data: { contentfulBlogPost: post },
}: PostDetail) {
  return (
    <>
      <PostHeader post={post} />
      <PostBody>{renderRichText(post.content, RENDER_OPTIONS)}</PostBody>
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
        # references {
        #   ... on ContentfulAsset {
        #     contentful_id
        #     title
        #     description
        #     gatsbyImageData(width: 774)
        #     __typename
        #   }
        # }
      }
    }
  }
`;
