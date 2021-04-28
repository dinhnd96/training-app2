import menubar from '../assets/bars-solid.svg'
import home from '../assets/home-solid.svg'
import celendar from '../assets/calendar-alt-solid.svg'
import cogs from '../assets/cogs-solid.svg'

function SideBar() {
    return (
        <div class="sidenav flex-column">
            <a className="sidenav-icon" href="#"><img width="50"  src={menubar}></img></a>
            <a className="sidenav-icon" href="#"><img width="50" src={cogs}></img></a>
            <a className="sidenav-icon" href="#"><img width="50" src={home}></img></a>
            <a className="sidenav-icon" href="#"><img width="50" src={celendar}></img></a>
        </div>
    )
}

export default SideBar;