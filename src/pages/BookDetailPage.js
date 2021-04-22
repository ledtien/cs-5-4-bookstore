import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button, Card } from "react-bootstrap";

export default function BookDetailPage() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const BACKEND_API = process.env.REACT_APP_BACKEND_API;

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(`${BACKEND_API}/books/${id}`);
      const json = await response.json();

      setBook(json);
    }
    fetchBook();
  }, []);
  return (
    <div>
      <Card className=" m-2 height shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={BACKEND_API + "/" + book.imageLink} />
        <Card.Body className="IBG card-text">
          <Card.Title className="text-title">{book.title}</Card.Title>
          <Card.Text>
            Written by "{book.author}" from "{book.country}"
          </Card.Text>
          <Card.Text>- Year {book.year}</Card.Text>
          <Card.Text>Language: {book.language}</Card.Text>

          <Button
            variant="primary"
            className=" mb-5
                    BText"
          >
            <a href={book.link}>More details</a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
