import CodeBox from "../component/codeBox/codeBox";
import "./page.scss";
const code = {
  html: `
<div id="container-0731">
  <div className="vertical layout1-rectangle"></div>
  <div className="vertical-left layout2-circle"></div>
  <div className="vertical-right layout2-circle"></div>
  <div className="center-circle-dark layout2-circle"></div>
  <div className="center-circle-light layout2-circle"></div>
  <div className="horizontal layout1-rectangle"></div>
  <div className="horizontal-top layout2-circle"></div>
  <div className="horizontal-bottom layout2-circle"></div>
  <div className="northWest-circle layout3-circle"></div>
  <div className="northEast-circle layout3-circle"></div>
  <div className="southWest-circle layout3-circle"></div>
  <div className="southEast-circle layout3-circle"></div>
</div>
`,
  css: `#container-0731 {
    width: 400px;
    height: 300px;
    background-color: #6592cf;
    display: flex;
    align-items: center;
    border-radius: 5px;
    position: relative;
    .layout1-rectangle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #060f55;
        z-index: 2;
    }
    .vertical {
        width: 200px;
        height: 60px;
    }
    .horizontal {
        width: 60px;
        height: 200px;
    }
    .layout2-circle {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #060f55;
        border-radius: 50%;
        z-index: 2;
    }
    .vertical-left {
        left: 25%;
        width: 60px;
        height: 60px;
    }
    .vertical-right {
        right: 10%;
        width: 60px;
        height: 60px;
    }
    .center-circle-dark {
        left: 50%;
        width: 125px;
        height: 125px;
    }
    .center-circle-light {
        left: 50%;
        width: 60px;
        height: 60px;
        background-color: #6592cf;
        z-index: 3;
    }
    .horizontal-top {
        top: 15%;
        left: 50%;
        width: 60px;
        height: 60px;
    }
    .horizontal-bottom {
        top: 85%;
        left: 50%;
        width: 60px;
        height: 60px;
    }
    .layout3-circle {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: #6592cf;
        border-radius: 50%;
        z-index: 3;
    }
    .northWest-circle {
        top: 23.5%;
        left: 30%;
    }
    .northEast-circle {
        top: 23.5%;
        right: 30%;
    }
    .southWest-circle {
        top: 60%;
        left: 30%;
    }
    .southEast-circle {
        top: 60%;
        right: 30%;
    }
}
`,
};
const Seven_twentyEight = () => {
  return (
    <>
      <div id="container-0731">
        <div className="vertical layout1-rectangle"></div>
        <div className="vertical-left layout2-circle"></div>
        <div className="vertical-right layout2-circle"></div>
        <div className="center-circle-dark layout2-circle"></div>
        <div className="center-circle-light layout2-circle"></div>
        <div className="horizontal layout1-rectangle"></div>
        <div className="horizontal-top layout2-circle"></div>
        <div className="horizontal-bottom layout2-circle"></div>
        <div className="northWest-circle layout3-circle"></div>
        <div className="northEast-circle layout3-circle"></div>
        <div className="southWest-circle layout3-circle"></div>
        <div className="southEast-circle layout3-circle"></div>
      </div>
      <CodeBox code={code} />
    </>
  );
};

export default Seven_twentyEight;
