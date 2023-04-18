export class Carro {
    #_tanque
    #_capacidadeDOTanque
    constructor(valor) {
        this.#_tanque = 0;
        this.#_capacidadeDOTanque = valor;
    }

    get tanque() {
        return this.#_tanque;
    }

    get capacidade() {
        return this.#_capacidadeDOTanque;
    }

    set tanque(quantidade) {
        if (quantidade > 0) {
            if (quantidade + this.#_tanque > this.#_capacidadeDOTanque) {
                this.#_tanque = this.#_capacidadeDOTanque;
            } else {
                this.#_tanque += quantidade;
            }
        }
    }
}
