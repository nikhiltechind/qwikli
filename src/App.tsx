import {  Routes,Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import CategoryPage from "./components/CategoryPage"
import PageNotFound from "./components/PageNotFound"
import Login from "./components/Login"


function App() {
  

  return (
    <>
   <HomePage/>
  
   <Routes>
    <Route path="/" element={<h1>homepage screen</h1>}/>
     <Route path="/login" element={<Login/>}/>
    <Route path="/category/:categoryName" element={<CategoryPage/>}/>
     <Route path="*" element={<PageNotFound/>}/>  
   </Routes>
    </>
  )
}

export default App
