import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Bottom from "./components/Bottom";

export default function Home() {
  return (
    <div className="bg-blue-950 min-h-screen text-white">
      <Top />
      <Bottom />
    </div>
  );
}
