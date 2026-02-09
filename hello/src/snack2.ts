// tipo limitato per il sesso del dipendente
// sono ammessi solo i valori "m" o "f"
export type Sesso = "m" | "f";

// bonus: tipo limitato per il contratto
// sono ammessi solo tre valori specifici
export type Contratto = "indeterminato" | "determinato" | "freelance";

// type alias che rappresenta un dipendente
export type Dipendente = {
  // nome del dipendente
  nome: string;

  // cognome del dipendente
  cognome: string;

  // anno di nascita
  annoNascita: number;

  // sesso
  sesso: Sesso;

  // array di anni di servizio
  anniDiServizio: number[];

  // bonus: email aziendale
  // readonly impedisce la modifica dopo l'assegnazione iniziale
  readonly emailAziendale: string;

  // bonus: tipo di contratto
  // vincolato al type Contratto
  contratto: Contratto;
};
