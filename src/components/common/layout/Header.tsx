import { Link } from 'gatsby';
import { title, header, topRow, socialLinksContainer, slideUp } from './Header.css';
import { AiFillGithub, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import ThemeToggle from '../ThemeToggle';

const Header = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <header className={`${header} ${isVisible ? '' : slideUp}`}>
      <div className={topRow}>
        <h1 className={title}>
          <Link to="/">logDo</Link>
        </h1>
      </div>
      <div className={socialLinksContainer}>
        <ThemeToggle />
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
        <span>
          <a
            href="https://www.notion.so/FE-edd9d71558484a87b9944d5155b40089"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFileText />
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
