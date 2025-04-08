import { useMemo } from 'react';

type Props = {
  category: string;
  categoryMap: Map<string, number>;
  handleCategoryChange: (category: string) => void;
};

const Category = ({ category, categoryMap, handleCategoryChange }: Props) => {
  const categoryButtons = useMemo(() => {
    return Array.from(categoryMap, ([name, count]) => ({ name, count }));
  }, [categoryMap]);

  return (
    <section>
      {categoryButtons.map(({ name, count }) => (
        <button
          key={name}
          onClick={() => handleCategoryChange(name)}
          style={{
            backgroundColor:
              category === name ? 'var(--primary)' : 'var(--background)',
          }}
        >
          <span>{name}</span>
          <span>-</span>
          <span>{count}</span>
        </button>
      ))}
    </section>
  );
};

export default Category;
