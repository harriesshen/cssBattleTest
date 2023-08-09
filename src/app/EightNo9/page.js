import CodeBox from "../component/codeBox/codeBox";
import "./page.scss";

const code = {
  html: `<div id="container-0809">
  <div class="orange"></div>
  <div class="pink"></div>
</div>`,
  css: `#container-0809 {
    width: 400px;
    height: 300px;
    background-color: #f5d6b4;
    display: flex;
    align-items: center;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    div {
        width: 0px;
        height: 0px;
        border-style: solid;
        position: absolute;
        bottom: 0px;
    }
    .orange {
        border-width: 0px 600px 159.5px 0px;
        border-color: transparent transparent #d86f45 transparent;
        left: 0px;
        z-index: 2;
    }
    .pink {
        border-width: 0px 0px 160px 600px;
        border-color: transparent transparent #ffa885 transparent;
        right: 0px;
        z-index: 1;
    }
}

`,
};
const Eight_Two = () => {
  return (
    <>
      <div id="container-0809">
        <div class="orange"></div>
        <div class="pink"></div>
      </div>
      <CodeBox code={code} />
    </>
  );
};

export default Eight_Two;
