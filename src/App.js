import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Post from "./components/ShowPosts/Post";
import GlobalStyle from "./styles/globalStyle";

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="post" element={<Post />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
  
}

export default App;
