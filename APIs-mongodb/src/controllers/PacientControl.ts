import { Request, Response } from "express"; // Importa o express
import { IPacient } from "../types/IPacient"; // Importa o tipo de dado IPacient
import Pacient from "../models/Pacient"; // Importa o modelo Paciente
import { request } from "http";

// Função para consulta - todos os pacientes retonados
const getPacients = async(req: Request, res: Response): Promise<void> => {
    try{ //Tratamento de exceção
        //Recupera os Pacientes
        const pacients: IPacient[] = await Pacient.find()
        res.status(200).json({pacients}) // Retorna os pacientes recuperados em formato json
    }
    catch(error){
        console.log(error)
        throw error // Lança exceção
    }
};

// Função para adicionar um paciente 
const addPacient = async(req: Request, res: Response): Promise<void> => {
    try{ //Tratamento de exceção
        // Recupera os valores do formulário informado pelo usuário
        const corpo = req.body as Pick <IPacient, "name" | "RG" | "age" | "weight" | "height">
        // Mostra objeto
        const pacient: IPacient = new Pacient({
            name: corpo.name,
            RG: corpo.RG,
            age: corpo.age,
            weight: corpo.weight,
            height: corpo.height
        })
        // Efetivamente inserir no banco de dados
        const newPacient = await pacient.save()
        res.status(200).json({newPacient})
    }
    catch(error){
        console.log(error)
        throw error // Lança exceção
    }
};

// Função para remover um paciente
const removePacient = async(req:Request, res: Response): Promise<void> =>{
    try{ //Tratamento de exceção
        // Tenta remover o cliente
        const pacientDelete = await Pacient.findByIdAndDelete(req.params.id);

        res.status(200).json({
            pacientDelete
        });
    }
    catch(error){
        console.log(error)
        throw error // Lança exceção
    }
};  

// Função para atualizar um paciente
const updatePacient = async(req:Request, res: Response): Promise<void> =>{
    try{ //Tratamento de exceção
        // Recebe os parâmetros da atualização: 1- ID do paciente e 2- Novos dados do paciente (Body)
        const {
            params: {id},
            body,
        } = req

        // Efetiva a atualização
        const pacientUpdate: IPacient | null = await Pacient.findByIdAndUpdate({_id: id}, body, {new: true})
        // Retorna o resultado
        res.status(200).json({
            pacientUpdate
        })
    }
    catch(error){
        console.log(error)
        throw error // Lança exceção
    }
};

// Exporta os métodos criados
export {getPacients, addPacient, updatePacient, removePacient}