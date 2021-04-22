import React from "react";
import "../App.css";
import { Form, Button, Pagination, Card, Row, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const totalPageNum = 10;
const limit = 9;
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const HomePage = () => {
  const [pageNum, setPageNum] = useState();

  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch(
        `${BACKEND_API}/books?_page=${pageNum}&_limit=${limit}`
      );
      const json = await response.json();
      console.log({ json });
      setBooks(json);
      setPageNum(totalPageNum);
    }
    fetchBooks();
  }, []);
  return (
    <div className="container">
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Search your books here!" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Search
        </Button>
      </Form>
      <Row className="container justify-content-center mt-3">
        {books.map((b) => {
          return (
            <div>
              <Card
                style={{ width: "20rem" }}
                className=" m-2 height shadow-lg p-3 mb-5 bg-white rounded"
              >
                <Card.Img
                  variant="top"
                  src={BACKEND_API + "/" + b.imageLink}
                  height="450px"
                />
                <Card.Body className="IBG card-text">
                  <Card.Title className="text-title">{b.title}</Card.Title>
                  <Card.Text>
                    Written by "{b.author}" from "{b.country}"
                  </Card.Text>
                  <Card.Text>- Year {b.year}</Card.Text>
                  <Card.Text>Language: {b.language}</Card.Text>
                  <Nav.Link as={Link} to="/books/id">
                    <Button
                      variant="primary"
                      className="
                    BText"
                    >
                      More details
                    </Button>
                  </Nav.Link>
                </Card.Body>
              </Card>{" "}
            </div>
          );
        })}
      </Row>
      <Pagination className="mt-4 justify-content-center">
        <Pagination.First />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default HomePage;
