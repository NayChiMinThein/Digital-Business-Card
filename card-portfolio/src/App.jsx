import Footer from "./components/Footer";
import Info from "./components/Info";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="bg-gray-100 text-slate-800 w-2/3 xl:w-1/3 mx-auto my-20 rounded-lg">
      <Info/>
      <MainContent/>
      <Footer/>
    </div>
  )
}