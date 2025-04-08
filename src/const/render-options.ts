import { NodeRenderer, Options } from '@contentful/rich-text-react-renderer';
import TAG_MAP from './tag-map';
import { BLOCKS, INLINES, MARKS } from './enums';
import { INLINE_CLASSNAMES } from './classnames/inlines.css';
import { MARKS_CLASSNAMES } from './classnames/marks.css';
import { BLOCK_CLASSNAMES } from './classnames/blocks.css';
import {
  getEmbeddedAssetRenderer,
  getHeadingRenderer,
  getHyperlinkRenderer,
  getNodeRenderer,
} from './node-renderers';
import Code from '../components/common/content/Code';
import CodeBlock, {
  CodeBlockProps,
} from '../components/common/content/CodeBlock';
import { createElement } from 'react';
import { CodeProps } from '../components/common/content/Code';

/** contentful에서 제공하는 블록 태그와 인라인 태그를 태그이름 map과 클래스네임 객체에서 찾아 해당 요소를 그릴 수 있도록 해주는 함수 */
const getNodeRenderOptionsByClassNames = (
  classnames: Record<string, string>,
) => {
  return Object.keys(classnames)
    .map(key => key)
    .reduce(
      (nodes, key) => {
        const tagKey = key as BLOCKS | INLINES;

        const className = classnames[tagKey]!;

        const tagName = TAG_MAP.get(tagKey)!;

        switch (tagKey) {
          case BLOCKS.EMBEDDED_ASSET:
            return { ...nodes, [key]: getEmbeddedAssetRenderer(className) };

          case INLINES.HYPERLINK:
            return { ...nodes, [key]: getHyperlinkRenderer(className) };

          case BLOCKS.HEADING_1:
          case BLOCKS.HEADING_2:
          case BLOCKS.HEADING_3:
            return { ...nodes, [key]: getHeadingRenderer(tagName, className) };

          default:
            return {
              ...nodes,
              [key]: getNodeRenderer(tagName, className),
            };
        }
      },
      {} as Record<string, NodeRenderer>,
    );
};

/** 코드 요소 렌더링 옵션을 반환하는 함수 */
const getMarkRenderOptions = (code: React.ReactNode) => {
  /**
   * 코드요소가 일반 텍스트에 함께 있는 인라인 요소인지 블럭 요소인지 여부
   * language:: 텍스트로 메타데이터가 있는 경우 블럭 요소로 처리
   */
  const isBlock = !!code && code.toString().includes('language::');

  if (!isBlock) {
    return createElement(
      Code,
      { className: 'language-typescript' } as CodeProps,
      code as string,
    );
  }

  /** 코드 블럭의 언어 */
  const language = (code as string).split('\n')[0].split('language::')[1];

  return createElement(
    CodeBlock,
    { className: `language-${language}` } as CodeBlockProps,
    (code as string).replace(`language::${language}\n`, ''),
  );
};

const RENDER_OPTIONS: Readonly<Options> = {
  renderMark: {
    [MARKS.CODE]: getMarkRenderOptions,
  },
  renderNode: {
    ...getNodeRenderOptionsByClassNames(BLOCK_CLASSNAMES),
    ...getNodeRenderOptionsByClassNames(INLINE_CLASSNAMES),
    ...getNodeRenderOptionsByClassNames(MARKS_CLASSNAMES),
  },
};

export default RENDER_OPTIONS;
