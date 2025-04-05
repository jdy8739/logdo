/* eslint-disable react/display-name */

import { NodeRenderer, Options } from '@contentful/rich-text-react-renderer';
import { BLOCK_CLASSNAMES } from './classnames/blocks';
import TAG_MAP from './tag-map';
import { BLOCKS } from './enums';
import { Block, Inline } from '@contentful/rich-text-types';
import { createElement, ReactNode } from 'react';

const getRenderNode =
  (tagName: string, className: Record<string, string>): NodeRenderer =>
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
  },
};

export default RENDER_OPTIONS;
