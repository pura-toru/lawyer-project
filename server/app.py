from flask import Flask, jsonify, request # Import extra check later => abort, redirect, url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Ini array yang nongol di api coba aja tambahin bbrp.
books = [
    {"id": 1, "title": "Python for Beginners", "author":"John Doe"},
    {"id": 2, "title": "Python for Beginners", "author":"John Doe"},
]

@app.route('/api/books', methods=['GET'])
def get_books():
    return jsonify(books)

@app.route('/api/books', methods=['POST'])
def add_book():
    new_book = request.get_json()
    books.append(new_book)
    return jsonify({"message": "Book added successfully!"}), 201

# if __name__ == '__main__':
#     app.run(debug=True)
