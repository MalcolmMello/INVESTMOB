function calculo() {
    const valor_inicial = Number(document.getElementById("inicial").value);
    const valor_mensal = Number(document.getElementById("mensal").value);
    const valor_juros = Number(document.getElementById("juros").value);
    const valor_anos = Number(document.getElementById("anos").value);

    let valor_total = valor_inicial;
    let juros_mensais = (valor_juros/12) / 100;
    let totalInvestido = valor_inicial + (valor_mensal * valor_anos * 12);

    for(let i = 0; i < valor_anos * 12; i++) {
        let juros_mes = calc*juros_mensais;
        valor_total += juros_mes;
        valor_total += valor_mensal;
    }

    let juros = valor_total - totalInvestido;

    document.getElementById("total").innerText = `R$ ${valor_total.toFixed(2).replace(".",",")}`;
    document.getElementById("totalInvestido").innerText = `R$ ${totalInvestido.toFixed(2).replace(".",",")}`;
    document.getElementById("totalJuros").innerText = `R$ ${juros.toFixed(2).replace(".",",")}`;
};

function limpar() {
    document.getElementById("inicial").value = 0;
    document.getElementById("mensal").value = 0;
    document.getElementById("juros").value = 0;
    document.getElementById("anos").value = 0;
    document.getElementById("total").innerText = 0;
    document.getElementById("totalInvestido").innerText = 0;
    document.getElementById("totalJuros").innerText = 0;
}