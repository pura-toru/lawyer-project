from flask import request, current_app, g
from datetime import datetime
import mariadb
import click

def connect_db():
    if 'db' not in g:
        try:
            g.db = mariadb.connect(
                user=current_app.config["DB_USER"],
                password=current_app.config["DB_PASSWORD"],
                host=current_app.config["DB_HOST"],
                port=current_app.config["DB_PORT"],
                database=current_app.config["DB_NAME"]
            )
        except mariadb.Error as e:
            print(f"Connection to MariaDB Failed. {e}")
    return g.db


def get_lawyers():
    conn = connect_db()
    # Without dictionary column name won't show
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM lawyers")
    result = cursor.fetchall()
    return result

def post_lawyers():
    data = request.get_json()
    first_name = data.get('first_name')
    last_name= data.get('last_name')
    date_of_birth = data.get('date_of_birth')
    location = data.get('location')
    biography = data.get('biography')
    experience = data.get('experience')
    insertQuery = f"INSERT INTO lawyers (first_name, last_name, date_of_birth, location, biography, experience) VALUES ('{first_name}', '{last_name}', '{date_of_birth}', '{location}', '{biography}', '{experience}');"

    conn = connect_db()
    cursor = conn.cursor()
    if ((first_name != None) and (last_name != None)): 
        try:
            cursor.execute(insertQuery)
            conn.commit()
            print(f"Successfully executed query: {insertQuery}")
        except mariadb.Error as e:
            print(f"Error executing query: {e}")
    else:
        print("Required data is incomplete!")

def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()

def init_app(app):
    app.teardown_appcontext(close_db)
    # app.cli.add_command(init_db_command)
