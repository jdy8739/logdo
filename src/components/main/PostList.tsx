import PostItem from './PostItem';

const PostList = ({
  posts,
}: {
  posts: Queries.IndexPageQuery['allContentfulBlogPost']['nodes'];
}) => {
  return (
    <section>
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
