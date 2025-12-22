from app import db
from app.models import User, Park

import sqlite3
import os
import json


def get_rating_data():
    return User.query.all()


def get_all_parks_data():
    return Park.query.all()


def get_park_data(park_id):
    return Park.query.get(park_id)


def get_user(user_id):
    return User.query.get(user_id)


def get_user_by_login(login):
    return User.query.filter_by(login=login).first()


def create_user(login, password_hash, first_name, last_name):
    user = User()
    user.login = login
    user.password_hash = password_hash
    user.first_name = first_name
    user.last_name = last_name
    db.session.add(user)
    db.session.commit()
    return user
