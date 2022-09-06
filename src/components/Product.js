import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Productsection = () => {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    item();
  }, []);

  const item = async () => {
    let itemdetail = await axios
      .get("http://localhost:5000/v2/productapi/get-allproduct")
      .then((Response) => {
        console.log(Response.data.result);
        setProduct(Response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removedata = async (data) => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    let deleteitem = await axios
      .delete(
        `http://localhost:5000/v2/productapi/delete-product?uuid=${data}`,
        {
          headers: { token: token },
        }
      )
      .then((Response) => {
        console.log(Response.data.result);
        item();
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.log(error);
      });
  };

  return (
    <>
      <div class="container mt-5">
        <h2>Product section</h2>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>productName</th>
                <th>Description</th>
                <th>price</th>
                <th>quantity</th>
              </tr>
            </thead>
            {product.map((value, index) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{value.productName}</td>
                      <td>{value.Description}</td>
                      <td>{value.price}</td>
                      <td>{value.quantity}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => removedata(value.uuid)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Productsection;
