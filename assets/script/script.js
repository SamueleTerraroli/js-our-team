const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "female3.png"
    }
  ];

  /* ******LOGICA OPERATIVA******/

  //Logica per aggiungere un membro al team
  //1. Creo una funzione che mi permette di estrarre un oggetto dal'array fornito dal database
  //2. importo nella funzione la destinazione che dovrà avere l'oggetto che vado ad inserire
    //2.1 dichiaro una card vuota
    //2.2 ciclo l'array e ad ogni ciclo stabilisco la destinazione della mia card
    //2.3invoco la funzione
  //3. creo la funzione per la card
    //3.1 destrutturo l'oggetto per estrarne le singole proprietà
    //3.2 dichiaro una costante card in cui importo il mockup scritto in html in cui andrò ad inserire le proprietà generiche dell'oggetto
  
  //********Bonus*********

  //1. Creo in html un form che come id avrà le proprietà dell'oggetto
  //2. Lo importo in js
  //3. creo la funzione preventDefault al sub
  //4. dichiaro tre variabili che avranno lo stesso nome delle proprietà dell'oggetto e importo gli id
  //5. Creo un nuovo oggetto con quelle proprietà
  //6. pusho il nuovo oggetto nell'array
  //7. Invoco nuovamente la funzione per ciclare l'array
  //8. Faccio il reset del form

  const addTeam = (dataArray) =>{
    const containerTeamCards = document.getElementById(card-container);
    let card="";
    for(let member of dataArray){

      card += createMemberCard;
    }
    containerTeamCards.innerHTML = card;
  }
  addTeam(teamMembers);