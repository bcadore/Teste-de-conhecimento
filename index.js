const perguntas = [
  {
    pergunta:
      "Qual é a maneira correta de acessar o terceiro elemento de um array chamado myArray em JavaScript?",
    respostas: ["myArray[2]", "myArray.get(2)", "myArray[3]"],
    correta: 2,
  },
  {
    pergunta:
      "Qual das opções seguintes não é considerado um tipo de dado primitivo em JavaScript?",
    respostas: ["String", "Object", "Number"],
    correta: 1,
  },
  {
    pergunta:
      "Qual a maneira correta de verificar se duas variáveis são exatamente iguais em valor e tipo?",
    respostas: ["==", "===", "!="],
    correta: 1,
  },
  {
    pergunta:
      "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: ["console.print()", "print()", "console.log()"],
    correta: 2,
  },
  {
    pergunta: "Qual é o operador lógico 'OU' em JavaScript?",
    respostas: ["&&", "||", "!"],
    correta: 1,
  },
  {
    pergunta:
      "Qual função é usada para converter uma string em um número em JavaScript?",
    respostas: ["toInt()", "parseInteger()", "parseInt()"],
    correta: 2,
  },
  {
    pergunta:
      "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: ["push()", "add()", "append()"],
    correta: 0,
  },
  {
    pergunta: "Qual é a saída do seguinte código?\n console.log(typeof([]));",
    respostas: ["array", "object", "undefined"],
    correta: 1,
  },
  {
    pergunta:
      "Qual operador é usado para verificar se um valor é maior ou igual a outro em JavaScript?",
    respostas: [">=", "<=", "=="],
    correta: 0,
  },
  {
    pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
    respostas: ["// Comentário", "<!-- Comentário -->", "/* Comentário */"],
    correta: 0,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };
    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  quiz.appendChild(quizItem);
}
