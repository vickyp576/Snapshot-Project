import { Link, Outlet } from "react-router-dom";
import searchIcon from '../Assets/search.png';
import { useImagecontext } from "../context/ContextProvider";
export default function SearchImage() {

    const {search} = useImagecontext();

    return <>
        <div className="title"><h1>SnapShot</h1></div>
        <div className="searchContainer">
            <input
                placeholder="search"
                id="searchItem"
                onChange={(e) => search(e.target.value) }
            />
            <div id="searchIconContainer">
                <Link to='/search'>
                    <img src={searchIcon} alt="search" id="searchIcon" />
                </Link>
            </div>
        </div>
        <div className="buttonContainer">
            <Link to={'/mountain'}>
                <button>Mountain</button>
            </Link>
            <Link to='/beach'>
                <button>Beach</button>
            </Link>
            <Link to='/food'>
                <button>Food</button>
            </Link>
            <Link to='/birds'>
                <button>Birds</button>
            </Link>
        </div>
        <Outlet />
    </>
}