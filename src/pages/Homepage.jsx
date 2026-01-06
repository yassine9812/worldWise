import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

export default function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>Homepage</h1>
      <Link to="/App">Go to App Layout</Link>
    </div>
  );
}
