import {
  notFoundContainer,
  notFoundDescription,
  notFoundLink,
  notFoundTitle,
} from './NotFound.css';
import { Link } from 'gatsby';

const NotFound = () => {
  return (
    <main>
      <section className={notFoundContainer}>
        <h1 className={notFoundTitle}>페이지를 찾을 수 없습니다.</h1>
        <p className={notFoundDescription}>다른 콘텐츠를 보러 가보시겠어요?</p>
        <Link to="/" className={notFoundLink}>
          메인 페이지로
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
