/**
 * Crittografia Stringa -> Cesare k
 * @param {string} s La stringa da crittare
 * @param {number} k La chiave per la crittografia Cesare
 */
function crypt(s, k) {
    const cifrario = "abcdefghijklmnopqrstuvwxyz";
    let ris = "";

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);

        if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
            let pos = cifrario.indexOf(c) + k;

            if (pos >= cifrario.length)
                pos = pos - cifrario.length;

            ris += cifrario[pos];
        } else
            ris += c;

    }

    return ris;
}

/**
 * Decrittografia Cesare k -> Stringa
 * @param {string} s La stringa da decrittare
 * @param {number} k La chiave per la decrittografia Cesare
*/
function decrypt(s, k) {
    const cifrario = "abcdefghijklmnopqrstuvwxyz";
    let ris = "";

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);

        if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
            let pos = cifrario.indexOf(c) - k;

            if (pos < 0)
                pos = pos + cifrario.length;

            ris += cifrario[pos];
        } else
            ris += c;

    }

    return ris;
}

function help() {
    console.log("Crittografia e decrittografia");
    console.log("Usare -c per crittare, -d per decrittare.");
    console.log("IMPORTANTE!! -> La stringa verrà sempre convertita in minuscolo prima di essere crittata/decrittata");
    console.log("Esempio: node index.js -c ciao");
}

const CAESAR_CIPHER = 15;

let args = process.argv.slice(2); // Toglie i primi due argomenti, ovvero node e index.js
let operazione = args[0];
let s = args[1].toLowerCase();

if (operazione == undefined) {
    console.log("Non è stata specificata l'operazione da eseguire.\n");
    help();
    return;
} else if (operazione == "-h" || operazione == "--help") {
    help();
    return;
}

if (s == undefined) {
    console.log("Non è stata specificata la stringa da utilizzare.\n");
    help();
    return;
}

if (operazione == "-c")
    console.log(crypt(s, CAESAR_CIPHER));
else if (operazione == "-d")
    console.log(decrypt(s, CAESAR_CIPHER));
else {
    console.log("Operazione sconosciuta.");
    help();
}