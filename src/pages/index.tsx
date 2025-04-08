import { graphql, type HeadFC, type PageProps } from 'gatsby';
import '../styles/reset.css';
import PostList from '../components/post/PostList';
import Introduction from '../components/main/Introduction';
import Category from '../components/main/Category';
import { useMemo, useState, useCallback } from 'react';

export default function Index({
  data: {
    allContentfulBlogPost: { nodes: posts },
  },
}: PageProps<Queries.IndexPageQuery>) {
  const [category, setCategory] = useState('ALL');

  const handleCategoryChange = useCallback((category: string) => {
    setCategory(category);
  }, []);

  const categoryMap = useMemo(() => {
    return posts.reduce(
      (acc, cur) => {
        if (cur.category) {
          for (const category of cur.category) {
            if (acc.has(category)) {
              acc.set(category, acc.get(category) + 1);
            } else {
              acc.set(category, 1);
            }
          }
        }

        return acc;
      },
      new Map().set('ALL', posts.length),
    );
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (category === 'ALL') {
      return posts;
    }

    return posts.filter(({ category: postCategory }) =>
      postCategory?.includes(category),
    );
  }, [category, posts]);

  return (
    <>
      <Introduction />
      <Category
        category={category}
        categoryMap={categoryMap}
        handleCategoryChange={handleCategoryChange}
      />
      <PostList posts={filteredPosts} />
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
