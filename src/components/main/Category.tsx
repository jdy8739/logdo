import { useMemo } from 'react';
import { categoryContainer, categoryItem } from './Category.css';

type Props = {
  category: string;
  categoryMap: Map<string, number>;
  handleCategoryChange: (category: string) => void;
};

const Category = ({ category, categoryMap, handleCategoryChange }: Props) => {
  const categoryButtons = useMemo(
    () => Array.from(categoryMap, ([name, count]) => ({ name, count })),
    [categoryMap],
  );

  return (
    <section className={categoryContainer}>
      {categoryButtons.map(({ name, count }) => {
        const isSelected = category === name;

        return (
          <button
            key={name}
            className={categoryItem}
            onClick={() => handleCategoryChange(name)}
            style={{
              backgroundColor: isSelected ? '#eee' : '#e0e0e0',
              color: isSelected ? '#8b8b8b' : '#fff',
              cursor: isSelected ? 'default' : 'pointer',
            }}
          >
            <span>{name}</span>
            <span>{': '}</span>
            <span>{count}</span>
          </button>
        );
      })}
    </section>
  );
};

export default Category;
