import "./codeBox.scss";

// const code ={html:``,css:``}
const CodeBox = (props) => {
  const { code } = props;
  return (
    <div id="code-box">
      <div className="html-box">
        <pre className="html-pre">{code.html}</pre>
      </div>
      <div className="line"></div>
      <div className="css-box">
        <pre className="css-pre">{code.css}</pre>
      </div>
    </div>
  );
};

export default CodeBox;
