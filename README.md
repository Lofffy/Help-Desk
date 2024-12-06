
# Help Desk Application

This repository contains a comprehensive Help Desk application designed to streamline customer support operations. It encompasses both backend and frontend components to deliver a seamless user experience.

## Project Structure

- **Backend**: Located in the `Help-Desk-Software-Backend` directory, this component manages server-side operations, including API endpoints, database interactions, and authentication processes.
- **Frontend**: Found in the `Help-Desk-Software-Frontend` directory, this part handles the client-side interface, providing users with an intuitive platform to interact with the application's features.

## Key Features

- **Ticket Management**: Efficiently create, track, and resolve support tickets.
- **User Authentication**: Secure registration and login functionalities to protect user data.
- **Responsive Design**: Ensures optimal user experience across various devices and screen sizes.
- **Ticket Distribution**: A specialized service to handle ticket assignments among agents efficiently.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js, HTML, CSS

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Lofffy/Help-Desk.git
   ```

2. **Setup Backend**:

   - Navigate to the backend directory:

     ```bash
     cd Help-Desk/Help-Desk-Software-Backend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Configure environment variables:
     Create a `.env` file in the backend directory with the necessary environment variables (e.g., database URI, authentication secrets).

   - Start the backend server:

     ```bash
     npm start
     ```

3. **Setup Frontend**:

   - Navigate to the frontend directory:

     ```bash
     cd ../Help-Desk-Software-Frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the frontend application:

     ```bash
     npm start
     ```

## Ticket Distribution Model Service

The `model-service` directory contains a specialized module designed to handle the distribution of support tickets among agents efficiently. This service ensures a balanced workload and optimizes response times.

### Features

- **Round-Robin Assignment**: Distributes incoming tickets evenly across available agents.
- **Priority Handling**: Assigns tickets based on predefined priority levels.
- **Load Balancing**: Considers the current workload of each agent to prevent overloading.

### Setup Instructions

1. **Navigate to the Model Service Directory**:

   ```bash
   cd Help-Desk/model-service
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the `model-service` directory with the following variables:

   ```env
   DATABASE_URI=your_database_uri
   SERVICE_PORT=desired_port_number
   ```

4. **Start the Service**:

   ```bash
   npm start
   ```

### Integration with Backend

To integrate the model service with the backend application:

- **API Endpoints**: Ensure that the backend server routes ticket assignment requests to the model service's API endpoints.
- **Inter-Service Communication**: Use RESTful API calls or message queues to facilitate communication between the backend and the model service.

### Testing the Service

After setup, test the ticket distribution functionality:

- **Simulate Ticket Creation**: Create multiple tickets and observe their assignment to agents.
- **Monitor Agent Workloads**: Verify that the service balances the workload among agents as intended.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

## Contact

For any inquiries or issues, please open an issue in this repository.

---

*Note: Ensure proper configuration of the `.env` file for smooth functionality.*
