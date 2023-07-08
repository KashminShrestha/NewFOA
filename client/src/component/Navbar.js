import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"
import { isAuthenticated, signout } from './../api/userApi';
import { useSelector } from 'react-redux';

const Navbar = () => {
  let navigate = useNavigate()
  const handleSubmit = () => {
    signout()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          navigate("/signin")
        }
      })
  }


  const cart_items = useSelector(state => state.cart.cart_items.length)
  return (
    <>
      {/* header */}
      <header>
        <Link to="/" className="logo ">
          <i className=""></i>Cosmos Cafeteria.
        </Link>

        <nav className="navbar">
          <Link to="/" >Home</Link>
          <Link to="/products">Menu</Link>
          <Link to="/contact">Contact Us</Link>


        </nav>

        <div className="icons">

          {
            isAuthenticated().user && isAuthenticated().user.role === 0 &&
            <>
              <div className="text-end">
                <Link to="/cart">
                  <i class="fas fa-shopping-cart fa-lg">
                    <span class="position-absolute top-1 start-90 translate-middle badge rounded-pill bg-danger">
                      {
                        cart_items
                      }
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </i>
                </Link>

                <Link to="/logout">
                  <button type="button" className="btn btn-warning" onClick={handleSubmit}>Logout</button>
                </Link>
              </div>
            </>
          }
          {
            !isAuthenticated().user &&
            <>
              <div className="text-end">
                <Link to="/signin"><button type="button" className="btn btn-outline-light me-2">Login</button></Link>
                <Link to="/register"><button type="button" className="btn btn-warning">Sign-up</button></Link>
              </div>
            </>

          }
          {
            isAuthenticated().user && isAuthenticated().user.role === 1 &&
            <>
              <Link to="/logout">
                <button type="button" className="btn btn-warning" onClick={handleSubmit}>Logout</button>
              </Link>
            </>

          }

        </div>
      </header>
    </>
  );
};

export default Navbar;
