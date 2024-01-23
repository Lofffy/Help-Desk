import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log('checking', user);
    if (!user) {
      console.log('there is no user redirecting to login page');
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Link to="/createTicket">
          <button>Create a Ticket</button>
        </Link>
        <Link to="/viewMyTickets">
          <button>View My Tickets</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
