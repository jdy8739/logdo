/* eslint-disable react/display-name */

import { NodeRenderer, Options } from '@contentful/rich-text-react-renderer';
import { BLOCK_CLASSNAMES } from './classnames/blocks.css';
import TAG_MAP from './tag-map';
import { BLOCKS, INLINES } from './enums';
import { Block, Inline } from '@contentful/rich-text-types';
import { createElement, ReactNode } from 'react';
import { INLINE_CLASSNAMES } from './classnames/inline.css';

/** contentful에서 제공하는 블록 태그와 인라인 태그를 렌더링하는 함수를 반환하는 함수 */
const getNodeRenderer =
  (tagName: string, className: string): NodeRenderer =>
  (_: Block | Inline, children: ReactNode) =>
    createElement(tagName, { className }, children);

/** contentful에서 제공하는 블록 태그와 인라인 태그를 태그이름 map과 클래스네임 객체에서 찾아 해당 요소를 그릴 수 있도록 해주는 함수 */
const getRenderOptionsByClassNames = (classnames: Record<string, string>) => {
  return Object.keys(classnames)
    .map(key => key)
    .reduce(
      (nodes, key) => {
        const tagKey = key as BLOCKS | INLINES;

        const tagName = TAG_MAP.get(tagKey)!;

        const className = classnames[tagKey]!;

        return { ...nodes, [key]: getNodeRenderer(tagName, className) };
      },
      {} as Record<string, NodeRenderer>,
    );
};

const RENDER_OPTIONS: Readonly<Options> = {
  renderNode: {
    ...getRenderOptionsByClassNames(BLOCK_CLASSNAMES),
    ...getRenderOptionsByClassNames(INLINE_CLASSNAMES),
  },
};

export default RENDER_OPTIONS;
