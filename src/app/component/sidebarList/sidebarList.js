import { useEffect, useState } from "react";

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

let i = 3;
while (i <= 100) {
  fakeList.push({
    id: i,
    title: `8/${i}`,
    url: `eightNo${i}`,
  });
  i++;
}

const SidebarList = (props) => {
  const { query } = props;
  const [list, setList] = useState(fakeList);
  const filterList = () => {
    console.log("filterList", query);
    setList(fakeList.filter((item) => item.title.includes(query.trim())));
  };
  useEffect(() => {
    if (query !== "") {
      filterList();
    }
  }, [query]);
  return list.map((item) => (
    <div className="sidebar-list" key={`sidebarList-${item.title}`}>
      {item.title}
    </div>
  ));
};

export default SidebarList;
