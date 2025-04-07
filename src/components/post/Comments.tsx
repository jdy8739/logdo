import { useEffect, useRef } from 'react';

const UTTERANCES_ATTRS = {
  src: 'https://utteranc.es/client.js',
  repo: 'jdy8739/logdo',
  'issue-term': 'pathname',
  label: 'Comment',
  theme: `github-light`,
  crossorigin: 'anonymous',
  async: 'true',
} as const;

const Comments = () => {
  const commentDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const utterances: HTMLScriptElement = Object.entries(
      UTTERANCES_ATTRS,
    ).reduce((acc, [key, value]) => {
      acc.setAttribute(key, value);

      return acc;
    }, document.createElement('script'));

    commentDivRef.current!.appendChild(utterances);
  }, []);

  return <div ref={commentDivRef} />;
};

export default Comments;
