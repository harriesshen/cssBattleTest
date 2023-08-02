import Link from "next/link";
import { useEffect, useState } from "react";
import "./sidebarList.scss";
import Head from "next/head";
const fakeList = [
  {
    id: "1",
    title: "07-27",
    url: "SevenNo27",
  },
  {
    id: "2",
    title: "07-28",
    url: "SevenNo28",
  },
  {
    id: "3",
    title: "07-31",
    url: "SevenNo31",
  },
  {
    id: "4",
    title: "08-01",
    url: "EightNo1",
  },
  {
    id: "5",
    title: "08-02",
    url: "EightNo2",
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
          <Link href={`/${item.url}`} id={`link-${item.title}`}>
            {item.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default SidebarList;
