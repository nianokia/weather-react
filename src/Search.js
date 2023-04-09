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
              value="Enter a city..."
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-warning btn-search form-control"
              type="sumbit"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
