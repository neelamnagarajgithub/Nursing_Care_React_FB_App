function UserDashboard() {
  return (
    <div className="dashboardcontainer">
      <div className="dashleftcon">
        <div className="dashlogo">
          <h1>Nursing Care</h1>
        </div>
        <div className="dashmainmenu">
          <h4>Main Menu</h4>
          <div className="dashulele">
            <ul>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="dashboard"
                  >
                    <path d="M8.5 3h-3a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 0 0-5zm0 4h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3zm0 3h-3A2.5 2.5 0 0 0 3 12.5v6A2.5 2.5 0 0 0 5.5 21h3a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 8.5 10zm1.5 8.5A1.5 1.5 0 0 1 8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-6A1.5 1.5 0 0 1 5.5 11h3a1.5 1.5 0 0 1 1.5 1.5zm8.5-2.5h-3a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 0 0-5zm0 4h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3zm0-17h-3A2.5 2.5 0 0 0 13 5.5v6a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 18.5 3zm1.5 8.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 15.5 4h3A1.5 1.5 0 0 1 20 5.5z"></path>
                  </svg>
                </span>
                Dashboard
              </li>
              <li>
                <span></span>
                Appointments
              </li>
              <li>Messages</li>
              <li>Payments</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
        <div className="dashaccount">
          <h4>Account</h4>
          <div>
            <ul>
              <li>Help</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
        <div className="dashuser">
          <div className="dashprofilephoto"></div>
          <div className="dashdetails">
            <h4>Rithwik Chimmani</h4>
            <p>Admin</p>
          </div>
        </div>
      </div>
      <div className="dashrightcon">rightcontainer</div>
    </div>
  );
}
export default UserDashboard;
