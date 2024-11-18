import React from 'react'
import { Button } from 'react-bootstrap'

function View() {
  return (
    <div>

      <div className="container mt-5 row ms-5">
        <div className="col-lg-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIjaQ0xgPi5FT9oRPoqfUCGibmrZOx41XZA&s" alt="" />
        </div>
        <div className="col-lg-2">
        </div>
        <div className="col-lg-6">
          <p>Pid 2424242</p>
          <h1>P Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia necessitatibus eligendi adipisci corrupti accusamus illum, dicta labore ex amet molestias atque doloremque vero quaerat soluta iusto at ullam totam.</p>
          <h3>Price <span className='text-danger'>$895</span></h3>
          <div className="d-flex justify-content-between">
            <Button className='btn btn-outline-dark'><i class="fa-solid fa-heart text-danger"></i> Wishlist</Button>
            <Button className='btn btn-outline-light'><i class="fa-solid fa-cart-plus text-info"></i> Cart</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default View