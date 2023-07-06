let pronombres = [
    "I",
    "you",
    "he"
  ];

  let adjetivos = [
    "good",
    "bad",
    "big"
  ];
 
  sustantivos = [
    "time",
    "person",
    "year",
    "day"
  ];

  let dominios = [
    ".com",
    ".net",
    ".org"
  ];
 
  pronombres.forEach((pronombre) => {
    adjetivos.forEach((adjetivo) => {
        sustantivos.forEach((sustantivo) => {
            dominios.forEach((dominio) => {
                console.log(`${pronombre}${adjetivo}${sustantivo}${dominio}`);
            });
        });
    });   
  });