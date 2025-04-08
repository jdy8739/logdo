/* eslint-disable react/display-name */

import { NodeRenderer } from '@contentful/rich-text-react-renderer';
import { Block, Inline } from '@contentful/rich-text-types';
import { ReactNode, createElement } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import extractTextFromChildren from '../components/utils/reactUtils';

/** 자식 요소가 없는 요소 */
const ELEMENTS_WITH_NO_CHILDREN: readonly string[] = ['hr'];

/** contentful에서 제공하는 블록 태그와 인라인 태그를 렌더링하는 함수를 반환하는 함수 */
const getNodeRenderer =
  (tagName: string, className: string): NodeRenderer =>
  (_: Block | Inline, children: ReactNode) =>
    createElement(
      tagName,
      { className },
      ELEMENTS_WITH_NO_CHILDREN.includes(tagName) ? null : children,
    );

const getHeadingRenderer =
  (tagName: string, className: string): NodeRenderer =>
  (_: Block | Inline, children: ReactNode) =>
    createElement(
      tagName,
      {
        id: `${extractTextFromChildren(children).replaceAll(' ', '-')}_`,
        className,
      },
      children,
    );

/** contentful에서 제공하는 이미지 태그의 렌더링함수를 반환하는 함수 */
const getEmbeddedAssetRenderer =
  (className: string): NodeRenderer =>
  ({
    data: {
      target: { gatsbyImageData, description },
    },
  }: Block | Inline) => {
    const image = getImage(gatsbyImageData);

    if (!image) {
      return null;
    }

    return createElement(
      'figure',
      undefined,
      createElement(GatsbyImage, {
        className,
        image,
        alt: description,
      }),
    );
  };

/** contentful에서 제공하는 하이퍼링크 태그의 렌더링함수를 반환하는 함수 */
const getHyperlinkRenderer =
  (className: string) => (node: Block | Inline, children: ReactNode) => {
    return createElement(
      'a',
      {
        className,
        href: node.data.uri,
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      children,
    );
  };

export {
  getNodeRenderer,
  getHeadingRenderer,
  getEmbeddedAssetRenderer,
  getHyperlinkRenderer,
};
