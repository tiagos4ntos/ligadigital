const animais = require('./objanimaispai')


let onca = new animais("Chordata", "Mammalia", "Carnívoro", "Felídeos", "Américas", 90);
let capivara = new animais("Chordata", "Mammalia", "Rodentia", "Hydrochoeridae", 30);


capivara.inicio(30);
capivara.sentirSede();
capivara.deslocamento(35);