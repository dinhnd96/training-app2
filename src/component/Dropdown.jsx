import Dropdown from "react-bootstrap/Dropdown";

function IconDropDown() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="" id="" className="d-flex">
          <img
            className="NavBar-icon mr-10"
            src="https://www.nintendoenthusiast.com/wp-content/uploads/2019/07/Psyduck.jpg"
            width="50"
          ></img>
          <p className="m-auto">Vịt Bối Dối</p>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Giỏ Hàng</Dropdown.Item>
          <Dropdown.Item href="#/action-2"></Dropdown.Item>
          <Dropdown.Item href="/login">Đăng Xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default IconDropDown;
