function diaDaSemana() {
    const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    const hoje = new Date();
    return diasDaSemana[hoje.getDay()];
}

function éDiaÚtil(dia) {
    return ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'].includes(dia);
}

function construirCorpoEmail() {
    const novosVeiculos = "Confira nossos novos veículos chegando esta semana!";
    const maisVendidos = "Nosso top 3 carros mais vendidos de Manaus City!";
    const condicoesAquisicao = "Se piscar, perde a promo!!!";
    
    return `${novosVeiculos}\n${maisVendidos}\n${condicoesAquisicao}`;
}

function enviarEmailsParaClientes(listaClientes, carrosMaisVendidos) {
    const hoje = diaDaSemana();
    
    if (hoje !== 'Segunda-feira') {
        console.log("Hoje não é dia de enviar e-mails.");
        return;
    }
    
    console.log(`Enviando e-mails para os clientes na ${hoje}:`);
    listaClientes.forEach(cliente => {
        if (cliente.receberEmailsMarketing) {
            console.log(`- Enviando e-mail para ${cliente.email}`);
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