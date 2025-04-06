import { NodeRenderer, Options } from '@contentful/rich-text-react-renderer';
import TAG_MAP from './tag-map';
import { BLOCKS, INLINES, MARKS } from './enums';
import { INLINE_CLASSNAMES } from './classnames/inlines.css';
import { MARKS_CLASSNAMES } from './classnames/marks.css';
import { BLOCK_CLASSNAMES } from './classnames/blocks.css';
import {
  getEmbeddedAssetRenderer,
  getHyperlinkRenderer,
  getNodeRenderer,
} from './node-renderers';
import Code from '../components/common/content/Code';
import CodeBlock from '../components/common/content/CodeBlock';

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

        switch (tagKey) {
          case BLOCKS.EMBEDDED_ASSET:
            return { ...nodes, [key]: getEmbeddedAssetRenderer(className) };

          case INLINES.HYPERLINK:
            return { ...nodes, [key]: getHyperlinkRenderer(className) };

          default:
            return {
              ...nodes,
              [key]: getNodeRenderer(TAG_MAP.get(tagKey)!, className),
            };
        }
      },
      {} as Record<string, NodeRenderer>,
    );
};

const RENDER_OPTIONS: Readonly<Options> = {
  renderMark: {
    [MARKS.CODE]: (code: React.ReactNode) => {
      const isBlock = !!code && code.toString().includes('language::');

      if (!isBlock) {
        return <Code className="language-typescript">{code as string}</Code>;
      }

      return (
        <CodeBlock isBlock className="language-typescript">
          {code as string}
        </CodeBlock>
      );
    },
  },
  renderNode: {
    ...getNodeRenderOptionsByClassNames(BLOCK_CLASSNAMES),
    ...getNodeRenderOptionsByClassNames(INLINE_CLASSNAMES),
    ...getNodeRenderOptionsByClassNames(MARKS_CLASSNAMES),
  },
};

export default RENDER_OPTIONS;
