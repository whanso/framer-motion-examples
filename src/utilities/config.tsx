/* eslint-disable @typescript-eslint/no-explicit-any */
import SyntaxHighlighter from "../components/SyntaxHighlighter";

export const components = {
  pre: SyntaxHighlighter as React.FC,
  code: ({ children }: any) => {
    return (
      <code className="bg-[#59529d] rounded-md py-1 px-2">{children}</code>
    );
  },
};
