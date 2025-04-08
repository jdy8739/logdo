import { Link } from 'gatsby';
import useTableContents from '../../hooks/useTableOfContents';
import { tocContainer, tocTitle, tocList } from './TableOfContents.css';

const TableOfContents = ({ rawContent }: { rawContent: string }) => {
  const { tableOfContents, activeId } = useTableContents(rawContent);

  return (
    <section className={tocContainer}>
      <div>
        <h3 className={tocTitle}>목차</h3>
      </div>
      <div>
        <ul className={tocList}>
          {tableOfContents.map(title => {
            const isActive = title.id === activeId;

            return (
              <li
                key={title.id}
                style={{
                  paddingLeft: `${title.depth * 5}px`,
                  color: `rgba(0, 0, 0, ${isActive ? 1 : 1 - title.depth / 5})`,
                  fontSize: `${15 - title.depth}px`,
                  fontWeight: isActive ? 'bold' : 'normal',
                }}
              >
                <Link to={`#${title.id}`}>{title.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TableOfContents;
