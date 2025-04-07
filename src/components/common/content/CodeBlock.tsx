import Code, { CodeProps } from './Code';

type CodeBlockProps = Omit<CodeProps, 'isBlock'>;

const CodeBlock = ({ children, ...props }: CodeBlockProps) => {
  return (
    <Code {...props} isBlock>
      {children.replace('language::typescript\n', '')}
    </Code>
  );
};

export default CodeBlock;
export type { CodeBlockProps };
