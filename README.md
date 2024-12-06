
# Help Desk Application

This repository contains a comprehensive Help Desk application designed to streamline customer support operations. It includes backend, frontend, and a machine-learning-powered ticket distribution model to optimize the assignment of tickets among agents.

## Project Structure

- **Backend**: Located in the `Help-Desk-Software-Backend` directory, this component manages server-side operations, including API endpoints, database interactions, and authentication processes.
- **Frontend**: Found in the `Help-Desk-Software-Frontend` directory, this part handles the client-side interface, providing users with an intuitive platform to interact with the application's features.
- **Model Service**: Located in the `model-service` directory, it handles ticket distribution using a machine learning model.

## Key Features

- **Ticket Management**: Efficiently create, track, and resolve support tickets.
- **User Authentication**: Secure registration and login functionalities to protect user data.
- **Responsive Design**: Ensures optimal user experience across various devices and screen sizes.
- **Machine Learning for Ticket Distribution**: A specialized service predicts agent assignment based on ticket priority and type.

## Ticket Distribution Model Service

The `model-service` directory contains a FastAPI-based application powered by a machine learning model for ticket distribution.

### How It Works

1. **Data Processing**:
   - The model uses ticket features such as `Priority` (low, medium, high) and `Type` (software, hardware, network).
   - It maps these features to numeric values for processing.

2. **Model Training**:
   - A `RandomForestClassifier` is trained on a labeled dataset to assign tickets to agents.
   - The model achieves a high training accuracy, ensuring reliable predictions.

3. **Prediction**:
   - The `/predict` endpoint accepts ticket details (`priority` and `type`) and returns the predicted probabilities for each agent.

### API Endpoints

- **`GET /`**:
  - Returns a welcome message to indicate the service is running.

- **`POST /predict`**:
  - Accepts a JSON payload with `priority` and `type` fields.
  - Returns the prediction probabilities for ticket assignment among agents.

### Setup Instructions

1. **Navigate to the Model Service Directory**:

   ```bash
   cd Help-Desk/model-service
   ```

2. **Install Dependencies**:

   Ensure you have Python installed, then install the required packages:

   ```bash
   pip install fastapi pandas scikit-learn uvicorn
   ```

3. **Prepare the Dataset**:

   - Place the dataset file `Dataset for Extrafeature.csv` in the `model-service` directory.
   - Ensure the dataset contains the columns `Priority`, `Type`, and `Agent`.

4. **Start the Service**:

   Run the FastAPI application using Uvicorn:

   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

   The service will be accessible at `http://localhost:8000`.

5. **Test the Service**:

   Use `Postman`, `curl`, or any HTTP client to test the endpoints.

   Example using `curl`:
   ```bash
   curl -X POST http://localhost:8000/predict    -H "Content-Type: application/json"    -d '{"priority": "high", "type": "software"}'
   ```

   Example Response:
   ```json
   {
       "prediction": {
           "Agent1": 0.7,
           "Agent2": 0.2,
           "Agent3": 0.1
       }
   }
   ```

### Integration with Backend

To integrate this service with the Help Desk backend:

1. Ensure the backend makes API calls to the `/predict` endpoint for ticket assignment.
2. Properly map ticket properties (`priority` and `type`) to the expected values (e.g., `high`, `software`).
3. Use the prediction probabilities to determine the best agent for the ticket.

## Getting Started

Refer to the setup instructions for backend, frontend, and the model service to run the entire application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

## Contact

For any inquiries or issues, please open an issue in this repository.

---

*Note: Ensure proper configuration of the dataset and dependencies for smooth functionality of the model service.*
