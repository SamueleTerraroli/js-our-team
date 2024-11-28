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

  const createMemberCard = (member) =>{
    const{name, role, email, img}= member;
    return `                <div class="col">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                          <div class="col-12 col-xl-4">
                            <img src="assets/img/${img}" class="img-fluid rounded-start img" alt="${name}">
                          </div>
                          <div class="col-12 col-xl-8 d-flex px-2 px-lg-3">
                            <div class="card-body d-flex flex-column justify-content-center">
                              <h5 class="name">${name}</h5>
                              <h6 class="role">${role}</h6>
                              <p class="card-text"><small class="tex email">${email}</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>`

  }
  
  const addTeam = (dataArray) =>{
    const containerTeamCards = document.getElementById('card-container');
    let card='';
    for(let member of dataArray){

      card += createMemberCard(member);
    }
    containerTeamCards.innerHTML = card;
  }
  addTeam(teamMembers);

  const form = document.querySelector('form');
  const resetInput =()=>{
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('email').value = '';
    document.getElementById('img').value = '';
    
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;
    const img = document.getElementById('img').value;

    const newMember ={
      name,
      role,
      email,
      img
    }

    teamMembers.push(newMember);
    addTeam(teamMembers);
    resetInput();
    
  })