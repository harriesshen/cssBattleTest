import CodeBox from "../component/codeBox/codeBox";
import "./page.scss";
const code = {
  html: `<div id="container-0728">
  <div className="bottomDiv"></div>
  <div className="circle-1"></div>
  <div className="circle-2"></div>
  <div className="circle-3"></div>
</div>`,
  css: `#container-0728 {
  width: 400px;
  height: 300px;
  background-color: #f7ec7d;
  display: flex;
  align-items: center;
  border-radius: 5px;
  position: relative;

  .bottomDiv {
      width: 400px;
      height: 150px;
      background-color: #62306d;
      position: absolute;
      bottom: 0px;
  }
  .circle-1,
  .circle-2,
  .circle-3 {
      background-color: #62306d;
      width: 150px;
      height: 150px;
      clip-path: circle(50% at 50% 50%);
      position: absolute;
  }
  .circle-1 {
      top: 25%;
      left: 0%;
  }
  .circle-2 {
      width: 100px;
      height: 100px;
      background-color: #f7ec7d;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
  }
  .circle-3 {
      top: 25%;
      right: 0%;
  }
}
`,
};
const Seven_twentyEight = () => {
  return (
    <>
      <div id="container-0728">
        <div className="bottomDiv"></div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
      <CodeBox code={code} />
    </>
  );
};

export default Seven_twentyEight;
