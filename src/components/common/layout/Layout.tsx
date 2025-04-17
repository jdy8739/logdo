import Header from './Header';
import Footer from './Footer';
import { layout, contents } from './Layout.css';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from '@reach/router';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { hash } = useLocation();

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const lastScrollYRef = useRef(0);

  useEffect(() => {
    if (hash) {
      timeoutRef.current = setTimeout(() => {
        setIsHeaderVisible(false);
        timeoutRef.current = null;

        lastScrollYRef.current = window.scrollY;
      }, 1500);
    }

    return () => {
      setIsHeaderVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;

        lastScrollYRef.current = window.scrollY;
      }
    };
  }, [hash]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (timeoutRef.current === null) {
        const currentScrollY = window.scrollY;

        const deltaY = Math.abs(currentScrollY - lastScrollYRef.current);

        if (deltaY > 70) {
          setIsHeaderVisible(true);

          lastScrollYRef.current = currentScrollY;
        }
      }
    });
  }, []);

  return (
    <div className={layout}>
      <Header isVisible={isHeaderVisible} />
      <main className={contents}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
