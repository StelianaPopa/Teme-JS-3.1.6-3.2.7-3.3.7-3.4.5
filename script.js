// 3.1.6. Temă pentru acasă - INTRO 7
// Ex.1
// Returnează un boolean dacă un număr este divizibil cu 10
// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.
// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.
// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.
// Exemplu 1: Input: 100 Output: true

let esteDivizibil = (x, y) => {
    let z = x % y;
    if (z === 0) {
        return true;
    } else {
        return false;
    };
};
let a = 23; 
let b = 10;
console.log(esteDivizibil(a,b));
let c = 400;
console.log(esteDivizibil(c,b));

// Ex.2
// Scrieți o funcție numită tellFortune care: primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
// Afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
// În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).
// Exemplu 1:
// Input: numarCopii: 3, numePartener: “Emanuel”, locatieGeografica: “Italia”, locMunca: “Programator”
// Output: “Vei fi un Programator în Italia, căsătorit cu Emanuel și vei avea 3 copii.”

let tellFortune = (n, z, y, x) => {
    return console.log(`Vei fi un ${x} în ${y}, căsătorit cu ${z} și vei avea ${n} copii.`);
};
let numarCopii = 3;
let numePartener = "Emanuel";
let locatieGeografica = "Italia";
let locMunca = "Programator";
tellFortune(numarCopii, numePartener, locatieGeografica, locMunca); 

// Ex.3
// Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii
// Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile 
// a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.
// Exemplu 1: Input: 1 Output: “Luni”

const returneazaZiua = () => {
  let day;
  switch (new Date().getDay()) {
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marti";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case  6:
      day = "Sambata";
      break;
    case 7:
      day = "Duminica";
  }
  return(`Astazi este ${day}`);
  };

console.log(returneazaZiua());

// 3.2.7. Temă pentru acasă - ARRAY & LOOPS
// Ex.1
// Tipăriți toate numerele pare de la 0 la 10
// Încercați să rezolvați această problemă cât mai eficient posibil. Luați în considerare utilizarea buclelor
// care vă vor permite să tastați cele mai puține caractere / comenzi (se acceptă orice abordare bazată pe bucle). 
// Deși ați putea pur și simplu să tipăriți numerele pare, fiți creativi și încercați să le generați într-un mod 
// în care să funcționeze indiferent de limita setată (până la 10 sau chiar până la 10.000).
// Exemplu 1:
// Input: n = 10, unde n este numărul maxim până la care se va executa bucla
// Output: 0, 2, 4, 6, 8, 10

const tiparesteNumerePare = (n) => {
  for (i = 0; i <= n; i++) {
    if (i % 2 === 0) {
    console.log(i);
    }
  };
};

tiparesteNumerePare(10);

// Ex.2
// Calculați suma numerelor dintr-un șir de numere
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă 
// cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați 
// matrice de lungimi diferite.
// Exemplu 1: Input: [1, -5, 20, -34, 16, 29, 36, -4] Output: 59
// Exemplu 2: Input: [3.45, -2.68, 356, -75.96, 64, 19.28] Output: 364.09000000000003

const calculeazaSuma = (numere) => {
  let suma = 0;
  for (let i = 0; i < numere.length; i++) {
    suma += numere[i];
  }
  return suma;
};
console.log(calculeazaSuma([1, -5, 20, -34, 16, 29, 36, -4]));
console.log(calculeazaSuma([3.45, -2.68, 356, -75.96, 64, 19.28]));

// Ex.3
// Creați o funcție care inversează un șir de numere
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă 
// cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice 
// de lungimi diferite. Un șir de numere va fi trimis ca date de intrare și, ca rezultat, funcția va returna 
// un șir nou de numere cu elementele primului în ordine inversă.
// Exemplu 1: Input: [1, -5, 20, -34, 16, 29, 36, -4]; Output: [-4, 36, 29, 16, -34, 20, -5, 1]


const inverseazaOrdineaNumerelor = (numere) => {
  let numbers = [];
  for (let i = numere.length - 1; i >= 0; i--) {
    numbers.push(numere[i]);
  }
  return numbers;
};

console.log(inverseazaOrdineaNumerelor([1, -5, 20, -34, 16, 29, 36, -4]));

// Ex.4
// Returnează numărul de vocale dintr-un șir de caractere (string)
// Creați o funcție care va returna un număr întreg al numărului de vocale găsite într-un șir. 
// Aceasta este o modalitate excelentă de a practica determinarea caracteristicilor unui set de date.
// Exemplu 1: Input: “string de test” Output: 3
// Explicație: Parcurgeți șirul și verificați fiecare caracter individual. Dacă este vocală, atunci o variabilă 
// își mărește valoarea (adaugă +1). În șirul nostru de intrare avem vocalele: i, e, e ⇒ 3.


const numaraVocalele = (string) => {
  let numarDeVocale = 0;
  for(let i = 0; i < string.length; i++) {
      if (string[i].match(/[aeiou]/gi)) {
        numarDeVocale += 1;
      }
  };
  return numarDeVocale;
};
console.log(numaraVocalele('string de test'));
console.log(numaraVocalele('Ana are multe MERE'));

// 3.3.7. Temă pentru acasă - OBIECTE
// Ex.1
// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată
// Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și 
// ingrediente (o șir de elemente - array). Va fi afișată pe rânduri separate 
// (o instrucțiune console.log pentru fiecare) toate informațiile obiectului după crearea acestuia.
// Exemplu 1:
// Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]
// Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }

const retetaMea = {
  titlu: 'Pizza',
  portii: 3,
  ingrediente: ['sunca', 'cas', 'ketchup'],
};
console.log(retetaMea);
console.log(retetaMea.titlu);
console.log(retetaMea.portii);
console.log(retetaMea.ingrediente);

// Ex.2
// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
// Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, 
// iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.
// Exemplu 1:
// Input: obiect = { a: 1, b: 2 }, proprietate = “b”
// Output: { a: 1 }

const produs = {
  nume: 'telefon',
  marca: 'Samsung',
  pret: 500,
};
console.log(produs);

const stergeProprietatea = (obiect, proprietate) => {
  const produsNou = {...obiect};
  for(const x of proprietate) {
    delete produsNou[x];
  }
  return produsNou;
};

const produsDoi = stergeProprietatea(produs,['pret']);
console.log(produsDoi);
produsDoi.culoare = "blue";
console.log(produsDoi);

// Ex.3
// Creați un șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), 
// autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).
// Scrieți o funcție care:
// Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
// Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. 
// Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, 
// iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.
// Exemplu 1:
// Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];
// Output: 
// “Carte 1 de Autor 1”
// ”Ai citit deja “Carte 1” de Autor 1”
// ”Carte 2 de Autor 2” 
// ”Trebuie sa citesti “Carte 2” de Autor 2”

const carti = [
  {
    titlu: 'Hobbitul',
    autor: 'J.R.R. Tolkien',
    esteCitita: false,
  },
  {
    titlu: 'Maitrey',
    autor: 'Mircea Eliade',
    esteCitita: true,
  },
  {
    titlu: 'Lolita',
    autor: 'Vladimir Nabokov',
    esteCitita: false,
  },
  {
    titlu: 'Dragostea in vremea holerei',
    autor: 'Gabriel Garcia Marquez',
    esteCitita: false,
  },
  {
    titlu: 'Micul print',
    autor: 'Antoine de Saint Exupery',
    esteCitita: true,
  },
  {
    titlu: 'Mizerabilii',
    autor: 'Victor Hugo',
    esteCitita: true,
  },
];

const analizaCarti = (carti) => {
  for (let i = 0; i < carti.length; i++){
    if(carti[i].esteCitita === true){
      console.log(`Cartea "${carti[i].titlu}" de ${carti[i].autor}`);
      console.log(`Ai citit deja "${carti[i].titlu}" de ${carti[i].autor}`);
    } else {
      console.log(`Cartea "${carti[i].titlu}" de ${carti[i].autor}`);
      console.log(`Trebuie sa citesti "${carti[i].titlu}" de ${carti[i].autor}`);
    }
  }
};

analizaCarti(carti);


// 3.4.5. Temă pentru acasă - Funcții
// Ex. 1
// Scrieți o funcție care returnează pătratul unui număr
// Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).
// Exemplu 1: Input: num = 6 Output: 36
// Exemplu 2: Input: num = 0 Output: 0
// Exemplu 3: Input: num = -12 Output: 144

const findSquare = (num) => {
  return num ** 2;
};

console.log(findSquare(6));
console.log(findSquare(0));
console.log(findSquare(-12));


// Ex. 2
// Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic 
// decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
// Funcția getRandom(start, end) returnează un număr întreg aleator generat în intervalul definit de variabilele 
// de început și sfârșit furnizate.
// Exemplu 1: Input: start = 3, end = 5 Output: < un număr mai ≥ 3 și < 5>
// Hint: Pentru a rezolva problema, va fi folosită funcția built in a JavaScript-ului: Math.random().
// Notă: Exemplele date sunt de natură abstractă pentru a nu crea confuzii. Numerele aleatoare generate 
// nu pot fi estimate în avans, fiecare apel de funcție generând un nou număr aleator. 
// Singura regulă impusă este respectarea intervalului dat de parametrii de început și de sfârșit.


const getRandom = (start, end) => {
  return Math.floor((Math.random() * (end - start)) + start);
}

console.log(getRandom(3, 5));

// Ex. 3
// Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
// Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.
// Exemplu 1: Input: sir = “Îmi place programarea” litera = “a” Output: 4
// Exemplu 2: Input: sir = “Vreau să lucrez în IT”, litera = “r” Output: 2
// Notă: Nu se ține cont de scrierea cu majuscule sau minuscule. Litera A și litera a trebuie numărate
// la calcularea numărului de apariții pentru A sau pentru a.



const letterCount = (x, sir) => {
  let counterX = 0;
  for (let i = 0; i < sir.length; i++){
    if (sir[i].toLowerCase().match(x.toLowerCase())) {
      counterX++;
    }
  };
  return counterX;
}
console.log(letterCount('a', 'Îmi place PROGRAMAREA'));
console.log(letterCount('r', 'Vreau să lucrez în IT'));

// Ex. 4
// Scrieți o funcție pentru a adăuga numere nelimitate
// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. 
// Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.
// Exemplu 1: Input: addNumber(1, 2, 3) Output: 6
// Exemplu 2: Input: addNumber(1, 2, 3, 4, 5) Output: 15
// Hint: Pentru a rezolva problema, vom folosi operatorul spread / rest (...) pentru a defini 
// argumentele funcției: const addNumber = (…argumente) ⇒ {}


const addNumber = (...argumente) => {
  let x = 0;
  for (i = 0; i < argumente.length; i++) {
    x += argumente[i];
  }
  return x;
}

console.log(addNumber(1, 2, 3));
console.log(addNumber(1, 2, 3, 4, 5));















