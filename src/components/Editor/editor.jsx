import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "./editor.css";
import "prismjs/components/prism-sql";
import "prismjs/plugins/line-numbers/prism-line-numbers";

const CodeEditor = (props) => {
  const [content, setContent] = useState(props.content);

  useEffect(() => {
    Prism.highlightAll();
  }, [props.language, content]);

  return (
    <div className="code-edit-container">
      <textarea
        className="code-input"
        value={content}
        onChange={(evt) => setContent(evt.target.value)}
      />
      <pre className=" line-numbers code-output">
        <code className={`language-${props.language}`}>{content}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
