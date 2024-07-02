from app import app, db
from models import Atleta, Evento
from datetime import datetime, timedelta

def seed_database():
    with app.app_context():
        # Borra todos los datos existentes
        db.drop_all()
        db.create_all()

        # Crea algunos atletas de ejemplo
        atleta1 = Atleta(nombre="Juan Pérez", pais="España", fecha_nacimiento=datetime(1990, 5, 15), genero="Masculino")
        atleta2 = Atleta(nombre="Maria García", pais="México", fecha_nacimiento=datetime(1992, 8, 22), genero="Femenino")
        atleta3 = Atleta(nombre="John Smith", pais="Estados Unidos", fecha_nacimiento=datetime(1988, 3, 10), genero="Masculino")

        db.session.add_all([atleta1, atleta2, atleta3])
        db.session.commit()

        # Crea algunos eventos de ejemplo
        evento1 = Evento(nombre="100m planos", deporte="Atletismo", fecha=datetime.now() + timedelta(days=10), lugar="Estadio Olímpico", atleta_id=atleta1.id)
        evento2 = Evento(nombre="Salto de longitud", deporte="Atletismo", fecha=datetime.now() + timedelta(days=12), lugar="Estadio Olímpico", atleta_id=atleta2.id)
        evento3 = Evento(nombre="Lanzamiento de jabalina", deporte="Atletismo", fecha=datetime.now() + timedelta(days=15), lugar="Estadio Olímpico", atleta_id=atleta3.id)

        db.session.add_all([evento1, evento2, evento3])
        db.session.commit()

        print("Base de datos poblada con éxito!")

if __name__ == "__main__":
    seed_database()