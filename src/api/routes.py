"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# Esto lo traje de la documentación y lo modifico para que se adapte a mi modelo
# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # Consulta
    user_query = User.query.filter_by(email=email).first()

    if user_query == None:
        return jsonify({"msg": "Email not registered"}), 404

    if email != user_query.email or password != user_query.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

# Rutas protegidas, con endpoint base traído de la documentación
# Esto expulsará las solicitudes sin un JWT válido
@api.route("/private", methods=["GET"])
@jwt_required() #Esto es lo que verifica la autenticación

def private():
    # Acceder a la identidad del usuario actual con get_jwt_identity
    current_user = get_jwt_identity()

    return jsonify(logged_in_as=current_user), 200
