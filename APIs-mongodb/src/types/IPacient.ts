// Explorar MongoDB
import {Document} from 'mongoose';

// Criando uma classe que representa o documento do Paciente no MongoDB
export interface IPacient extends Document {
    // Variáveis da interface
    name: string
    RG: string
    age: number
    weight: number
    height: number
};

