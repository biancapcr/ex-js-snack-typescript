// funzione che riceve un dato di tipo unknown
// unknown simula un dato generico che arriva da un'api
export function stampaDato(dato: unknown): void {
  // bonus: controllo esplicito per null
  // typeof null restituisce "object"
  if (dato === null) {
    console.log("Il dato è vuoto");
    return;
  }

  // bonus: controllo se il dato è un array
  // Array.isArray è l’unico affidabile
  if (Array.isArray(dato)) {
    // stampa la lunghezza dell’array
    console.log(dato.length);
    return;
  }

  // bonus: controllo se il dato è una promise
  // verifica che sia un oggetto e che abbia un metodo then
  if (
    typeof dato === "object" &&
    dato !== null &&
    "then" in dato &&
    typeof (dato as Promise<unknown>).then === "function"
  ) {
    // attesa della risoluzione della promise
    (dato as Promise<unknown>).then((valore) => {
      // stampa del valore restituito dal resolve
      console.log(valore);
    });
    return;
  }

  // se il dato è una stringa
  if (typeof dato === "string") {
    // stampa la stringa in maiuscolo
    console.log(dato.toUpperCase());
    return;
  }

  // se il dato è un numero
  if (typeof dato === "number") {
    // moltiplica il numero per due e stampa il risultato
    console.log(dato * 2);
    return;
  }

  // se il dato è un booleano
  if (typeof dato === "boolean") {
    // stampa "si" se true, "no" se false
    console.log(dato ? "Sì" : "No");
    return;
  }

  // tutti gli altri tipi non sono supportati
  console.log("Tipo non supportato");
}
