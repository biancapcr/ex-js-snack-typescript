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

// =========================
// SNACK 3
// =========================

// union type per il livello di esperienza del developer
// sono ammessi solo questi tre valori
export type LivelloEsperienza = "Junior" | "Mid" | "Senior";

// ruolo specifico: developer
// estende dipendente aggiungendo campi richiesti dallo snack
export type Developer = Dipendente & {
  // livello esperienza con scelte limitate
  livelloEsperienza: LivelloEsperienza;

  // array di linguaggi usati in azienda
  // opzionale = può mancare del tutto
  linguaggi?: string[];

  // array di certificazioni
  // può essere vuoto ma la proprietà esiste sempre
  certificazioni: string[];
};

// ruolo specifico: project manager
export type ProjectManager = Dipendente & {
  // numero membri team gestito
  // può essere null se non ha ancora un team assegnato
  teamSize: number | null;

  // budget annuale gestito
  // opzionale = può mancare del tutto
  budgetGestito?: number;

  // array stakeholder principali
  // può essere vuoto ma la proprietà esiste sempre
  stakeholderPrincipali: string[];
};

// =========================
// bonus: team
// =========================

export type Team = {
  // nome del team
  nome: string;

  // progetto attuale
  // può essere null se in attesa di assegnazione
  progettoAttuale: string | null;

  // budget assegnato: sempre presente
  budget: number;

  // tuple:
  // - primo elemento: project manager
  // - poi: uno o più developer (almeno 1)
  membri: [ProjectManager, Developer, ...Developer[]];
};
