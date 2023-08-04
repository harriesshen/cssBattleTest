import CodeBox from "../component/codeBox/codeBox";
import "./page.scss";

const code = {
  html: `<div id="container-0802">
  <div></div>
  <div></div>
</div>`,
  css: `#container-0802 {
  width: 400px;
  height: 300px;
  background-color: #f5d6b4;
  display: flex;
  align-items: center;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  div {
      width: 62.5%;
      height: 87.2%;
      border-radius: 50%;
      background-color: #d86f45;
      position: absolute;
  }
  div:nth-child(1) {
      top: -45%;
      left: 19%;
  }
  div:nth-child(2) {
      bottom: -45%;
      left: 19%;
  }
}
`,
};
const Eight_Two = () => {
  return (
    <>
      <div id="container-0802">
        <div></div>
        <div></div>
      </div>
      <CodeBox code={code} />
    </>
  );
};

export default Eight_Two;
