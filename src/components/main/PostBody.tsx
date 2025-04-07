import { postBody, postBodyContent } from './PostBody.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import { useEffect } from 'react';
import Comments from '../post/Comments';
import { PostDetail } from '../../types/type';
import { Options } from '@contentful/rich-text-react-renderer';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import TableOfContents from '../post/TableOfContents';

const PostBody = ({
  post: { content },
  renderOptions,
}: {
  post: PostDetail;
  renderOptions: Options;
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className={postBody}>
      <div id="content" className={postBodyContent}>
        {renderRichText(content, renderOptions)}
        <Comments />
      </div>
      <TableOfContents rawContent={content.raw} />
    </section>
  );
};

export default PostBody;
