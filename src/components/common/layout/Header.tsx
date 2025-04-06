import { title, header } from './Header.css';

const Header = () => {
  return (
    <header className={header}>
      <div>
        <h1 className={title}>logDo</h1>
      </div>
    </header>
  );
};

export default Header;
