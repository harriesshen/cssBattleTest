import CodeBox from "../component/codeBox/codeBox";
import "./page.scss";

const code = {
  html: `<div id="container-0803">
  <div className="talk"></div>
  <div className="triangle"></div>
</div>`,
  css: `#container-0803 {
    width: 400px;
    height: 300px;
    background-color: #4f77ff;
    display: flex;
    align-items: center;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    .talk {
        width: 254px;
        height: 150px;
        border-radius: 100%;
        background: #ffffff;
        position: absolute;
        top: 20%;
        left: 18%;
    }
    .triangle {
        width: 0px;
        height: 0px;
        position: absolute;
        bottom: 20%;
        left: 38%;
        border-top: 60px solid #ffffff;
        border-left: 48px solid transparent;
        border-right: 48px solid transparent;
        z-index: 2;
    }
}
`,
};
const Eight_Two = () => {
  return (
    <>
      <div id="container-0803">
        <div className="talk"></div>
        <div className="triangle"></div>
      </div>
      <CodeBox code={code} />
    </>
  );
};

export default Eight_Two;
