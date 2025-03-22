import { graphql, type PageProps } from 'gatsby';

export default function Post({ data }: PageProps<Queries.PostPageQuery>) {
  return (
    <div>
      <div>{data.contentfulBlogPost?.title}</div>
      <div>{data.contentfulBlogPost?.date}</div>
      <div>{data.contentfulBlogPost?.slug}</div>
    </div>
  );
}

export const query = graphql`
  query PostPage($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      date
    }
  }
`;
