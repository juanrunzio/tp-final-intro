# tp-final-intro

### GRUPO MATEANDO - ALUMNOS

Juan Bautista Oviedo Runzio - 110164
Rodrigo Ladaga - 100188

### MacOS

```bash
brew services list
brew services start postgresql
psql postgres
```

```sql
CREATE DATABASE olimpiadas_db;
CREATE USER miusuario WITH PASSWORD 'micontraseña';
GRANT ALL PRIVILEGES ON DATABASE olimpiadas_db TO miusuario;
\c olimpiadas_db
GRANT ALL PRIVILEGES ON SCHEMA public TO miusuario;
\q
```

```bash
source venv/bin/activate
pip install -r requirements.txt
#En arch(hay que forzarlo): `pip install -r requirements.txt --break-system-packages`
export FLASK_APP=app.py
#Opcional -> Modo de depuracion para ver errores detallados y tener recarga automática:
export FLASK_ENV=development

flask run --debug
```

### Testing Bot
