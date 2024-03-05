import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>#TODO</h1>
      <div className="nav">
        <NavLink
          to={"/"}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          All
        </NavLink>
        <NavLink
          to={"/active"}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          Active
        </NavLink>
        <NavLink
          to={"/completed"}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          Completed
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
