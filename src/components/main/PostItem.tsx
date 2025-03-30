import { postArticle, postTitle } from './PostItem.css';
import { PostItem as PostItemType } from '../../types/type';

const PostItem = ({
  title,
  date,
  slug,
  decription,
  category,
}: PostItemType) => {
  return (
    <article className={postArticle} role="link">
      <div>
        <h2 className={postTitle}>{title}</h2>
      </div>
      <div>
        <p>{date}</p>
        <p>{slug}</p>
      </div>
      <div>{decription?.decription}</div>
      <div>{category}</div>
    </article>
  );
};

export default PostItem;
