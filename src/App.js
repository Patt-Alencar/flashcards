import "./index.css";
//import perguntas from "./perguntas";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const perguntas = [
  {
    id: 101,
    pergunta: "Cite alguns hábitos importantes para cuidados com o corpo",
    resposta:
      "tomar banho diariamente, ter uma alimentação saudável, praticar atividades físicas",
  },
  {
    id: 102,
    pergunta: "O que são células?",
    resposta: "São os menores componentes do corpo humano",
  },
  {
    id: 103,
    pergunta: "Como o organismo cresce?",
    resposta: "Pelo aumento no número de células",
  },
  {
    id: 104,
    pergunta: "O que é um neurônio?",
    resposta: "É uma célula encontrada no cérebro",
  },
  {
    id: 105,
    pergunta: "O que são tecidos?",
    resposta:
      "São conjuntos de células semelhantes que desempenham a mesma função no organismo.",
  },
  {
    id: 106,
    pergunta: "Quais são os principais tipos de tecidos?",
    resposta: "Epitelial, conjuntivo, muscular e nervoso",
  },
  {
    id: 107,
    pergunta: "Explique o que é o tecido cpnjuntivo",
    resposta:
      "Ele forma partes bem diferentes do corpo como sangue, ossos e gordura corporal.",
  },
  {
    id: 108,
    pergunta: "O que são os órgãos?",
    resposta: "São estruturas formadas por dois ou mais tipos de tecidos",
  },
  {
    id: 109,
    pergunta: "Cite o nome de 3 órgãos",
    resposta: "coração, cérebro, pulmões, rins",
  },
  {
    id: 110,
    pergunta: "O que é o organismo?",
    resposta:
      "O organismo é formado pela união de todos os sistemas que realizam as funções necessárias a nossa sobrevivência.",
  },
  {
    id: 111,
    pergunta: "Cite o nome de três sistemas",
    resposta:
      "Esquelético, respiratório, nervoso, muscular, digestório, cardiovascular, nervoso",
  },
  {
    id: 112,
    pergunta:
      "São conjuntos de órgãos que estão relacionados a uma função em comum:",
    resposta: "Sistemas",
  },
  {
    id: 113,
    pergunta:
      "A pele e as paredes internas do intetsino delgado são formados pelo tecido",
    resposta: "Epitelial",
  },
  {
    id: 114,
    pergunta: "O cérebro é formado pelo tecido: ",
    resposta: "Nervoso",
  },
  {
    id: 115,
    pergunta: "Quais são os 5 níveis de organização do corpo humano?",
    resposta: "Célula, tecido, órgão, sistema e organismo.",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {perguntas.map((pergunta) => (
        <div
          key={pergunta.id}
          onClick={() => handleClick(pergunta.id)}
          className={pergunta.id === selectedId ? "selected" : ""}
        >
          <p>
            {pergunta.id === selectedId ? pergunta.resposta : pergunta.pergunta}
          </p>
        </div>
      ))}
    </div>
  );
}
