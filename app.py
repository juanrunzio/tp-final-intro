from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from models import db, Atleta, Evento
from datetime import datetime

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://juan:mateando@localhost/olimpiadas_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/atletas', methods=['GET', 'POST'])
def atletas():
    if request.method == 'POST':
        data = request.json
        nuevo_atleta = Atleta(
            nombre=data['nombre'],
            pais=data['pais'],
            fecha_nacimiento=datetime.strptime(
                data['fecha_nacimiento'], '%Y-%m-%d'),
            genero=data['genero'],
            evento_id=data['evento_id']
        )
        db.session.add(nuevo_atleta)
        db.session.commit()
        return jsonify({'message': 'Atleta creado exitosamente'}), 201

    atletas = Atleta.query.all()
    eventos = Evento.query.all()
    return render_template('atletas.html', atletas=atletas, eventos=eventos)


@app.route('/atletas/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def atleta(id):
    atleta = Atleta.query.get_or_404(id)

    if request.method == 'GET':
        return jsonify({
            'id': atleta.id,
            'nombre': atleta.nombre,
            'pais': atleta.pais,
            'fecha_nacimiento': atleta.fecha_nacimiento.strftime('%Y-%m-%d'),
            'genero': atleta.genero
        })

    elif request.method == 'PUT':
        data = request.json
        atleta.nombre = data['nombre']
        atleta.pais = data['pais']
        atleta.fecha_nacimiento = datetime.strptime(
            data['fecha_nacimiento'], '%Y-%m-%d')
        atleta.genero = data['genero']
        db.session.commit()
        return jsonify({'message': 'Atleta actualizado exitosamente'})

    elif request.method == 'DELETE':
        db.session.delete(atleta)
        db.session.commit()
        return jsonify({'message': 'Atleta eliminado exitosamente'})


@app.route('/eventos', methods=['GET', 'POST'])
def eventos():
    if request.method == 'POST':
        data = request.json
        nuevo_evento = Evento(
            nombre=data['nombre'],
            deporte=data['deporte'],
            fecha=datetime.strptime(data['fecha'], '%Y-%m-%d'),
            lugar=data['lugar'],
        )
        db.session.add(nuevo_evento)
        db.session.commit()
        return jsonify({'message': 'Evento creado exitosamente'}), 201

    eventos = Evento.query.all()
    return render_template('eventos.html', eventos=eventos)


@app.route('/eventos/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def evento(id):
    evento = Evento.query.get_or_404(id)

    if request.method == 'GET':
        return jsonify({
            'id': evento.id,
            'nombre': evento.nombre,
            'deporte': evento.deporte,
            'fecha': evento.fecha.strftime('%Y-%m-%d'),
            'lugar': evento.lugar
        })

    elif request.method == 'PUT':
        data = request.json
        evento.nombre = data['nombre'],
        evento.deporte = data['deporte'],
        evento.fecha = datetime.strptime(data['fecha'], '%Y-%m-%d'),
        evento.lugar = data['lugar'],
        db.session.commit()
        return jsonify({'message': 'Evento actualizado exitosamente'})

    elif request.method == 'DELETE':
        db.session.delete(evento)
        db.session.commit()
        return jsonify({'message': 'Evento eliminado exitosamente'}), 200
    
@app.route('/paris-2024')
def pagina_oficial():
    atletas = Atleta.query.all()
    eventos = Evento.query.all()
    return render_template('paris-2024.html', atletas=atletas, eventos=eventos)


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
