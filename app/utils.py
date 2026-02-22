from werkzeug.security import generate_password_hash, check_password_hash
from app.crud import get_user_by_login


def validate_user(login, password, password_repeat):
    if password != password_repeat:
        raise ValueError("Пароли не совпадают")
    user = get_user_by_login(login)
    if user:
        raise ValueError("Пользователь уже существует")
    return generate_password_hash(password)


def pluralize_ru(number, forms):
    """
    forms: список из трёх форм: ['час', 'часа', 'часов']
    """
    number = abs(number)
    if 11 <= (number % 100) <= 14:
        return forms[2]
    last_digit = number % 10
    if last_digit == 1:
        return forms[0]
    elif 2 <= last_digit <= 4:
        return forms[1]
    else:
        return forms[2]
