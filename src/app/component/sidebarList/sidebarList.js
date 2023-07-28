import Link from "next/link";
import { useEffect, useState } from "react";
import "./sidebarList.scss";
const fakeList = [
  {
    id: "1",
    title: "7/27",
    url: "SevenNo27",
  },
  {
    id: "2",
    title: "7/28",
    url: "SevenNo28",
  },
];

const SidebarList = (props) => {
  const { query } = props;
  const [list, setList] = useState(fakeList);
  const filterList = () => {
    console.log("filterList", query);
    setList(fakeList.filter((item) => item.title.includes(query.trim())));
  };
  useEffect(() => {
    filterList();
  }, [query]);
  return (
    <>
      {list.map((item) => (
        <div className="sidebar-list" key={`sidebarList-${item.title}`}>
          <Link href={`/${item.url}`}>{item.title}</Link>
        </div>
      ))}
    </>
  );
};

export default SidebarList;
