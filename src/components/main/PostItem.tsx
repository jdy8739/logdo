import { postArticle, postTitle } from './PostItem.css';

const PostItem = ({
  title,
  date,
  slug,
}: {
  title: string;
  date: string;
  slug: string;
}) => {
  return (
    <article className={postArticle}>
      <div>
        <h2 className={postTitle}>{title}</h2>
      </div>
      <div>
        <p>{date}</p>
        <p>{slug}</p>
      </div>
    </article>
  );
};

export default PostItem;
