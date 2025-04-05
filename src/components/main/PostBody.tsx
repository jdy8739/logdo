import { postBody, postBodyContent } from './PostBody.css';

const PostBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={postBody}>
      <div className={postBodyContent}>{children}</div>
    </section>
  );
};

export default PostBody;
