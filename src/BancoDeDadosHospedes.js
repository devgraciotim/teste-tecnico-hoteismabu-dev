import sqlite from 'sqlite3';
/**
 * Classe que interage com o banco de dados para gerenciar hóspedes.
 * Os candidatos devem implementar a lógica de persistência de dados.
 */
class BancoDeDadosHospedes {
    constructor() {
        // TODO: Implementar o construtor para inicializar a conexão com o banco de dados (SQLite)
        this.db = new sqlite.Database("bancodedados.db", async (err) => {
            if (err) {
                console.error("Erro ao conectar com o banco:", err.message)
            } else {
                console.log("Conectado com o banco")
                await this.criarTabelas()
            }
        })
    }

    async criarTabelas() {
        const criarTabelaHospedes = "CREATE TABLE IF NOT EXISTS hospedes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, quarto INTEGER NOT NULL)"

        this.db.run(criarTabelaHospedes, (err) => {
            if(err) {
                console.error("Erro ao executar SQL:", err.message)
            } else {
                console.log("Tabela hospedes criada")
            }
        })
    }

    /**
     * Insere um novo hóspede no banco de dados.
     * @param {string} nome - Nome do hóspede.
     * @param {number} quarto - Número do quarto do hóspede.
     * @returns {Promise<number>} - O ID do hóspede inserido.
     */
    inserirHospede(nome, quarto) {
        // TODO: Implementar a lógica para inserir um hóspede no banco de dados
        // Retornar uma Promise que resolve com o ID do hóspede inserido

        return new Promise((resolve, reject) => {

            if(typeof nome !== "string" || nome.trim() === "") {
                reject(new Error("Nome deve ser uma String não vazia"))
            } 

            if(!Number.isInteger(quarto) || quarto <= 0) {
                reject(new Error("Número do quarto deve ser inteiro e maior que zero"))
            }

            const queryInsereHospede = "INSERT INTO hospedes (nome, quarto) VALUES (?, ?)"

            this.db.run(queryInsereHospede, [nome, quarto], function(err) {
                if(err) {
                    reject(err)
                } else {
                    resolve(this.lastID)
                }
            })
        })
    }

    /**
     * Busca um hóspede pelo ID.
     * @param {number} id - ID do hóspede.
     * @returns {Promise<Hospede>} - O hóspede encontrado.
     */
    buscarHospede(id) {
        // TODO: Implementar a lógica para buscar um hóspede no banco de dados pelo ID
        // Retornar uma Promise que resolve com um objeto Hospede ou null se não encontrado

        return new Promise((resolve, reject) => {

            if(!Number.isInteger(id) || id <= 0) {
                reject(new Error("id deve ser um número inteiro e maior que zero"))
            }

            const queryBuscaHospedeId = "SELECT * FROM hospedes WHERE id = ?"

            this.db.get(queryBuscaHospedeId, [id], function(err, row) {
                if(err) {
                    reject(err)
                } else {
                    resolve(row || null)
                }
            })
        })
    }

    /**
     * Atualiza o número do quarto de um hóspede.
     * @param {number} id - ID do hóspede.
     * @param {number} novoQuarto - Novo número do quarto.
     * @returns {Promise<void>}
     */
    atualizarQuarto(id, novoQuarto) {
        // TODO: Implementar a lógica para atualizar o número do quarto de um hóspede
        // Retornar uma Promise que resolve quando a operação estiver completa

        return new Promise((resolve, reject) => {

            if(!Number.isInteger(id) || id <= 0) {
                reject(new Error("id deve ser um número inteiro e maior que zero"))
            }

            if(!Number.isInteger(novoQuarto) || novoQuarto <= 0) {
                reject(new Error("Número do novo quarto deve ser um inteiro maior que zero"))
            }

            const queryAtualizaQuarto = "UPDATE hospedes SET quarto = ? WHERE id = ?"

            this.db.run(queryAtualizaQuarto, [novoQuarto, id], function(err) {
                if(err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}

const BancoDeDados = new BancoDeDadosHospedes()

const idHospede = await BancoDeDados.inserirHospede("João Graciotim", -299) 
console.log(idHospede)

const hospede = await BancoDeDados.buscarHospede(idHospede)
console.log(hospede)

const atualizarHospede = await BancoDeDados.atualizarQuarto(idHospede, 200)
console.log(atualizarHospede)

const hospedeatt = await BancoDeDados.buscarHospede(idHospede)
console.log(hospedeatt)

export default BancoDeDadosHospedes
