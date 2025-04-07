from flask import Flask, request, send_file
from flask_cors import CORS
from gtts import gTTS
import os
import uuid

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend

@app.route("/speak", methods=["POST"])
def speak():
    data = request.get_json()
    text = data.get("text", "")
    
    if not text.strip():
        return {"error": "No text provided"}, 400

    # Generate unique filename
    filename = f"speech_{uuid.uuid4()}.mp3"
    filepath = os.path.join("audio", filename)

    # Ensure audio folder exists
    os.makedirs("audio", exist_ok=True)

    # Convert text to speech
    tts = gTTS(text)
    tts.save(filepath)

    return send_file(filepath, mimetype="audio/mpeg", as_attachment=False)

if __name__ == "__main__":
    app.run(debug=True)
