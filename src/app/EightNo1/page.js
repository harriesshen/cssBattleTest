import CodeBox from "../component/codeBox/codeBox";
import "./page.scss";

const code = {
  html: `
<div id="container-0801">
  <div className="vertical left"></div>
  <div className="vertical right"></div>
  <div className="horizontal top"></div>
  <div className="horizontal bottom"></div>
  <div className="circle circle-1"></div>
  <div className="circle circle-2"></div>
  <div className="circle circle-3"></div>
  <div className="circle circle-4"></div>
  <div className="circle circle-5"></div>
  <div className="circle circle-6"></div>
  <div className="circle circle-7"></div>
  <div className="circle circle-8"></div>
</div>
  `,
  css: `#container-0801 {
    width: 400px;
    height: 300px;
    background-color: #926927;
    display: flex;
    align-items: center;
    border-radius: 5px;
    position: relative;
    div {
        position: absolute;
    }
    .vertical {
        width: 40px;
        height: 180px;
        background: #f8b140;
        top: 20%;
        border-radius: 5px;
    }
    .left {
        left: 35%;
    }
    .right {
        right: 35%;
    }
    .horizontal {
        width: 160px;
        height: 40px;
        background: #f8b140;
        left: 29.5%;
        border-radius: 5px;
    }
    .top {
        top: 30%;
    }
    .bottom {
        bottom: 30%;
    }
    .circle {
        width: 40px;
        height: 40px;
        background-color: #f8b140;
        border-radius: 50%;
    }
    .circle-1 {
        top: 30%;
        left: 25%;
    }
    .circle-2 {
        top: 16%;
        left: 35%;
    }
    .circle-3 {
        top: 16%;
        right: 35%;
    }
    .circle-4 {
        top: 30%;
        right: 25%;
    }
    .circle-5 {
        bottom: 30%;
        right: 25%;
    }
    .circle-6 {
        bottom: 16%;
        right: 35%;
    }
    .circle-7 {
        bottom: 16%;
        left: 35%;
    }
    .circle-8 {
        bottom: 30%;
        left: 25%;
    }
}
`,
};
const Eight_One = () => {
  return (
    <>
      <div id="container-0801">
        <div className="vertical left"></div>
        <div className="vertical right"></div>
        <div className="horizontal top"></div>
        <div className="horizontal bottom"></div>
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-8"></div>
      </div>
      <CodeBox code={code} />
    </>
  );
};

export default Eight_One;
