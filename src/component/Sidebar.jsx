import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar" style={{ width: "250px", minWidth: "220px" }} >
      <div className="sidebar-inner slimscroll">       
        <div id="sidebar-menu" className="sidebar-menu">
          <ul className="sidebar-vertical">
            <li>
              <Link to="/dashboard">
                <i className="fe fe-home"></i> <span> Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="user-list" className="active">
                <i className="fe fe-users"></i> <span> Users</span>
              </Link>
            </li>
            <li>
              <Link to="tokens">
                <i className="fa fa-ticket"></i> <span> Tokens</span>
              </Link>
            </li>
            <li>
              <Link to="charities">
                <i className="fa fa-heart"></i> <span> Charities  </span>
              </Link>
            </li>
              <li>
              <Link to="foundation">
                <i className="fa fa-image"></i> <span> Foundation</span>
              </Link>
            </li>
            <li>
              <Link to="banner-and-news">
                <i className="fa fa-image"></i> <span> Banners & News</span>
              </Link>
            </li>
           
            <li>
              <Link to="settings">
                <i className="fa fa-cog"></i> <span> Settings</span>
              </Link>
            </li>
            <li>
              <Link to="emergency-controls">
                <i className="fa fa-info"></i> <span> Emergency Controls</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                <i className="fe fe-power"></i> <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
