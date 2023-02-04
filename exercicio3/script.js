// Parte 1
// let a = 5 > 20 && 5 < 2;
// let b = 5 === 5 || 5 ===5;
// let c = !20 > 50;
// let d = !20 > 50 || 50 > 60;
// console.log(`A: ${a}, B: ${b}, C: ${c}, D: ${d}`)

// Parte 2
let salarioFixo = 2000.00;
let auxilioCreche = 45.50;
console.log(`1) - O salário mais auxílio creche: R${auxilioCreche * 2 + salarioFixo.toFixed(2)} reais.`);

let comissaoJan = 5784.50 * (10 / 100);
console.log(`2) - Silva receberá de comissão em janeiro R$${comissaoJan.toFixed(2)} reais.`);

let salMaisComissaoJan = 5784.50 + comissaoJan;
let descInss = salMaisComissaoJan * (5 / 100);
console.log(`3) - Silva será descontado em janeiro pelo INSS o valor de R$${descInss.toFixed(2)} reais.`)

let totSalMeses = 5784.50 + 3418.00 + 4124.10 + 1874.00 + 7000.00 + 9450.00
let comiTolSalMeses = totSalMeses * (10 / 100);
let descTolSalMeses = (totSalMeses + comiTolSalMeses) * (5 / 100);
console.log(`Cálculo do salário de todos os meses (Jan a Jun) com acréscimo e descontos: R$${totSalMeses + comiTolSalMeses - descTolSalMeses.toFixed(2)} reais.`);

let mediaSalario = (totSalMeses + comiTolSalMeses + auxilioCreche * 2) / 6;
console.log(`Total dos meses (Jan a Jun): R$${totSalMeses} reais.
Comissão: R$${comiTolSalMeses} reais.
Auxilio: R$${auxilioCreche * 2} reais.

A média do salário em seis meses (Jan a Jun) levando em consideração as comissões e auxílio R$${mediaSalario.toFixed(2)} reais.`);