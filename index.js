const {consultarCep} = require("correios-brasil");
const cep = "50810-340";
consultarCep(cep).then((response) => {
    console.log(response);
});

