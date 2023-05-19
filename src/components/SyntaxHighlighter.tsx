import { Highlight, themes } from "prism-react-renderer";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactElement;
};

const SyntaxHighlighter: React.FC<Props> = ({ children }) => {
  const code = children.props.children as string;

  return (
    <Highlight code={code} language="tsx" theme={themes.shadesOfPurple}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={twMerge(className, "p-4")} style={{ ...style }}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;
