import { MARKS_CLASSNAMES } from '../../../const/classnames/marks.css';
import { MARKS } from '../../../const/enums';

type CodeProps = {
  isBlock?: boolean;
  className?: string;
  children: string;
};

const Code = ({ isBlock = false, className, children }: CodeProps) => {
  if (!isBlock) {
    return (
      <code className={`${MARKS_CLASSNAMES[MARKS.CODE]} ${className}`}>
        {children}
      </code>
    );
  }

  return (
    <pre className={MARKS_CLASSNAMES[MARKS.PRE]}>
      <code className={`${MARKS_CLASSNAMES[MARKS.CODE]} ${className}`}>
        {children}
      </code>
    </pre>
  );
};

export default Code;
export type { CodeProps };
