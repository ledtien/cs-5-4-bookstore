import React from "react";
import { useState, useEffect } from "react";

export default function BookDetailPage() {
  const [books, setBooks] = useState([]);
  const totalPageNum = 10;
  const limit = 9;
  const BACKEND_API = process.env.REACT_APP_BACKEND_API;
  const [pageNum, setPageNum] = useState();
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
  return <div></div>;
}
