import {
  postArticle,
  postTitleWrapper,
  postTitle,
  postDescription,
  postDate,
  postCategory,
  postLink,
} from './PostItem.css';
import { PostItem as PostItemType } from '../../types/type';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { formatDate } from '../../utils/dateUtils';

const PostItem = ({
  title,
  date,
  thumbnail,
  slug,
  decription,
  category,
}: PostItemType) => {
  return (
    <article className={postArticle}>
      <Link to={`/${slug}`} className={postLink}>
        <figure>
          <GatsbyImage image={thumbnail!.gatsbyImageData!} alt={title!} />
        </figure>
        <div className={postTitleWrapper}>
          <div>
            <h2 className={postTitle}>{title}</h2>
          </div>
          <time>
            <small className={postDate}>{formatDate(date!)}</small>
          </time>
          <p className={postDescription}>{decription?.decription}</p>
        </div>
        <div>
          {category?.map((item, index) => (
            <small key={`${item}-${index}`} className={postCategory}>
              {`#${item}`}
            </small>
          ))}
        </div>
      </Link>
    </article>
  );
};

export default PostItem;
