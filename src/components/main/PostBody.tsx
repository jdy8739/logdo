import { postBody, postBodyContent } from './PostBody.css';
import Prism from 'prismjs';
import { useEffect } from 'react';

const PostBody = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className={postBody}>
      <div id="content" className={postBodyContent}>
        {children}
      </div>
    </section>
  );
};

export default PostBody;
