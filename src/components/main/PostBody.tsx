import { postBody, postBodyContent } from './PostBody.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import { useEffect } from 'react';
import Comments from '../post/Comments';

const PostBody = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className={postBody}>
      <div id="content" className={postBodyContent}>
        {children}
        <Comments />
      </div>
    </section>
  );
};

export default PostBody;
