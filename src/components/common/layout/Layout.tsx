import Header from './Header';
import Footer from './Footer';
import { layout, contents } from './Layout.css';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from '@reach/router';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { hash } = useLocation();

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isScrollDone = useRef(false);

  useEffect(() => {
    if (hash) {
      setIsHeaderVisible(false);

      timeoutRef.current = setTimeout(() => {
        isScrollDone.current = true;
      }, 1000);
    }

    return () => {
      isScrollDone.current = false;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [hash]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (isScrollDone.current) {
        setIsHeaderVisible(true);
        isScrollDone.current = false;
      }
    });
  }, []);

  return (
    <div className={layout}>
      {isHeaderVisible && <Header />}
      <main className={contents}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
