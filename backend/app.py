from flask import Flask, render_template, request, redirect, url_for
from db import get_rating_data, get_all_parks_data, create_user
from utils import validate_user

app = Flask(__name__, template_folder="../frontend", static_folder="../frontend")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "GET":
        return render_template("register.html")
    else:
        login = request.form.get("login")
        password = request.form.get("password")
        password_repeat = request.form.get("password_repeat")
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")

        try:
            password_hash = validate_user(login, password, password_repeat)
            create_user(login, password_hash, first_name, last_name)
        except ValueError as error:
            return render_template("register.html", error=error)
        
        return redirect(url_for("index"))


@app.route("/api/parks")
def parks():
    return get_all_parks_data()


@app.route("/api/rating")
def rating():
    return get_rating_data()


if __name__ == "__main__":
    app.run(debug=True)
