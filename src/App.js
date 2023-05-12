import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import './app.css'
function App() {
  return <main>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path={'projects'} element={<Projects />} />
          {/* <Route path={'about'} element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </main>
}
export default App;

