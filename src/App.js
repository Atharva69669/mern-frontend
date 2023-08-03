import './App.css';
import Login from './pages/Login';
import CreateRecipe from './pages/CreateRecipe';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Navbar from './pages/Navbar';
import SavedRecipes from './pages/SavedRecipes';
import AllRecipes from './pages/AllRecipes';
import Access from './pages/Access';
import Error from './pages/Error';
import Blog from './pages/Blog';
import SignUpError from './pages/SignUpError';
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/createrecipe" element={<Access Component={CreateRecipe}/>}/>
      <Route path="/allrecipe" element={<Access Component={AllRecipes}/>}/>
      <Route path="/savedrecipe" element={<Access Component={SavedRecipes}/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/signuperror" element={<SignUpError/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
