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
    }
}

const bancoDeDados = new BancoDeDadosHospedes()

try {
    const idHospede = await bancoDeDados.inserirHospede("João Graciotim", 22)
    console.log(idHospede)
} catch (err) {
    console.error("Erro ao inserir hospede:", err.message)
}


export default BancoDeDadosHospedes
