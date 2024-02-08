const perguntas = [
    {
      pergunta:
        "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
      respostas: ["let", "variable", "var"],
      correta: 0,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Document Oriented Model",
      ],
      correta: 0,
    },
    {
      pergunta:
        "Como se chama a estrutura de controle de fluxo que permite a execução condicional de blocos de código?",
      respostas: ["if-else", "for-loop", "switch-case"],
      correta: 0,
    },
    {
      pergunta:
        "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: ["push()", "append()", "insert()"],
      correta: 1,
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevação de variáveis e funções",
        "Animação de elementos",
        "Manipulação de eventos",
      ],
      correta: 0,
    },
    {
      pergunta:
        "Qual símbolo é utilizado para representar uma igualdade estrita em JavaScript?",
      respostas: ["==", "===", "!="],
      correta: 1,
    },
    {
      pergunta:
        "Qual função é utilizada para imprimir mensagens no console em JavaScript?",
      respostas: ["display()", "print()", "console.log()"],
      correta: 2,
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Java Script Object Notation",
        "JavaScript Object Network",
        "Java Serialized Object Notation",
      ],
      correta: 0,
    },
    {
      pergunta:
        "Qual evento é acionado quando um usuário clica em um elemento HTML?",
      respostas: ["onHover", "onClick", "onSubmit"],
      correta: 1,
    },
    {
      pergunta:
        "Qual método é utilizado para converter uma string em um número inteiro em JavaScript?",
      respostas: ["parseInt()", "toFloat()", "toInteger()"],
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
  