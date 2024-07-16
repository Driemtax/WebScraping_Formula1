# WebScraping_Formula1
Just some Practice for WebScraping and the Django Framework. I decided to scrape and visualize some data from formula1

Requirements:
    - Python3
    - npm

To Start the project open your console in the root directory of this project and type:

Server:

    First time: 
    cd backend
    python -m venv venv
    source venv/bin/activate # on Linux
    venv/Scripts/activate # on Windows
    pip install -r requirements.txt

    That should set up the Server

    To Run the server in the future:
    cd backend
    source venv/bin/activate # on Linux
    venv/Scripts/activate # on Windows
    python f1project/manage.py runserver 8000

WebApp:

    First Time:
    cd frontend/f1-frontend
    npm install

    That should install React and all other dependencies

    To Run the client in the future:
    cd frontend/f1-frontend
    npm start

    Then the webapp should open itself in your browser as soon as everything has loaded up