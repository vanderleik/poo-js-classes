import { CarroComPlaca } from "./carro-com-placa.mjs";
import { Locadora } from "./locadora.mjs";

var locadora = new Locadora();
locadora.adicionaCarro(new CarroComPlaca("ABC-1234"));
locadora.adicionaCarro(new CarroComPlaca("DEF-5678"));
locadora.consultaCarros();

locadora.abasteceCarro(0, 30);
locadora.consultaCarros();

locadora.abasteceCarro(1, 30);
locadora.abasteceCarro(0, 30);
locadora.consultaCarros();
