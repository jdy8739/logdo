import { useCallback, useEffect, useMemo, useState } from 'react';

const useTableContents = (rawContent: string) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  /** raw content의 헤더요소에서 추출한 테이블 오브 콘텐츠 리스트 */
  const tableOfContents = useMemo<
    {
      title: string;
      id: string;
      depth: number;
    }[]
  >(() => {
    const { content } = JSON.parse(rawContent);

    /** 컨텐츠 내용에서 타이틀 요소 리스트 */
    const headings = content.filter(({ nodeType }: { nodeType: string }) =>
      nodeType.includes('heading'),
    );

    /** 컨텐츠 내용에서 타이틀 요소 중 가장 큰 헤더 태그 레벨 */
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

  /** 관측할 타이틀 요소를 옵저버에 등록하는 함수 */
  const enrollObserver = useCallback(
    ({
      query,
      callback,
    }: {
      query: string;
      callback: (element: Element) => void;
    }) => document.querySelectorAll(query).forEach(callback),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([firstEntry]) => {
        if (firstEntry) {
          setActiveId(prevActiveId => {
            // 스크롤을 아래로 내리는 경우
            if (firstEntry.boundingClientRect.top < 0) {
              return firstEntry.target.id;
            }

            const activeIndex = tableOfContents.findIndex(
              ({ id }) => id === prevActiveId,
            );

            return activeIndex > 0 ? tableOfContents[activeIndex - 1].id : null;
          });
        }
      },
      { rootMargin: '0% 0px -100% 0px' },
    );

    enrollObserver({
      query: '#content > h1, #content > h2, #content >h3',
      callback: (element: Element) => observer.observe(element),
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  return { activeId, tableOfContents };
};

export default useTableContents;
