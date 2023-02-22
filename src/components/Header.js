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
                            <Link to="/">Watch List</Link>
                        </li>
                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>
                        <li>
                            <Link to="/add" className="btn">
                                + add
                            </Link>
                        </li>

                        <li>
                            <Link ><i className="far fa-user">
                                <ul>
                                    <li><Link to="/signin">Signin</Link></li>
                                    <li><Link to="/signup">Signup</Link></li>
                                </ul>
                            </i>
                            </Link>
                        </li>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
