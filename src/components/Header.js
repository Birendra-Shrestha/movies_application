import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Movie</Link>
                    </div>
                    <div className="nav-links">
                        <li>
                            <Link to="/watchlist">Watch List</Link>
                        </li>
                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>
                        <li>
                            <Link to="/add" className="btn">
                                Search
                            </Link>
                        </li>

                        <li>
                            <Link ><i className="far fa-user"></i></Link>
                            <ul className="dropdown">
                                <li>
                                    <Link to="/signin">Signin</Link>
                                    <Link to="/registration">Signup</Link>
                                </li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;
