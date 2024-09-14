from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
import os

app = Flask(__name__)
CORS(app)

# Create 'uploads' directory if it doesn't exist
if not os.path.exists('uploads'):
    os.makedirs('uploads')

@app.route('/upload', methods=['POST'])
def upload_image():
    try:
        data = request.json['image']
        # Remove header (base64, data:image/jpeg;base64,)
        image_data = data.split(",")[1]

        # Decode the base64 string
        image_bytes = base64.b64decode(image_data)

        # Save the image
        image_path = os.path.join('uploads', 'captured_image.jpg')
        with open(image_path, 'wb') as image_file:
            image_file.write(image_bytes)

        return jsonify({"message": "Image successfully uploaded"}), 200

    except Exception as e:
        return jsonify({"message": f"Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
