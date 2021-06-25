import React from "react";

function Sort(props) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="" id="" className="d-flex">
          <p className="m-auto">Sắp Xếp</p>
        </Dropdown.Toggle>

        <Dropdown.Menu className="">
          <Dropdown.Item href="/">A-Z</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Z-A</Dropdown.Item>
          <Dropdown.Item>Ngày</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Sort;
