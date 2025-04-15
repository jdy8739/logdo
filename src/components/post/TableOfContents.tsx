import useTableContents from '../../hooks/useTableOfContents';
import {
  tocContainer,
  tocTitle,
  tocList,
  tocItem,
} from './TableOfContents.css';
import { useCallback } from 'react';

const TableOfContents = ({ rawContent }: { rawContent: string }) => {
  const { tableOfContents, activeId } = useTableContents(rawContent);

  const scrollTo = useCallback((id: string) => {
    const titleElement = document.getElementById(id);

    if (titleElement) {
      const y = titleElement.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <aside className={tocContainer}>
      <div>
        <h3 className={tocTitle}>목차</h3>
      </div>
      <div>
        <ul className={tocList}>
          {tableOfContents.map(({ id, title, depth }, index) => {
            const isActive = id === activeId;

            return (
              <li
                key={`${id}-${index}`}
                style={{
                  paddingLeft: `${depth * 5}px`,
                  // color: `rgba(0, 0, 0, ${isActive ? 1 : 1 - depth / 5})`,
                  // fontSize: `${15 - depth}px`,
                  // fontWeight: isActive ? 'bold' : 'normal',
                }}
              >
                <button
                  className={tocItem}
                  onClick={() => scrollTo(id)}
                  style={{
                    color: `rgba(0, 0, 0, ${isActive ? 1 : 1 - depth / 5})`,
                    fontSize: `${15 - depth}px`,
                    fontWeight: isActive ? 'bold' : 'normal',
                  }}
                >
                  {title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default TableOfContents;
