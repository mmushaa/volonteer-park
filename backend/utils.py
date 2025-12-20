from werkzeug.security import generate_password_hash, check_password_hash
from db import get_user_by_login


def validate_user(login, password, password_repeat):
    if password != password_repeat:
        raise ValueError("Пароли не совпадают")
    user = get_user_by_login(login)
    if user:
        raise ValueError("Пользователь уже существует")
    return generate_password_hash(password)