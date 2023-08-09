import CodeBox from "../component/codeBox/codeBox";
import "./page.scss";

const code = {
  html: `<div id="container-0808">
  <div class="left"></div>
  <div class="right"></div>
</div>`,
  css: `#container-0808 {
    width: 400px;
    height: 300px;
    background-color: #926927;
    display: flex;
    align-items: center;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    div {
        width: 200px;
        height: 200px;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .left {
        border-radius: 200px;
        background: #f8b140;
        left: 50%;
    }
    .right {
        width: 100px;
        border-radius: 0px 100px 100px 0px;
        background: #ffebcb;
        right: 12.5%;
    }
}
`,
};
const Eight_Two = () => {
  return (
    <>
      <div id="container-0808">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <CodeBox code={code} />
    </>
  );
};

export default Eight_Two;
