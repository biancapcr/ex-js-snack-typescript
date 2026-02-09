import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { stampaDato } from "./snack1.ts";
import type { Dipendente } from "./snack2";
import type { Developer, ProjectManager, Team } from "./snack2";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
// =========================
// test snack 1
// =========================
stampaDato("ciao");
stampaDato(10);
stampaDato(true);
stampaDato(false);
stampaDato(null);
stampaDato([1, 2, 3]);
stampaDato({ a: 1 });

stampaDato(
  new Promise((resolve) => {
    setTimeout(() => resolve("risolto!"), 1000);
  }),
);
// =========================
// test snack 2
// =========================
const dip: Dipendente = {
  nome: "Ambrogio",
  cognome: "P.",
  annoNascita: 1999,
  sesso: "m",
  anniDiServizio: [2020, 2021, 2023],
  emailAziendale: "ambrogio@azienda.it",
  contratto: "indeterminato",
};

console.log(dip);
// =========================
// test snack 3
// =========================

const dev1: Developer = {
  nome: "Luca",
  cognome: "Rossi",
  annoNascita: 1997,
  sesso: "m",
  anniDiServizio: [2024],
  emailAziendale: "luca.rossi@azienda.it",
  contratto: "determinato",
  livelloEsperienza: "Junior",
  // linguaggi opzionale
  certificazioni: [], // può essere vuoto
};

const dev2: Developer = {
  nome: "Sara",
  cognome: "Bianchi",
  annoNascita: 1992,
  sesso: "f",
  anniDiServizio: [2020, 2021, 2022, 2023, 2024],
  emailAziendale: "sara.bianchi@azienda.it",
  contratto: "indeterminato",
  livelloEsperienza: "Senior",
  linguaggi: ["TypeScript", "React", "Node.js"],
  certificazioni: ["AWS CCP", "Scrum Developer"],
};

const pm1: ProjectManager = {
  nome: "Marco",
  cognome: "Verdi",
  annoNascita: 1988,
  sesso: "m",
  anniDiServizio: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
  emailAziendale: "marco.verdi@azienda.it",
  contratto: "indeterminato",
  teamSize: null, // può essere null
  // budgetGestito opzionale
  stakeholderPrincipali: [], // può essere vuoto
};

const teamA: Team = {
  nome: "Team Phoenix",
  progettoAttuale: "CRM 2.0",
  budget: 250000,
  membri: [pm1, dev1, dev2], // pm + almeno 1 dev
};

console.log(dev1, dev2, pm1, teamA);

// test: deve dare errore se => team senza developer
// const teamErr: Team = {
//   nome: "Team Vuoto",
//   progettoAttuale: null,
//   budget: 10000,
//   membri: [pm1], // manca almeno un developer
// }
