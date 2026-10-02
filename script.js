// 1. Função pura de cálculo (o teu código)
function calcular(a, b, operador) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (isNaN(num1) || isNaN(num2)) {
    return "Erro: valores inválidos";
  }

  switch (operador) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': 
      return num2 !== 0 ? 
      num1 / num2 : 
      "Erro: divisão por zero";
    default: 
      return "Operador inválido";
  }
}

// 2. Função de conexão com o HTML (pega valores dos inputs e exibe o resultado)
function executarCalculo(operador) {
  // Pega o valor digitado no input com id="num1"
  const valorA = document.getElementById('num1').value;
  
  // Pega o valor digitado no input com id="num2"
  const valorB = document.getElementById('num2').value;
  
  // Chama a tua função 'calcular' passando os dois valores e o operador
  const resultado = calcular(valorA, valorB, operador);
  
  // Atualiza o texto do elemento HTML com id="resultado"
  document.getElementById('resultado').innerText = "Resultado: " + resultado;
}