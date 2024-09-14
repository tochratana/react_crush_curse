import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { View } from "./components/page/About/View";
import { Hero } from "./components/page/Home/Hero";

// const Home = () => {
//   return (
//     <>
//       <h1>This is a home page</h1>
//     </>
//   );
// };

// const About = () => {
//   return (
//     <>
//       <h1>This is a about page</h1>
//     </>
//   );
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/about" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
