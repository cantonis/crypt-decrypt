# crypt-decrypt
Questo è uno strumento di crittazione e decrittazione scritto in JS. Fornendo un verso d'azione e una stringa al file `index.js`, si può ottenere una stringa criptata o decriptata.
## Utilizzo
Scarica la repository con `git clone https://github.com/cantonis/crypt-decrypt.git`, poi avvia il programma con `node index.js`.
Si può criptare una stringa con l'argomento `-c`, mentre si può decriptare con `-d`. Si può ottenere sempre un messaggio di aiuto con l'argomento `-h`.

Esempi:
```
node index.js -c ciao                     --> Restituisce la stringa "ciao" criptata
node index.js -d 0072007800700064         --> Restituisce la stringa "0072007800700064" decriptata
node index.js -c "ciao come stai"         --> Restituisce la stringa "ciao come stai" criptata
node index.js -h                          --> Stampa una schermata di aiuto
```
La stringa passata da criptare/decriptare sarà sempre convertita in minuscolo prima del passaggio.
