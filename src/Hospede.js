/**
 * Classe que representa um hóspede.
 * Os candidatos devem implementar essa classe para gerenciar os dados do hóspede.
 */
class Hospede {
    /**
     * @param {string} nome - Nome do hóspede.
     * @param {string} email - Email do hóspede.
     */

    constructor(nome, email) {
        // TODO: Implementar o construtor para inicializar as propriedades nome e email
        this.nome = nome
        this.email = email
    }

    /**
     * Retorna o nome do hóspede.
     * @returns {string}
     */
    getNome() {
        // TODO: Implementar o método para retornar o nome do hóspede
        return this.nome
    }

    /**
     * Retorna o email do hóspede.
     * @returns {string}
     */
    getEmail() {
        // TODO: Implementar o método para retornar o email do hóspede
        return this.email
    }
}

export default Hospede;


