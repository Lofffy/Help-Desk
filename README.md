
# Help Desk Model Service

This service is a machine-learning-powered component of the Help Desk application, designed to handle ticket distribution among agents. It uses a trained model to predict the best agent for a ticket based on its priority and type.

## Features

- **Predictive Ticket Assignment**: Uses a machine learning model to assign tickets efficiently.
- **Data Mapping**: Maps ticket properties (`Priority` and `Type`) into numerical values for processing.
- **Agent Prediction**: Provides probabilities for ticket assignment across agents.

## Technologies Used

- **Framework**: FastAPI
- **Machine Learning**: RandomForestClassifier (scikit-learn)
- **Data Handling**: pandas
- **Server**: Uvicorn

## API Endpoints

### `GET /`

- **Description**: A welcome endpoint to test if the service is running.
- **Response**:
  ```json
  {
      "message": "Hello World"
  }
  ```

### `POST /predict`

- **Description**: Predicts the best agent for a ticket based on its priority and type.
- **Request Payload**:
  ```json
  {
      "priority": "high",
      "type": "software"
  }
  ```
- **Response**:
  ```json
  {
      "prediction": {
          "Agent1": 0.7,
          "Agent2": 0.2,
          "Agent3": 0.1
      }
  }
  ```

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Python (>=3.7)
- pip (Python package installer)

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Lofffy/Help-Desk.git
   ```
   Navigate to the model service directory:
   ```bash
   cd Help-Desk/model-service
   ```

2. **Install Dependencies**:
   Install the required Python packages:
   ```bash
   pip install fastapi pandas scikit-learn uvicorn
   ```

3. **Prepare the Dataset**:
   - Place the dataset file `Dataset for Extrafeature.csv` in the `model-service` directory.
   - Ensure the dataset contains the columns `Priority`, `Type`, and `Agent`.

4. **Run the Service**:
   Start the FastAPI application using Uvicorn:
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

## Training and Accuracy

- **Model**: RandomForestClassifier
- **Dataset**: `Dataset for Extrafeature.csv`
- **Training Accuracy**: The model achieves high accuracy on the training data, ensuring reliable predictions.

## Integration with Backend

To integrate this service with the Help Desk backend:

1. Ensure the backend makes API calls to the `/predict` endpoint for ticket assignment.
2. Properly map ticket properties (`priority` and `type`) to the expected values (e.g., `high`, `software`).
3. Use the prediction probabilities to determine the best agent for the ticket.

## Contact

For any inquiries or issues, please open an issue in this repository.

---

*Note: Ensure the dataset is prepared and dependencies are installed for the service to function properly.*
