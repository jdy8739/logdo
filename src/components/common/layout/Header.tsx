import { Link } from 'gatsby';
import { title, header, iconContainer } from './Header.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
  return (
    <header className={header}>
      <div>
        <h1 className={title}>
          <Link to="/">logDo</Link>
        </h1>
      </div>
      <div className={iconContainer}>
        <span>
          <a href="https://github.com/jdy8739" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/doyoung-chung-270b08259/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
