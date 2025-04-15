import Header from './Header';
import Footer from './Footer';
import { layout, contents } from './Layout.css';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from '@reach/router';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { hash } = useLocation();

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hash) {
      setIsHeaderVisible(false);

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
      }, 1000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [hash]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!timeoutRef.current) {
        setIsHeaderVisible(true);
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
