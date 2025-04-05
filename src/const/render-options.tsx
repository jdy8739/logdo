/* eslint-disable react/display-name */

import { NodeRenderer, Options } from '@contentful/rich-text-react-renderer';
import { BLOCK_CLASSNAMES } from './classnames/blocks.css';
import TAG_MAP from './tag-map';
import { BLOCKS, INLINES } from './enums';
import { Block, Inline } from '@contentful/rich-text-types';
import { createElement, ReactNode } from 'react';
import { INLINE_CLASSNAMES } from './classnames/inline.css';

const getRenderNode =
  (tagName: string, className: string): NodeRenderer =>
  (_: Block | Inline, children: ReactNode) =>
    createElement(tagName, { className }, children);

const RENDER_OPTIONS: Readonly<Options> = {
  renderNode: {
    ...Object.keys(BLOCK_CLASSNAMES)
      .map(key => key)
      .reduce(
        (nodes, key) => {
          const TAG_KEY = key as BLOCKS;

          const tagName = TAG_MAP.get(TAG_KEY)!;

          const className = BLOCK_CLASSNAMES[TAG_KEY]!;

          return { ...nodes, [key]: getRenderNode(tagName, className) };
        },
        {} as Record<string, NodeRenderer>,
      ),
    ...Object.keys(INLINE_CLASSNAMES)
      .map(key => key)
      .reduce(
        (nodes, key) => {
          const TAG_KEY = key as INLINES;

          const tagName = TAG_MAP.get(TAG_KEY)!;

          const className = INLINE_CLASSNAMES[TAG_KEY]!;

          return { ...nodes, [key]: getRenderNode(tagName, className) };
        },
        {} as Record<string, NodeRenderer>,
      ),
  },
};

export default RENDER_OPTIONS;
