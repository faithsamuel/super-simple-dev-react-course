import React from "react";
import { Header } from "../components/Header";
import "./PageNotFound.css";

export function PageNotFound({ cart }) {
  return (
    <div>
      <Header cart={cart} />
      <div className="page-not-found-container">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>

        <a href="/" className="back-home-btn">
          Back to Home
        </a>
      </div>
    </div>
  );
}
