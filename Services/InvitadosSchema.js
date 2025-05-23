import mongoose from 'mongoose';

// Definir el esquema de usuario
const invitadosSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  asistencia: { type: String, required: true },
  cancionSugerida: { type: String , required: true},
  intolerancias: { type: String , required: true},
  mensaje: {type: String, required: false}
},{
  versionKey: false
});

// Crear el modelo de usuario
const Invitado = mongoose.model('invitados', invitadosSchema, 'invitados');

// Exportar el modelo de usuario
export default Invitado;
