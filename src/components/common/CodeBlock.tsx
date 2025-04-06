import Code, { CodeProps } from './Code';

const CodeBlock = ({ children, ...props }: CodeProps) => {
  return (
    <Code {...props}>{children.replace('language::typescript\n', '')}</Code>
  );
};

export default CodeBlock;
