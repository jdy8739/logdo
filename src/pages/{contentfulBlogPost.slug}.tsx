import { graphql, HeadFC, HeadProps } from 'gatsby';
import PostHeader from '../components/post/PostHeader';
import { PostDetail } from '../types/type';
import PostBody from '../components/post/PostBody';
import RENDER_OPTIONS from '../const/render-options';
import SEO from '../components/common/Seo';

function Post({
  data: { contentfulBlogPost: post },
}: PostDetail) {
  return (
    <>
      <PostHeader post={post} />
      <PostBody post={post} renderOptions={RENDER_OPTIONS} />
    </>
  );
}

const query = graphql`
  query PostPage($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date
      slug
      category
      thumbnail {
        url
        gatsbyImageData(width: 1000)
      }
      decription {
        decription
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 774)
            __typename
          }
        }
      }
    }
  }
`;

const Head: HeadFC<Queries.PostPageQuery> = ({
  data: { contentfulBlogPost },
}: HeadProps<PostDetail>) => (
  <SEO
    title={contentfulBlogPost?.title ?? ''}
    description={contentfulBlogPost?.decription?.decription ?? ''}
    pathname={`/${contentfulBlogPost?.slug}`}
    image={contentfulBlogPost?.thumbnail?.url ?? ''}
  />
);

export default Post;
export { query, Head };
