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
import Code from '../components/common/Code';

const CODE_METADATA_REGEX = /^language::(\w+)/;

/** contentful에서 제공하는 블록 태그와 인라인 태그를 태그이름 map과 클래스네임 객체에서 찾아 해당 요소를 그릴 수 있도록 해주는 함수 */
const getRenderOptionsByClassNames = (classnames: Record<string, string>) => {
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
    [MARKS.CODE]: (text: React.ReactNode) => {
      const isBlock = !!text && CODE_METADATA_REGEX.test(text.toString());

      if (!isBlock) {
        return <Code>{text}</Code>;
      }

      return (
        <Code
          isBlock
          className={`language-${CODE_METADATA_REGEX.exec(text.toString())?.[1]}`}
        >
          {text.toString().replace(CODE_METADATA_REGEX, '').trimStart()}
        </Code>
      );
    },
  },
  renderText: (text: string) => {
    return text
      .split('\n')
      .reduce(
        (children: React.ReactNode[], textSegment: string, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        },
        [],
      );
  },
  renderNode: {
    ...getRenderOptionsByClassNames(BLOCK_CLASSNAMES),
    ...getRenderOptionsByClassNames(INLINE_CLASSNAMES),
    ...getRenderOptionsByClassNames(MARKS_CLASSNAMES),
  },
};

export default RENDER_OPTIONS;
