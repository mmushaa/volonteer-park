from app import app
from app.utils import validate_user
from app.crud import (
    get_rating_data,
    get_all_parks_data,
    create_user,
    get_user_by_login,
    get_user,
)

from flask import render_template, request, redirect, url_for, session

from werkzeug.security import check_password_hash


@app.route("/")
def index():
    user_id = session.get("user_id")
    return render_template("index.html", user_id=user_id)


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


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        if "user_id" in session:
            return redirect(url_for("profile"))
        return render_template("login.html")
    else:
        login: str = request.form.get("login", "")
        password: str = request.form.get("password", "")

        user = get_user_by_login(login)
        if user is None:
            return render_template("login.html", error="Неверный логин или пароль")

        if not check_password_hash(user.password_hash, password):
            return render_template("login.html", error="Неверный логин или пароль")

        session["user_id"] = user.id

        return redirect(url_for("index"))


@app.route("/logout")
def logout():
    session.pop("user_id", None)
    return redirect("/")


@app.route("/profile")
def profile():
    user_id = session.get("user_id")
    if user_id is None:
        return redirect("/login")

    user = get_user(user_id)
    if user is None:
        return redirect("/login")

    first_name = user.first_name
    last_name = user.last_name
    login = user.login
    return render_template("profile.html", user=user, first_name=first_name, last_name=last_name, login=login)


@app.route("/events")
def events():
    user_id = session.get("user_id")
    if user_id is None:
        return redirect("/login")
    
    return render_template("events.html", user_id=user_id)


@app.route("/api/parks")
def parks():
    return get_all_parks_data()


@app.route("/api/rating")
def rating():
    return get_rating_data()
