import { useEffect, useMemo, useState } from 'react';

const useTableContents = (rawContent: string) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const tableOfContents = useMemo<
    {
      title: string;
      id: string;
      depth: number;
    }[]
  >(() => {
    const { content } = JSON.parse(rawContent);

    const headings = content.filter(({ nodeType }: { nodeType: string }) =>
      nodeType.includes('heading'),
    );

    const minDepth = Math.min(
      ...headings.map(({ nodeType }: { nodeType: string }) =>
        Number(nodeType.charAt(nodeType.length - 1)),
      ),
    );

    return headings.map(
      ({
        nodeType,
        content,
      }: {
        nodeType: string;
        content: { value: string }[];
      }) => {
        const title = content.map(({ value }) => value).join('');

        return {
          title,
          id: `${title.replaceAll(' ', '-')}_`,
          depth: Number(nodeType.charAt(nodeType.length - 1)) - minDepth,
        };
      },
    );
  }, [rawContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        setActiveId(prevId => {
          if (entries[0].boundingClientRect.top < 0) {
            // 스크롤을 아래로 내리는 경우
            return entries[0].target.id;
          } else {
            // 스크롤을 위로 올리는 경우
            const index = tableOfContents.findIndex(({ id }) => id === prevId);

            return index > 0 ? tableOfContents[index - 1].id : null;
          }
        }),
      { rootMargin: '0% 0px -100% 0px' },
    );

    document
      .querySelectorAll('#content > h1, #content > h2, #content >h3')
      .forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [tableOfContents]);

  console.log(activeId);

  return { activeId, tableOfContents };
};

export default useTableContents;
