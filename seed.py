from app import app, db
from models import Atleta, Evento
from datetime import datetime, timedelta

def seed_database():
    with app.app_context():
        # Borra todos los datos existentes
        db.drop_all()
        db.create_all()

        
        evento_futbol = Evento(nombre="Fútbol masculino", deporte="Fútbol", fecha=datetime(2024, 7, 26), lugar="París")
        evento1 = Evento(nombre="100m lisos", deporte="Atletismo", fecha=datetime(2023, 7, 24), lugar="Estadio Olímpico")
        evento2 = Evento(nombre="Maratón", deporte="Atletismo", fecha=datetime(2023, 8, 5), lugar="Ciudad")

        db.session.add_all([evento1, evento2, evento_futbol])
        db.session.commit()

        atleta1 = Atleta(nombre="Juan Pérez", pais="España", fecha_nacimiento=datetime(1990, 5, 14), genero="Masculino", eventos=evento1)
        atleta2 = Atleta(nombre="Ana Gómez", pais="México", fecha_nacimiento=datetime(1988, 11, 23), genero="Femenino", eventos=evento2)
        atleta3 = Atleta(nombre="Pedro Rodríguez", pais="Argentina", fecha_nacimiento=datetime(1995, 3, 30), genero="Masculino", eventos=evento1, imagen="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg")

        jugadores = [
        {"nombre": "Thiago Almada", "fecha_nacimiento": datetime(2001, 4, 26), "imagen": "https://img.a.transfermarkt.technology/portrait/big/576028-1709363616.jpg?lm=1"},
        {"nombre": "Julián Álvarez", "fecha_nacimiento": datetime(2000, 1, 31), "imagen": "https://img.a.transfermarkt.technology/portrait/header/576024-1684920938.jpg?lm=1"},
        {"nombre": "Leandro Brey", "fecha_nacimiento": datetime(2002, 9, 21), "imagen": "https://img.a.transfermarkt.technology/portrait/big/982633-1710343824.jpg?lm=1"},
        {"nombre": "Geronimo Rulli", "fecha_nacimiento": datetime(1992, 5, 20), "imagen": "https://img.a.transfermarkt.technology/portrait/big/229604-1698670758.jpg?lm=1"},
        {"nombre": "Marco Di Cesare", "fecha_nacimiento": datetime(2002, 1, 30), "imagen": "https://oller.group/wp-content/uploads/2020/05/DICESARE_AFA05.jpg"},
        {"nombre": "Julio Soler", "fecha_nacimiento": datetime(2005, 2, 16), "imagen": "https://img.a.transfermarkt.technology/portrait/big/1009658-1685982137.JPG?lm=1"},
        {"nombre": "Joaquin Garcia", "fecha_nacimiento": datetime(2001, 8, 20), "imagen": "https://img.a.transfermarkt.technology/portrait/big/829433-1690836312.JPG?lm=1"},
        {"nombre": "Gonzalo Lujan", "fecha_nacimiento": datetime(2001, 4, 27), "imagen": "https://img.a.transfermarkt.technology/portrait/big/896536-1639413767.JPG?lm=1"},
        {"nombre": "Nicolas Otamendi", "fecha_nacimiento": datetime(1988, 2, 12), "imagen": "https://img.a.transfermarkt.technology/portrait/big/54781-1669835534.jpg?lm=1"},
        {"nombre": "Bruno Amione", "fecha_nacimiento": datetime(2002, 1, 3), "imagen": "https://img.a.transfermarkt.technology/portrait/big/644676-1661523950.jpg?lm=1"},
        {"nombre": "Ezequiel Fernández", "fecha_nacimiento": datetime(2002, 7, 25), "imagen": "https://img.a.transfermarkt.technology/portrait/big/664708-1574073310.jpg?lm=1"},
        {"nombre": "Santiago Hezze", "fecha_nacimiento": datetime(2001, 10, 22), "imagen": "https://img.a.transfermarkt.technology/portrait/big/742803-1720641605.png?lm=1"},
        {"nombre": "Cristian Medina", "fecha_nacimiento": datetime(2002, 6, 1), "imagen": "https://img.a.transfermarkt.technology/portrait/big/661133-1574082594.jpg?lm=1"},
        {"nombre": "Kevin Zenon", "fecha_nacimiento": datetime(2001, 7, 30), "imagen": "https://img.a.transfermarkt.technology/portrait/big/829966-1708005655.JPG?lm=1"},
        {"nombre": "Giuliano Simeone", "fecha_nacimiento": datetime(2002, 12, 18), "imagen": "https://img.a.transfermarkt.technology/portrait/big/742201-1644567976.jpg?lm=1"},
        {"nombre": "Luciano Gondou", "fecha_nacimiento": datetime(2001, 6, 22), "imagen": "https://img.a.transfermarkt.technology/portrait/big/851111-1720123777.png?lm=1"},
        {"nombre": "Claudio Echeverri", "fecha_nacimiento": datetime(2006, 1, 2), "imagen": "https://img.a.transfermarkt.technology/portrait/big/994536-1694001438.png?lm=1"},
        {"nombre": "Lucas Beltrán", "fecha_nacimiento": datetime(2001, 3, 29), "imagen": "https://img.a.transfermarkt.technology/portrait/big/628366-1692881138.jpg?lm=1"}
        ]

        # Crea los atletas
        for jugador in jugadores:
            atleta = Atleta(
                nombre=jugador["nombre"],
                pais="Argentina",
                fecha_nacimiento=jugador["fecha_nacimiento"],
                genero="Masculino",
                eventos=evento_futbol,
                imagen=jugador["imagen"]
            )
            db.session.add(atleta)

        db.session.add_all([atleta1, atleta2, atleta3])
        db.session.commit()

        print("Base de datos poblada con éxito!")

if __name__ == "__main__":
    seed_database()