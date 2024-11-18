import React from 'react'

function Cart() {
  return (
    <div>

      <div className="row container">

        <div className="col-lg-1"></div>
        <div className="col-lg-7">
          <div className="table shadow container mt-5 p-5">
           <table>
           <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
           </tr>

           <tr>
            <td>1</td>
            <td>Product</td>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIjaQ0xgPi5FT9oRPoqfUCGibmrZOx41XZA&s" width={"70%"} height={"200px"} alt='' /></td>
            <td>$895</td>
            <td><button className='btn'><i class="fa-solid fa-trash"></i></button></td>
           </tr>
           </table>
         </div>
        </div>

        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className="card shadow rounded mt-5 p-5">
            <h2 className='text-info fw-bolder'>Cart Summary</h2>
            <h4><span className='text-info fw-bolder'>Total Products : </span>3</h4>
            <h4><span className='text-info fw-bolder'>Total Price : </span>$1000</h4>
          </div>
          <div className="d-grid">
          <button className='btn btn-success mt-2'>Checkout</button>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
