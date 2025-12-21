# ВолонтерПарк

Сайт для волонтеров по уборке парков Москвы.


## Запуск

1. Склонируйте репозиторий
```bash
git clone https://github.com/mmushaa/volonteer-park.git
```

2. Создайте виртуальное окружение
```bash
python3 -m venv .venv
```

3. Активируйте виртуальное окружение
```bash
source .venv/bin/activate
```

4. Установите зависимости
```bash
pip install -r requirements.txt
```

5. Создайте базу данных
```bash
flask db upgrade
```

6. Запустите сервер
```bash
python app.py
```

