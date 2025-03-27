import Header from './Header';
import Footer from './Footer';
import { layout, contents } from './Layout.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={layout}>
      <Header />
      <section className={contents}>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
