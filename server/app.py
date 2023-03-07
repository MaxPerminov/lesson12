from flask import Flask
from flask_cors import CORS
import json

from database.people import people
from database.products import items




app = Flask(__name__)
CORS(app)


@app.route('/')
def users():  
    return json.dumps(people)

@app.route('/products')
def products():
    return json.dumps(items)


if __name__ == '__main__':
    app.run(port=3333)
