import { Request, Response } from "express"; // Importa o express
import {pool} from '../database'; // Importar a classe Pool do database
import { QueryResult } from "pg";

// Função para consulta - todos os pacientes retonados
// Exemplo de uma função getPaciente que manipula a resposta
export const getPaciente = async (req: Request, res: Response) => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM PACIENTE');
        res.status(200).json(response); // Envia a resposta com o paciente
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar paciente' });
    };
};

export const addPaciente = async(req:Request, res:Response) => {
    try {
        let {nome, rg, peso, idade, altura} = req.body
        let response: QueryResult = await  pool.query('INSERT INTO PACIENTE (NOME, RG, PESO, IDADE, ALTURA) VALUES ($1, $2, $3, $4, $5)',
            [nome, rg, peso, idade, altura]
        );
        res.status(200).json({
            'menssagem:': 'Paciente inserido com sucesso'
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro' });
    };
};

export const removePaciente = async(req:Request, res:Response) => {
    try {
        // Recupera o ID informado pelo usuário
        let id = parseInt(req.params.id)
        await pool.query('DELETE FROM PACIENTE WHERE ID = $1', [id])
        res.status(200).json({
            'menssagem:': 'Paciente removido com sucesso'
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro' });
    };
};

export const updatePaciente = async(req:Request, res:Response) => {
    try {
        //Identifica o paciente
        let rg = parseInt(req.params.rg)
        //Atualiza os dados
        let {nome, peso, idade, altura} = req.body
        await pool.query('UPDATE PACIENTE SET NOME = $1, PESO = $2, IDADE = $3, ALTURA = $4 WHERE RG = $5',
            [nome, peso, idade, altura, rg]
        );
        res.status(200).json({
            'menssagem:': 'Paciente atualizado com sucesso'
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro' });
    };
};