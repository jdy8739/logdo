import { GatsbyImage } from 'gatsby-plugin-image';
import { PostDetail } from '../../types/type';
import {
  postHeaderContainer,
  postHeaderContent,
  postHeaderContentInner,
  postTitle,
  postDate,
  postCategory,
  postCategoryContainer,
  postDateContainer,
} from './PostHeader.css';
import { formatDate } from '../utils/dateUtils';

const PostHeader = ({
  post: { title, date, category, thumbnail },
}: {
  post: PostDetail;
}) => {
  return (
    <section>
      <figure className={postHeaderContainer}>
        <div>
          <GatsbyImage image={thumbnail!.gatsbyImageData!} alt={title!} />
        </div>
        <div className={postHeaderContent}>
          <div className={postHeaderContentInner}>
            <h1 className={postTitle}>{title}</h1>
            <div className={postDateContainer}>
              <div className={postCategoryContainer}>
                {category.map((category: string, index: number) => (
                  <small
                    key={`${category}-${index}`}
                    className={postCategory}
                  >{`#${category}`}</small>
                ))}
              </div>
              <time className={postDate}>{formatDate(date!)}</time>
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default PostHeader;
