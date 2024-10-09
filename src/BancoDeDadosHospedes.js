/**
 * Classe que interage com o banco de dados para gerenciar hóspedes.
 * Os candidatos devem implementar a lógica de persistência de dados.
 */
class BancoDeDadosHospedes {
    constructor() {
        // TODO: Implementar o construtor para inicializar a conexão com o banco de dados (SQLite)
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

export default BancoDeDadosHospedes
