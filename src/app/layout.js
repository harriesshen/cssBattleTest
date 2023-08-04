// "use client";
// NextJS app資料夾下 默認以Server Component
// 所以會被JS編譯為HTML發送至瀏覽器
// 如果需要使用Client的組件 則需要使用use client

// import "./globals.scss";
// import Home from "./page";

import "./layout.scss";

// import SidebarList from "./component/sidebarList/sidebarList";
import Head from "next/head";
import Sidebar from "./component/sidebar/sidebar";

// Next13.2後 以metadata為SEO使用方式 不再利用next/head了
export const metadata = {
  title: "CssBattle",
  description: "css Battle from harriesShen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <title>css Battle</title>
        <meta
          name="description"
          content="css Battle from harriesShen"
          key="desc"
        ></meta>
      </Head> */}

      <body>
        <Sidebar />
        <div className="child-component">{children}</div>
      </body>
    </html>
  );
}
