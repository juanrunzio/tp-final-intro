from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class Atleta(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    pais = db.Column(db.String(50), nullable=False)
    fecha_nacimiento = db.Column(db.Date, nullable=False)
    genero = db.Column(db.String(10), nullable=False)
    evento_id = db.Column(db.Integer, db.ForeignKey(
        'evento.id'), nullable=False)
    deporte_id = db.Column(db.Integer, db.ForeignKey('deportes.id'), nullable=False)
    imagen = db.Column(db.String(500), nullable=True)
    eventos = db.relationship('Evento', backref='atleta', lazy=True)
    deportes = db.relationship('Deportes', backref='atleta', lazy=True)

class Deportes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    logo = db.Column(db.String(500), nullable=True)

class Evento(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    fecha = db.Column(db.DateTime, nullable=False)
    lugar = db.Column(db.String(100), nullable=False)
    deporte_id = db.Column(db.Integer, db.ForeignKey('deportes.id'), nullable=False)
    deportes = db.relationship('Deportes', backref='evento', lazy=True)


