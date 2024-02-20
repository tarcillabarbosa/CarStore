const enviarEmail = require('./enviarEmail.js')

function diaDaSemana() {
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const hoje = new Date();
    return diasDaSemana[hoje.getDay()];
}

function éDiaÚtil(dia) {
    return dia === 'Segunda-feira';
}

function construirCorpoEmail() {
    const novosVeiculos = "Confira nossos novos veículos chegando esta semana!";
    const maisVendidos = "Nosso top 3 carros mais vendidos de Manaus City!";
    const condicoesAquisicao = "Se piscar, perde a promo!!!";
    
    return `${novosVeiculos}\n${maisVendidos}\n${condicoesAquisicao}`;
}

async function enviarEmailsParaClientes(listaClientes, carrosMaisVendidos) {
    const hoje = diaDaSemana();
    
    if (!éDiaÚtil(hoje)) {
        console.log("Hoje não é segunda-feira. Não há e-mails para enviar.");
        return;
    }
    
    console.log(`Enviando e-mails para os clientes na ${hoje}:`);
    listaClientes.forEach(async cliente => {
        if (cliente.receberEmailsMarketing) {
            console.log(`- Enviando e-mail para ${cliente.email}`);
            const assunto = 'Novidades da semana';
            const corpo = construirCorpoEmail();
            await enviarEmail(cliente.email, assunto, corpo);
        }
    });
    
    console.log(`Os carros mais vendidos são: ${carrosMaisVendidos.join(', ')}`);
}

const listaClientes = [
    { email: 'moglilobo@selva.com', receberEmailsMarketing: true },
    { email: 'belaadormecida@soneca.com', receberEmailsMarketing: false },
    { email: 'cruella@dalmata.com', receberEmailsMarketing: true },
];

const carrosMaisVendidos = ["Máquina Mistério", "Batmóvel", "DeLorean"];

enviarEmailsParaClientes(listaClientes, carrosMaisVendidos);
