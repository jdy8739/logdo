import { ReactNode } from 'react';

const extractTextFromChildren = (children: ReactNode): string => {
  let result = '';

  const recurse = (nodes: ReactNode) => {
    if (typeof nodes === 'string' || typeof nodes === 'number') {
      result += nodes;
    } else if (Array.isArray(nodes)) {
      nodes.forEach(recurse);
    } else if (nodes && typeof nodes === 'object' && 'props' in nodes) {
      recurse(nodes.props.children);
    }
  };

  recurse(children);
  return result;
};

export default extractTextFromChildren;
