import Header from './Header';
import Footer from './Footer';
import { layout, contents } from './Layout.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={layout}>
      <Header />
      <main className={contents}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
