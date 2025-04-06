import { NodeRenderer, Options } from '@contentful/rich-text-react-renderer';
import { BLOCK_CLASSNAMES } from './classnames/blocks.css';
import TAG_MAP from './tag-map';
import { BLOCKS, INLINES } from './enums';
import { INLINE_CLASSNAMES } from './classnames/inline.css';
import {
  getEmbeddedAssetRenderer,
  getHyperlinkRenderer,
  getNodeRenderer,
} from './node-renderers';

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
  renderNode: {
    ...getRenderOptionsByClassNames(BLOCK_CLASSNAMES),
    ...getRenderOptionsByClassNames(INLINE_CLASSNAMES),
  },
};

export default RENDER_OPTIONS;
