import Header from './Header';
import Footer from './Footer';
import { layout, contents } from './Layout.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={layout}>
        <section className={contents}>{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
