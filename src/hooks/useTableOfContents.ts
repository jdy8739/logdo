import { useMemo, useState } from 'react';

const useTableContents = (rawContent: string) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  //console.log(JSON.parse(rawContent));

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

  return { activeId, tableOfContents };
};

export default useTableContents;
