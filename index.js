//#region Crittazione

/**
 * Crittografia Stringa -> Cesare k
 * @param {string} s La stringa da crittare
 * @param {number} k La chiave per la crittografia Cesare
 */
function caesarCrypt(s, k) {
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
 * Crittografia stringa -> HEX
 * @param {string} s La stringa da criptare
 */
function hexCrypt(s) {
    var hex, i;

    var ris = "";
    for (i = 0; i < s.length; i++) {
        hex = s.charCodeAt(i).toString(16);
        ris += ("000" + hex).slice(-4);
    }

    return ris;
}

//#endregion

//#region Decrittazione

/**
 * Decrittazione HEX -> stringa
 * @param {string} s La stringa da decriptare
 */
function hexDecrypt(s) {
    var i;
    var hexes = s.match(/.{1,4}/g) || [];
    var ris = "";
    for (i = 0; i < hexes.length; i++) {
        ris += String.fromCharCode(parseInt(hexes[i], 16));
    }

    return ris;
}

/**
 * Decrittografia Cesare k -> Stringa
 * @param {string} s La stringa da decrittare
 * @param {number} k La chiave per la decrittografia Cesare
*/
function caesarDecrypt(s, k) {
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

//#endregion

/**
 * Crittografia stringa -> Cesare k -> HEX -> BIN
 * @param {string} s La stringa da criptare
 * @param {number} k La chiave per la crittografia Cesare
 */
function crypt(s, k) {
    let ris = caesarCrypt(s, k);
    ris = hexCrypt(ris);
    //ris = binCrypt(s);
    return ris;
}

/**
 * Decrittografia BIN -> HEX -> Cesare k -> stringa
 * @param {string} s La stringa da decriptare
 * @param {number} k La chiave per la decrittografia Cesare
 */
function decrypt(s, k) {
    let ris //= binDecrypt(s);
    ris = hexDecrypt(s);
    ris = caesarDecrypt(ris, k);
    return ris;
}

function help() {
    console.log("Crittografia e decrittografia\n");
    console.log("-c \"string\"    Crittografia di una stringa");
    console.log("-d \"string\"    Decrittografia di una stringa");
    console.log("-h, --help     Schermata di aiuto\n");
    console.log("La stringa passata da criptare/decriptare sarà sempre convertita in minuscolo prima del passaggio.");
}

const CAESAR_CIPHER = 15;

let args = process.argv.slice(2); // Toglie i primi due argomenti, ovvero node e index.js
let operazione = args[0];
let s = args[1];

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
} else s = s.toLowerCase();

if (operazione == "-c")
    console.log(crypt(s, CAESAR_CIPHER));
else if (operazione == "-d")
    console.log(decrypt(s, CAESAR_CIPHER));
else {
    console.log("Operazione sconosciuta.");
    help();
}