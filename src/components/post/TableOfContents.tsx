import { Link } from 'gatsby';
import useTableContents from '../../hooks/useTableOfContents';
import {
  tocContainer,
  tocTitle,
  tocList,
  tocItem,
} from './TableOfContents.css';

const TableOfContents = ({ rawContent }: { rawContent: string }) => {
  const { tableOfContents, activeId } = useTableContents(rawContent);

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
                  color: `rgba(0, 0, 0, ${isActive ? 1 : 1 - depth / 5})`,
                  fontSize: `${15 - depth}px`,
                  fontWeight: isActive ? 'bold' : 'normal',
                }}
              >
                <Link to={`#${id}`} className={tocItem}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default TableOfContents;
