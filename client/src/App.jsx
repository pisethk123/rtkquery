import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreateProductPage from "./pages/CreateProductPage"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/createproduct" element={<CreateProductPage/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
