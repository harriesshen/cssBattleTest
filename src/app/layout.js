"use client";
// NextJS app資料夾下 默認以Server Component
// 所以會被JS編譯為HTML發送至瀏覽器
// 如果需要使用Client的組件 則需要使用use client

// import "./globals.scss";
// import Home from "./page";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./layout.scss";
import {
  Children,
  Suspense,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";

import SidebarList from "./component/sidebarList/sidebarList";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const deferredQuery = useDeferredValue(searchValue);
  const isStale = deferredQuery !== searchValue;

  return (
    <html lang="en">
      <body>
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-inputbox">
              <span>
                <Icon icon={faMagnifyingGlass} size="1x" />
              </span>
              <input
                className="sidebar-input"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="sidebar-buttonIcon">搜尋</button>
            </div>
          </div>
          <Suspense fallback={<h2>Loading...</h2>}>
            <div
              className="sidebar-body"
              style={{
                opacity: isStale ? 0.5 : 1,
                transition: isStale
                  ? "opacity 0.2s 0.2s linear"
                  : "opacity 0s 0s linear",
              }}
            >
              <SidebarList query={deferredQuery} />
            </div>
          </Suspense>

          <div className="sidebar-footer">
            <span>harries4206@gmail.com</span>
            <a href="https://github.com/harriesshen">
              <Icon icon={faGithub} size="2xl" />
            </a>

            {/* <span>https://github.com/harriesshen</span> */}
          </div>
        </div>
        <div className="child-component">{children}</div>
        {/* {children} */}
      </body>
    </html>
  );
}
