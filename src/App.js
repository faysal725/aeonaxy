import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div className="h-screen overflow-y-auto flex flex-col ">
      <Navbar />
      <BlogPost imgSrc="/blogpost/appleSearch.jpg"/>
    </div>
  );
}

export default App;
