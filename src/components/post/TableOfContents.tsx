import { Link } from 'gatsby';
import useTableContents from '../../hooks/useTableOfContents';
import { tocContainer, tocTitle, tocList } from './TableOfContents.css';

const TableOfContents = ({ rawContent }: { rawContent: string }) => {
  const { tableOfContents } = useTableContents(rawContent);

  return (
    <section className={tocContainer}>
      <div>
        <h3 className={tocTitle}>목차</h3>
      </div>
      <div>
        <ul className={tocList}>
          {tableOfContents.map(title => (
            <li key={title.id}>
              <Link to={`#${title.id}`}>{title.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TableOfContents;
