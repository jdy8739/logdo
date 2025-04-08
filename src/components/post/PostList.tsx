import PostItem from './PostItem';
import { Post } from '../../types/type';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import { useMemo, useState } from 'react';

const SLICE_COUNT = 10;

const PostList = ({ posts }: { posts: Post }) => {
  const [groupKey, setGroupKey] = useState(1);

  const postItems = useMemo(
    () => posts.slice(0, groupKey * SLICE_COUNT),
    [groupKey, posts],
  );

  return (
    <section>
      <MasonryInfiniteGrid
        gap={20}
        onRequestAppend={({ groupKey: _groupKey = 0 }) => {
          const currentGroupKey = (Number(_groupKey) || 0) + 1;

          if (groupKey === currentGroupKey) {
            setGroupKey(currentGroupKey + 1);
          }
        }}
      >
        {postItems.map(post => (
          <PostItem key={post.slug} {...post} />
        ))}
        {postItems.length === 2 && <article />}
      </MasonryInfiniteGrid>
    </section>
  );
};

export default PostList;
