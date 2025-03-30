import PostItem from './PostItem';
import { postSection } from './PostList.css';
import { Post } from '../../types/type';

const PostList = ({ posts }: { posts: Post }) => {
  return (
    <section className={postSection}>
      {posts.map(post => (
        <PostItem key={post.slug} {...post} />
      ))}
    </section>
  );
};

export default PostList;
