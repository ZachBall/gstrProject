from peewee import *
from app import db 

class Pledge(Model):
    name = TextField(null=True)
    cutBack = IntegerField(null=True)

    class Meta:
        database = db
