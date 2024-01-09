import Image from "next/image";
import Topbar from "./components/Topbar";
import Secondcontainer from "./components/Secondcontainer";
import Post from "./components/Post";
import Stories from "./components/Stories";
import Firstpost from "./components/Firstpost";

export default function Home() {
  return (
    <main className="w-[428px]  bg-gray-300 border-2 ">
      <Topbar />
      <Secondcontainer />
      <Post />
      <Stories />
      <Firstpost />
    </main>
  );
}
