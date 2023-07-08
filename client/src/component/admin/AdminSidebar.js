import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../../api/userApi";

const AdminSidebar = ({ category, product, users, order }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signout().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        navigate("/signin");
      }
    });
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "280px", height: "90vh" }}>
      <Link to="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <i className="bi bi-bootstrap pe-none me-2" width="40" height="32"></i>
        <span className="fs-4">Admin Panel</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {/* Category */}
        <li className="nav-item">
          {category ? (
            <Link to="/admin/category" className="nav-link active" aria-current="page">
              <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
              Category
            </Link>
          ) : (
            <Link to="/admin/category" className="nav-link link-dark" aria-current="page">
              <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
              Category
            </Link>
          )}
        </li>
        {/* Product */}
        <li className="nav-item">
          {product ? (
            <Link to="/admin/product" className="nav-link active" aria-current="page">
              <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
              Food Item
            </Link>
          ) : (
            <Link to="/admin/product" className="nav-link link-dark" aria-current="page">
              <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
              Products
            </Link>
          )}
        </li>
        {/* Users */}
        <li className="nav-item">
          {users ? (
            <Link to="/admin/users" className="nav-link active" aria-current="page">
              <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
              Users
            </Link>
          ) : (
            <Link to="/admin/users" className="nav-link link-dark" aria-current="page">
              <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
              Users
            </Link>
          )}
        </li>
        {/* Orders */}
        <li className="nav-item">
          {order ? (
            <Link to="#" className="nav-link active" aria-current="page">
              <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
              Orders
            </Link>
          ) : (
            <Link to="#" className="nav-link link-dark" aria-current="page">
              <i className="bi bi-home pe-none me-2" width="16" height="16"></i>
              Orders
            </Link>
          )}
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          to="#"
          className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>{isAuthenticated().user.username}</strong>
        </Link>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <Link className="dropdown-item" to="#">
              {isAuthenticated().user.email}
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li onClick={handleSubmit}>
            <Link className="dropdown-item" to="/logout">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
