import mariadb
from datetime import datetime 

import click
from flask import current_app, g

def get_db():
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
    conn = get_db()
    cursor = conn.cursor(dictionary=True) #Without dictionary column name won't show
    cursor.execute("SELECT * FROM lawyers")
    result = cursor.fetchall()
    return result

def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()

def init_app(app):
    app.teardown_appcontext(close_db)
    # app.cli.add_command(init_db_command)
