/**
 * Classe que gerencia a fila de espera do hotel.
 * Os candidatos devem implementar a lógica de gerenciamento da fila.
 */

class FilaDeEspera {
    constructor() {
        // TODO: Implementar o construtor para inicializar a fila de hóspedes (array vazio)
    }

    /**
     * Adiciona um hóspede à fila de espera.
     * @param {Hospede} hospede - O hóspede a ser adicionado.
     */
    adicionar(hospede) {
        // TODO: Implementar a lógica para adicionar o hóspede à fila
    }

    /**
     * Remove e retorna o primeiro hóspede da fila.
     * @returns {Hospede|string} - O hóspede removido ou uma mensagem se a fila estiver vazia.
     */
    atender() {
        // TODO: Implementar a lógica para remover e retornar o primeiro hóspede da fila
        // Se a fila estiver vazia, retornar a mensagem: 'Nenhum hóspede na fila de espera'
    }

    /**
     * Retorna o próximo hóspede da fila (sem removê-lo).
     * @returns {Hospede|string} - O próximo hóspede ou uma mensagem se a fila estiver vazia.
     */
    proximo() {
        // TODO: Implementar a lógica para retornar o próximo hóspede sem removê-lo da fila
        // Se a fila estiver vazia, retornar a mensagem: 'Nenhum hóspede na fila'
    }

    /**
     * Verifica se a fila está vazia.
     * @returns {boolean} - `true` se a fila estiver vazia, `false` caso contrário.
     */
    estaVazia() {
        // TODO: Implementar a lógica para verificar se a fila está vazia
    }
}

export default FilaDeEspera;
