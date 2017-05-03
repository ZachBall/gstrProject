#----------------------------------------------------------------------------#
# Imports
#----------------------------------------------------------------------------#

from flask import Flask, render_template, request, redirect
from flask_peewee.db import Database
from peewee import *
from models import * 
import logging
from logging import Formatter, FileHandler
from forms import *
import os

#----------------------------------------------------------------------------#
# App Config.
#----------------------------------------------------------------------------#
DATABASE = {
    'name': 'people.db',
    'engine': 'peewee.SqliteDatabase',
}
DEBUG = True
SECRET_KEY = 'ssshhhh'

app = Flask(__name__)
app.config.from_object(__name__)

db = SqliteDatabase('people.db')

db.connect()
#Pledge.create_table(True)

class Pledge(Model):
    name = TextField(null=True)
    cutBack = IntegerField(null=True)

    class Meta:
        database = db

# Automatically tear down SQLAlchemy.
'''
@app.teardown_request
def shutdown_session(exception=None):
    db_session.remove()
'''

# Login required decorator.
'''
def login_required(test):
    @wraps(test)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return test(*args, **kwargs)
        else:
          flash('You need to login first.')
            return redirect(url_for('login'))
    return wrap
'''
#----------------------------------------------------------------------------#
# Controllers.
#----------------------------------------------------------------------------#
@app.route('/')
def homeRedirect():
	return redirect('/index')

@app.route('/index')
def home():
    return render_template('pages/home.html')


@app.route('/about', methods=["GET", "POST"])
def about():
    if request.method == "POST":
        data = request.form
        try:
            Pledge.create(name=data['Name'], cutBack=data['cutOut'])
        except:
            try:
                Pledge.create(name="TESTING", cutBack=532)
            except:
                pass
    return render_template('pages/about.html')

@app.route('/total')
def total():
    number = Pledge.select().count()
    query = Pledge.select()
    allPledge = list(query)
    total = 0
    for i in allPledge:
        total += i.cutBack
    print total
    return render_template('pages/total.html', number=number, total=total)
# Error handlers.


@app.errorhandler(500)
def internal_error(error):
    #db_session.rollback()
    return render_template('errors/500.html'), 500


@app.errorhandler(404)
def not_found_error(error):
    return render_template('errors/404.html'), 404

if not app.debug:
    file_handler = FileHandler('error.log')
    file_handler.setFormatter(
        Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
    )
    app.logger.setLevel(logging.INFO)
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)
    app.logger.info('errors')

#----------------------------------------------------------------------------#
# Launch.
#----------------------------------------------------------------------------#

# Default port:
if __name__ == '__main__':
    app.run()

# Or specify port manually:
'''
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
'''
