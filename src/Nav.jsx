import { Link} from "react-router-dom";
// import { Link, Route, Routes} from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Missing from "./Missing";
// import NewPost from "./NewPost";



const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form
        className="searchForm"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <ul>  
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    // <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/newpost" element={<NewPost />} />

    //     <Route path="*" element={<Missing />} />
    // </Routes>
  );
};

export default Nav;



