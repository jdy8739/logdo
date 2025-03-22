import { graphql, type HeadFC, type PageProps } from 'gatsby';

export default function Index({
  data: {
    allContentfulBlogPost: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  return (
    <div>
      {nodes.map(({ title, slug, date }) => (
        <div key={slug}>
          {title} / {date} / {slug}
        </div>
      ))}
    </div>
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
