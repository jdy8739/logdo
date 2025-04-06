import { HTMLAttributes } from 'react';
import { MARKS_CLASSNAMES } from '../../const/classnames/marks.css';
import { MARKS } from '../../const/enums';

const Code = ({
  isBlock = false,
  children,
  ...props
}: { isBlock?: boolean } & HTMLAttributes<HTMLDivElement>) => {
  if (!isBlock) {
    return (
      <code {...props} className={MARKS_CLASSNAMES[MARKS.CODE]}>
        {children}
      </code>
    );
  }

  return (
    <pre className={MARKS_CLASSNAMES[MARKS.PRE]}>
      <code {...props} className={MARKS_CLASSNAMES[MARKS.CODE]}>
        {children}
      </code>
    </pre>
  );
};

export default Code;
