FROM python:3.12.4-alpine

COPY requirements.txt /backend/
COPY f1project /backend/f1project

WORKDIR /backend

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "f1project/manage.py", "runserver", "0.0.0.0:8000"]
