import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AdminSidebar from "./AdminSidebar";
import { getuser } from "../../api/adminApi";

const AdminDashboard = () => {
  let [user, setUser] = useState([])
  let [error, setError] = useState('')

  useEffect(() => {
    getuser()
      .then(data => {
        if (data.err) {
          setError(data.err)
        }
        else {
          setUser(data)
        }
      })
  })



  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <AdminSidebar />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="d-flex justify-content-center">
                <center><h1>Welcome to Admin Pannel</h1></center>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <li>
                        <i class='bx bxs-dollar-circle' ></i>
                        <span class="text">
                          <h3>197</h3>
                          <p>User Sales</p>
                        </span>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <li>
                        <i class='bx bxs-group' ></i>
                        <span class="text">
                          <h3>495</h3>
                          <p>Visitors</p>
                        </span>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <li>
                        <i class='bx bxs-calendar-check' ></i>
                        <span class="text">
                          <h3>178</h3>
                          <p>New Order</p>
                        </span>
                      </li>
                    </div>
                  </div>
                </div>
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      user && user.map((u, i) => {
                        return <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{u.username}</td>
                          <td>{u.email}</td>
                          <td>{u.role === 1 ? "Admin" : "User"}</td>

                        </tr>
                      })
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
