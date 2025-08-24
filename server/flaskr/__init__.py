from flask import Flask, jsonify
from flask_cors import CORS
from . import db
from dotenv import load_dotenv
import os


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    load_dotenv()

    # SECRET_KEY is used by Flask and extensions to keep data safe. It’s set to 'dev' to provide a convenient value during development, but it should be overridden with a random value when deploying.
    app.config.from_mapping(
        SECRET_KEY='dev',
        DB_USER=os.getenv('DB_USER'),
        DB_PASSWORD=os.getenv('DB_PASSWORD'),
        DB_HOST=os.getenv('DB_HOST'),
        DB_PORT=int(os.getenv('DB_PORT')),
        DB_NAME=os.getenv('DB_NAME')
    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/lawyers', methods=['GET'])
    def get_lawyers():
        result = db.get_lawyers()
        return jsonify(result)

    @app.route('/lawyers/post', methods=['POST'])
    def post_lawyer():
        result = db.post_lawyers()
        return jsonify(result)

    db.init_app(app)

    return app
