from flask import Flask, render_template
from db import get_rating_data, get_all_parks_data, get_park_data

app = Flask(__name__, template_folder="../frontend", static_folder="../frontend")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/parks")
def parks():
    return get_all_parks_data()


@app.route("/api/rating")
def rating():
    return get_rating_data()


if __name__ == "__main__":
    app.run(debug=True)
