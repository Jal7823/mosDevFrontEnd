import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import DarkMode from "./components/DarkMode";

//pages
import PostList from "./pages/posts/PostList";
import PostByCategories from './pages/categories/PostByCategories'
import Contact from "./pages/contact/Contact";
import Index from "./pages/Index";
import Details from "./pages/posts/Details";
import UpDown from "./components/UpDown";

function App() {
  return (
    <Router>
      <div className="dark:bg-bg-custom-gray h-screen">
        <DarkMode />
        <Navbar />
        <Routes >
          <Route path="/" element={<Index />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/categories/post-by-category/:name" element={<PostByCategories />} />
        </Routes>
        <UpDown />
      </div>
    </Router>
  );
}

export default App;
