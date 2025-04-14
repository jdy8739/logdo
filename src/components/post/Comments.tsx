import { useEffect, useRef } from 'react';

const UTTERANCES_ATTRS = {
  src: 'https://utteranc.es/client.js',
  repo: 'jdy8739/logdo',
  'issue-term': 'pathname',
  label: 'Comment',
  theme: `github-light`,
  crossOrigin: 'anonymous',
  async: 'true',
} as const;

const Comments = () => {
  const commentElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptElement = document.createElement('script');

    const utterances: HTMLScriptElement = Object.entries(
      UTTERANCES_ATTRS,
    ).reduce((acc, [key, value]) => {
      acc.setAttribute(key, value);

      return acc;
    }, scriptElement);

    commentElementRef.current!.appendChild(utterances);
  }, []);

  return <figure ref={commentElementRef} />;
};

export default Comments;
