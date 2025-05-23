// renderMark에서 사용 가능한 속성 (굵기, 기울임, 밑줄, 첨자 등과 같은 텍스트 관련 속성)
enum MARKS {
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
  CODE = 'code',
  PRE = 'pre',
  SUPERSCRIPT = 'superscript',
  SUBSCRIPT = 'subscript',
}

// renderNode에서 사용 가능한 속성 (헤더, 리스트, 테이블 등과 블럭 태그 요소)
enum BLOCKS {
  DOCUMENT = 'document',
  PARAGRAPH = 'paragraph',
  HEADING_1 = 'heading-1',
  HEADING_2 = 'heading-2',
  HEADING_3 = 'heading-3',
  HEADING_4 = 'heading-4',
  HEADING_5 = 'heading-5',
  HEADING_6 = 'heading-6',
  OL_LIST = 'ordered-list',
  UL_LIST = 'unordered-list',
  LIST_ITEM = 'list-item',
  HR = 'hr',
  QUOTE = 'blockquote',
  EMBEDDED_ENTRY = 'embedded-entry-block',
  EMBEDDED_ASSET = 'embedded-asset-block',
  EMBEDDED_RESOURCE = 'embedded-resource-block',
  TABLE = 'table',
  TABLE_ROW = 'table-row',
  TABLE_CELL = 'table-cell',
  TABLE_HEADER_CELL = 'table-header-cell',
}

// renderNode에서 사용 가능한 속성 (링크 등과 같은 인라인 태그 요소)
enum INLINES {
  HYPERLINK = 'hyperlink',
  ENTRY_HYPERLINK = 'entry-hyperlink',
  ASSET_HYPERLINK = 'asset-hyperlink',
  RESOURCE_HYPERLINK = 'resource-hyperlink',
  EMBEDDED_ENTRY = 'embedded-entry-inline',
  EMBEDDED_RESOURCE = 'embedded-resource-inline',
}

export { MARKS, BLOCKS, INLINES };
