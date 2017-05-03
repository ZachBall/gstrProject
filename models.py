from peewee import *
from app import db

class Pledge(Model):
    name = TextField()
    cutBack = IntegerField()

    class Meta:
        database = db
