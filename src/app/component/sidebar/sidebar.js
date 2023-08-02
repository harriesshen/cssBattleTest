"use client";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  Children,
  Suspense,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import SidebarList from "../sidebarList/sidebarList";
import "./sidebar.scss";

const Sidebar = () => {
  const [searchValue, setSearchValue] = useState("");
  const deferredQuery = useDeferredValue(searchValue);
  const isStale = deferredQuery !== searchValue;
  return (
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
          <div className="preview-box"></div>
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
  );
};

export default Sidebar;
