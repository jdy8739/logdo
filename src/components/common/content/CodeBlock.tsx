import Code, { CodeProps } from './Code';

type CodeBlockProps = Omit<CodeProps, 'isBlock'>;

const CodeBlock = ({ children, ...props }: CodeBlockProps) => {
  return (
    <Code {...props} isBlock>
      {children}
    </Code>
  );
};

export default CodeBlock;
export type { CodeBlockProps };
