import React, { useEffect, useState } from "react";
import { getallproduct } from "../api/adminApi";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import "../App.css"

const Myproducts = () => {
  const [product, setProduct] = useState([])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')


  useEffect(() => {
    getallproduct()
      .then(data => {
        if (data.err) {
          setError(data.error)


        }
        else {
          setProduct(data)
          console.log(data)


        }

      })


  }, [])
  return (

    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-2">
            <h4 className="text-primary">Flash Sale</h4>
            <h4 className="text-warning">Deals of the day</h4>
            <h4 className="text-danger">New Menu</h4>

            <h2 className="text-primary text-decoration-underline mt-3">Categories</h2>
            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Breakfast
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Lunch
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Dinner
              </label>
            </div>

            <h2 className="text-primary text-decoration-underline mt-4">Prices</h2>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                All
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Above Nrs.100
              </label>
            </div>






          </div>
          <div className="col-10">
            <div className="row row-cols-1 row-cols-md-2 g-4">

              {
                product && product.map((p, i) => {
                  return <div className="col-lg-3">
                    <div className="card" key={i}>
                      <img src={`http://localhost:5000/${p.product_image}`} className="card-img-top custom-card-product" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{p.product_name}</h5>
                        {
                          p.rating &&
                          <ReactStars size={30} value={`${p.rating}`} />
                        }
                        <p className="card-text text-truncate">{p.product_description}</p>
                        <Link to={`/product/${p._id}`}><div className="btn btn-primary form-control">See More</div></Link>
                      </div>
                    </div>
                  </div>
                })
              }


            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Myproducts;
