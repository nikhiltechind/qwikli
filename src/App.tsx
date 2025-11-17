import {  Routes,Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import CategoryPage from "./components/CategoryPage"
import PageNotFound from "./components/PageNotFound"


function App() {
  

  return (
    <>
   <HomePage/>
   {/* Banner component */}<h1>Banner Card</h1>
   {/* Category scroll cards */}<h1>Category scroll cards</h1>
   <Routes>
    <Route path="/" element={<h1>homepage screen</h1>}/>
    <Route path="/category/:categoryName" element={<CategoryPage/>}/>
     <Route path="*" element={<PageNotFound/>}/>  
   </Routes>
    </>
  )
}

export default App
