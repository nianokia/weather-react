import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="search-box form-control"
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-warning btn-search form-control w-100"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
