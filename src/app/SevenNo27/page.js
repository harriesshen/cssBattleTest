import CodeBox from "../component/codeBox/codeBox";
import "./page.scss";

const code = {
  html: `<div id="container-0727">
  <div className="container">
    <div className="darkBlueTriangle"></div>
    <div className="whiteTriangle"></div>
  </div>
</div>`,
  css: `#container-0727 {
    width: 400px;
    height: 300px;
    background-color: #4f77ff;
    display: flex;
    align-items: center;
    border-radius: 5px;
    .container {
        position: relative;
        width: 400px;
        height: 300px;
        margin: 0 auto;
        .darkBlueTriangle {
            width: 0px;
            height: 0px;
            border-style: solid;
            border-width: 0px 150px 130px 150px;
            border-color: transparent transparent #1038bf transparent;
            position: absolute;
            top: 21%;
            left: 12%;
            z-index: 1;
        }
        .whiteTriangle {
            width: 0px;
            height: 0px;
            border-style: solid;
            position: absolute;
            top: 21%;
            left: 30%;
            z-index: 2;
            border-width: 0px 80px 162px 80px;
            border-color: transparent transparent #ffffff transparent;
        }
    }`,
};

const Seven_twentySeven = () => {
  return (
    <>
      <div id="container-0727">
        <div className="container">
          <div className="darkBlueTriangle"></div>
          <div className="whiteTriangle"></div>
        </div>
      </div>
      <CodeBox code={code} />
    </>
  );
};

export default Seven_twentySeven;
