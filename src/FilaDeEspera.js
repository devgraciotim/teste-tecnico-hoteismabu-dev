/**
 * Classe que gerencia a fila de espera do hotel.
 * Os candidatos devem implementar a lógica de gerenciamento da fila.
 */

import Hospede from "./Hospede.js"

class FilaDeEspera {
    constructor() {
        // TODO: Implementar o construtor para inicializar a fila de hóspedes (array vazio)
        this.fila = []
    }

    /**
     * Adiciona um hóspede à fila de espera.
     * @param {Hospede} hospede - O hóspede a ser adicionado.
     */
    adicionar(hospede) {
        // TODO: Implementar a lógica para adicionar o hóspede à fila
        if(!(hospede instanceof Hospede)) {
            throw new Error("A entrada deve ser um hospede")
        }

        this.fila.push(hospede)
    }

    /**
     * Remove e retorna o primeiro hóspede da fila.
     * @returns {Hospede|string} - O hóspede removido ou uma mensagem se a fila estiver vazia.
     */
    atender() {
        // TODO: Implementar a lógica para remover e retornar o primeiro hóspede da fila
        // Se a fila estiver vazia, retornar a mensagem: 'Nenhum hóspede na fila de espera'

        if(this.estaVazia()) {
            return "Nenhum hóspede na fila de espera"
        } else {
            let primeiroDaFila = this.fila.shift()
            return primeiroDaFila
        }
    }

    /**
     * Retorna o próximo hóspede da fila (sem removê-lo).
     * @returns {Hospede|string} - O próximo hóspede ou uma mensagem se a fila estiver vazia.
     */
    proximo() {
        // TODO: Implementar a lógica para retornar o próximo hóspede sem removê-lo da fila
        // Se a fila estiver vazia, retornar a mensagem: 'Nenhum hóspede na fila'

        if(this.estaVazia()) {
            return "Nenhum hóspede na fila"
        } else {
            return this.fila[0]
        }
    }

    /**
     * Verifica se a fila está vazia.
     * @returns {boolean} - `true` se a fila estiver vazia, `false` caso contrário.
     */
    estaVazia() {
        // TODO: Implementar a lógica para verificar se a fila está vazia
        if(this.fila.length === 0) {
            return true
        } else {
            return false
        }
    }
}

const fila = new FilaDeEspera()

fila.adicionar("teste")
console.log(fila.estaVazia())
console.log(fila.atender())
console.log(fila.estaVazia())

export default FilaDeEspera;
