import PostItem from './PostItem';
import { postSection } from './PostList.css';

const PostList = ({
  posts,
}: {
  posts: Queries.IndexPageQuery['allContentfulBlogPost']['nodes'];
}) => {
  return (
    <section className={postSection}>
      {posts.map(post => (
        <PostItem
          key={post.slug}
          title={post.title!}
          date={post.date!}
          slug={post.slug!}
        />
      ))}
    </section>
  );
};

export default PostList;
