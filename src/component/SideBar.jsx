import menubar from "../assets/bars-solid.svg";
import celendar from "../assets/calendar-alt-solid.svg";
import cogs from "../assets/cogs-solid.svg";
import home from "../assets/home-solid.svg";

function SideBar() {
  return (
    <div className="sidenav flex-column">
      <a className="sidenav-icon" href="/">
        <img alt="" width="30" src={menubar} ></img>
      </a>
      <a className="sidenav-icon" href="/">
        <img alt="" width="30" src={home}></img>
      </a>
      <a className="sidenav-icon" href="/">
        <img alt="" width="30" src={cogs} ></img>
      </a>
      <a className="sidenav-icon" href="/">
        <img alt="" width="30" src={celendar} ></img>
      </a>
    </div>
  );
}

export default SideBar;
