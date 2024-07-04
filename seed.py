from app import app, db
from models import Atleta, Evento
from datetime import datetime, timedelta

def seed_database():
    with app.app_context():
        # Borra todos los datos existentes
        db.drop_all()
        db.create_all()

        # Crea algunos atletas de ejemplo
        evento1 = Evento(nombre="100m lisos", deporte="Atletismo", fecha=datetime(2023, 7, 24), lugar="Estadio Olímpico")
        evento2 = Evento(nombre="Maratón", deporte="Atletismo", fecha=datetime(2023, 8, 5), lugar="Ciudad")

        db.session.add_all([evento1, evento2])
        db.session.commit()

        # Crea algunos eventos de ejemplo
        atleta1 = Atleta(nombre="Juan Pérez", pais="España", fecha_nacimiento=datetime(1990, 5, 14), genero="Masculino", eventos=evento1)
        atleta2 = Atleta(nombre="Ana Gómez", pais="México", fecha_nacimiento=datetime(1988, 11, 23), genero="Femenino", eventos=evento2)
        atleta3 = Atleta(nombre="Pedro Rodríguez", pais="Argentina", fecha_nacimiento=datetime(1995, 3, 30), genero="Masculino", eventos=evento1)

        db.session.add_all([atleta1, atleta2, atleta3])
        db.session.commit()

        print("Base de datos poblada con éxito!")

if __name__ == "__main__":
    seed_database()