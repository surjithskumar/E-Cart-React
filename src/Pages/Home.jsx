import React, { useEffect } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../Redux/slice/productSlice';

function Home() {
  const dispatch = useDispatch();
  const { allproducts, loading, error } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container-fluid mt-5">
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="info" />
        </div>
      ) : error ? (
        <div className="text-center text-danger mt-5">
          <p>{error}</p>
        </div>
      ) : (
        <Row>
          {allproducts?.length > 0 ? (
            allproducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '18rem' }} className="m-3">
                  <Link to={`/view/${product.id}`}>
                    <Card.Img variant="top" src={product?.thumbnail} />
                  </Link>
                  <Card.Body>
                    <Card.Title className="text-danger fw-bolder">
                      {product?.title.slice(0, 10)}...
                    </Card.Title>
                    <Card.Text>{product?.description.slice(0, 20)}...</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button variant="primary">
                        <i className="fa-solid fa-heart"></i>
                      </Button>
                      <Button variant="primary">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-danger">Nothing to display</p>
          )}
        </Row>
      )}
    </div>
  );
}

export default Home;
