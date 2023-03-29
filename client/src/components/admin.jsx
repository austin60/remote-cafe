import { NavLink } from "react-router-dom";

const AdminBar=()=>{
    return(
        <div className="admin-bar">
            <div className="logo">
                Remote Cafe
            </div>
            <div className="admin-menu-items">
                <ul>
                    <li>Orders</li>
                    <li>Recieved</li>
                    <li><NavLink to="/admin/create"> Create</NavLink></li>

                </ul>
            </div>
        </div>
    )
}
export default AdminBar;