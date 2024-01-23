import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogsRedirect = () => {
    navigate("/logs");
  };
  const handleBackupsRedirect = () => {
    navigate("/backups");
  };
  const handleCreateUserClick = () => {
    navigate("/createUser");
  };

  const handleAssignRoleClick = () => {
    navigate("/assignRole");
  };

  return (
    <div className="admin-dashboard">
      <Header />
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogsRedirect}>Go to Logs</button>
      <button onClick={handleBackupsRedirect}>Go to Backups</button>
      {/*anas start */}
      <button
        type="submit"
        className="btn btn-bloc"
        onClick={handleCreateUserClick}
      >
        create user
      </button>
      <button
        type="submit"
        className="btn btn-bloc"
        onClick={handleAssignRoleClick}
      >
        assign role
      </button>
      {/*anas end */}
    </div>
  );
}

export default Dashboard;
