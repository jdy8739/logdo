import { BLOCKS, INLINES, MARKS } from './enums';

const TAG_MAP = new Map<BLOCKS | MARKS | INLINES, string>();

TAG_MAP.set(BLOCKS.HEADING_1, 'h1');
TAG_MAP.set(BLOCKS.HEADING_2, 'h2');
TAG_MAP.set(BLOCKS.HEADING_3, 'h3');
TAG_MAP.set(BLOCKS.OL_LIST, 'ol');
TAG_MAP.set(BLOCKS.UL_LIST, 'ul');
TAG_MAP.set(BLOCKS.HR, 'hr');
TAG_MAP.set(BLOCKS.QUOTE, 'blockquote');
TAG_MAP.set(BLOCKS.EMBEDDED_ASSET, 'img');

TAG_MAP.set(MARKS.BOLD, 'strong');
TAG_MAP.set(MARKS.ITALIC, 'em');
TAG_MAP.set(MARKS.UNDERLINE, 'u');
TAG_MAP.set(MARKS.CODE, 'code');
TAG_MAP.set(MARKS.SUPERSCRIPT, 'sup');
TAG_MAP.set(MARKS.SUBSCRIPT, 'sub');

TAG_MAP.set(INLINES.HYPERLINK, 'a');
TAG_MAP.set(INLINES.ENTRY_HYPERLINK, 'a');
TAG_MAP.set(INLINES.ASSET_HYPERLINK, 'a');
TAG_MAP.set(INLINES.RESOURCE_HYPERLINK, 'a');

TAG_MAP.set(INLINES.EMBEDDED_ENTRY, 'span');
TAG_MAP.set(INLINES.EMBEDDED_RESOURCE, 'span');

TAG_MAP.set(MARKS.ITALIC, 'i');
TAG_MAP.set(MARKS.UNDERLINE, 'u');

export default TAG_MAP;
