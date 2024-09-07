from flask import Flask, request, jsonify
import joblib
import pandas as pd

# Initialize the Flask app
app = Flask(__name__)

# Load the trained model
model = joblib.load('expiry_prediction_model.pkl')

# Define the feature columns for input
feature_cols = ['price', 'available', 'days_until_expiry', 'priority', 'category_encoded', 
                'price_available_interaction', 'priority_available_interaction', 
                'day_of_week', 'is_weekend', 'season']

# API endpoint for predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Get JSON data from the request
    data = request.get_json()

    # Convert the JSON data to a DataFrame
    df = pd.DataFrame([data], columns=feature_cols)

    # Make predictions
    prediction = model.predict(df)

    # Return the prediction as JSON
    return jsonify({'predicted_days_until_expiry': prediction[0]})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
