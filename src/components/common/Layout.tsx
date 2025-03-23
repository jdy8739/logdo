import Header from './Header';
import Footer from './Footer';
import layout from './Layout.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={layout}>
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
