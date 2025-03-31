import {
  postArticle,
  postTitleWrapper,
  postTitle,
  postDescription,
  postDate,
  postCategory,
} from './PostItem.css';
import { PostItem as PostItemType } from '../../types/type';

const PostItem = ({
  title,
  date,
  // slug,
  decription,
  category,
}: PostItemType) => {
  return (
    <article className={postArticle} role="link">
      <div className={postTitleWrapper}>
        <div>
          <h2 className={postTitle}>{title}</h2>
        </div>
        <div>
          <small className={postDate}>
            {new Date(date!).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </small>
          {/* <p>{slug}</p> */}
        </div>
        <div className={postDescription}>{decription?.decription}</div>
      </div>
      <div>
        {category?.map((item, index) => (
          <small key={`${item}-${index}`} className={postCategory}>
            {`#${item}`}
          </small>
        ))}
      </div>
    </article>
  );
};

export default PostItem;
