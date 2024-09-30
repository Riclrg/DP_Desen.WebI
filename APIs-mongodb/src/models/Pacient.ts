import { IPacient } from "../types/IPacient"; // Importar a interface criada IPacient
import { model, Schema, Document } from "mongoose"; // Importa as classes do MongoDB - mongoose

// Cria um esquema do mongoose para o paciente
const pacientSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    RG: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    }
});

// Vamos exportar o modelo
export default model<IPacient & Document>('Pacient', pacientSchema);