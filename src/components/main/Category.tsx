import { useMemo } from 'react';
import {
  categoryContainer,
  categoryItem,
  categoryItemSelected,
  categoryItemDefault,
} from './Category.css';

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
            className={`${categoryItem} ${isSelected ? categoryItemSelected : categoryItemDefault}`}
            onClick={() => handleCategoryChange(name)}
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
