from flask import Flask, render_template, session, redirect, url_for, g, request
from database import get_db, close_db
from flask_session import Session
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps
from forms import *

app = Flask(__name__)
app.teardown_appcontext(close_db)
app.config['SECRET_KEY'] = 'cheeky-key'
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.before_request
def load_logged_in_user():
    g.user = session.get("user_id", None)

@app.route('/game')
def game():
    return render_template('game.html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/store_score", methods=['POST'])
def store_score():
    score = int(request.form["score"])
    if g.user is not None:
        db = get_db()
        user = db.execute("""SELECT * FROM leaderboard
                   WHERE user = ?""", (g.user,)).fetchone()
        if user is None:
            db.execute("""INSERT INTO leaderboard (user, score) VALUES
                        (?, ?)""", (g.user, score))

        elif user['score'] < score:
            db.execute("""UPDATE leaderboard
                    SET score = ?
                    WHERE user = ?""", (score, g.user))
        db.commit()
    return "success"

@app.route("/leaderboard")
def leaderboard():
    db = get_db()
    leaderboard = db.execute("""SELECT * FROM leaderboard
                             ORDER BY score DESC""").fetchall()
    return render_template("leaderboard.html", leaderboard = leaderboard)


@app.route('/login', methods=["GET", "POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user_id = form.user_id.data
        password = form.password.data
        db = get_db()
        user_in_db = db.execute(""" SELECT * FROM users WHERE user_id = ?;""", (user_id,)).fetchone()
        if user_in_db is None:
            form.user_id.errors.append('There is no such user name!')
        elif not check_password_hash(user_in_db["password"], password):
            form.password.errors.append('Incorrect password!')
        else:
            session.clear()
            session['user_id'] = user_id
            session.modified = True
            next_page = request.args.get('next')
            if not next_page:
                next_page = url_for('index')
            return redirect(next_page)
    return render_template('login.html', form=form)

@app.route("/logout")
def logout():
    session.clear()
    session.modified = True
    return redirect (url_for('index'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user_id = form.user_id.data

        password = form.password.data
        db = get_db()
        clash = db.execute(""" SELECT * FROM USERS
                           WHERE user_id = ?""", (user_id,)).fetchone()
        if clash is not None:
            form.user_id.errors.append("Your name already taken")
        else:
            db.execute("""INSERT INTO users (user_id, password)
                       VALUES (?, ?)""",
                       (user_id, generate_password_hash(password)))
            db.commit()
            return redirect(url_for('login'))
    return render_template("register.html", form=form)