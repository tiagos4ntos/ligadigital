const animais = require('./objanimaispai')


let onca = new animais("Onça Pintada", "Chordata", "Mammalia", "Carnívoro", "Felídeos", "Américas", 60);
let capivara = new animais("Capivara", "Chordata", "Mammalia", "Rodentia", "Hydrochoeridae", "Américas", 30);


capivara.inicio(60);
capivara.sentirSede();
capivara.deslocamento(240);
capivara.beberAgua();
onca.inicio(480);
onca.sentirFome();
onca.deslocamento(capivara.posicao);
onca.fim();
