//Start here
const databese = [
    {
      carName: "Kun: Dushanba",
      carPrice: '1. Ekonometrika asoslari(lek_A.Usmonov) => 8G',
      manzil:"2. Halqaro moliyaviy hisob (lek_O.Nurmatov) => 4G",
      carNumber: "3-para: Uyda ",
    },
    {
      carName: "Kun: Seshanba",
      carPrice: '1. Buxgalteriya hisobi(pr_I.G\'aniboyev) => 5-102',
      manzil:"2. Pul kredit banklar (lek_S.Abdullayeva) => 2G",
      carNumber: "3. Xorijiy til (pr_O.Mo'minov)=> 5-101 ",
    },
    {
      carName: "Kun: Chorshanba",
      carPrice: '1. Moliyaviy tahlil (lek_I.Ismanov) => 5G',
      manzil:"2. Axborot-soati =>5-305",
      carNumber: "3. Ekonometrika asoslari(pr_P.Raxmonnazarov) => 5-102",
    },
    {
      carName: "Kun: Payshanba",
      carPrice: '1. Soliq va soliqqa tortish (lek_O.Nurmatov) => 2G',
      manzil:"2. Pul kredit banklar (pr_S.Abdullayeva) =>5-303",
      carNumber: "3. Xalqaro moliyaviy standartlashtirish(pr_D.Razzaqova) => 5-407",
    },
    {
      carName: "Kun: Juma",
      carPrice: '1. Moliyaviy tahlil (pr_N.Qayumov) => 5-306',
      manzil:"2. Sug'urta ishi (pr_D.Shoyev) =>5-103",
      carNumber: "3. Soliq va soliqqa tortish(pr_D.Razzaqova) => 5-502",
    },
    {
      carName: "Kun: Dam(shanba)",
      carPrice: '1. Sug\'urta ishi (lek_A.Temirqulov) => 2G',
      manzil:"2. Buxgalteriya hisobi (lek_I.G'aniboyev)=>2G",
      carNumber: "3.Uygaa==>>>>>",
    },
   

    
  ];
  function selectElement(selector) {
    return document.querySelector(selector);
  }
  function clearResult(){
    selectElement('.search-results').innerHTML="";
  }
  function getResults() {
    const search = selectElement(".searchbar").value;
    clearResult();
  if(search.length>0){
    for (i = 0; i < databese.length; i++) {
      if (
        databese[i].carName.toLocaleLowerCase().includes(
          search.toLocaleLowerCase()
        ) ||
        databese[i].carNumber.toLowerCase().includes(search.toLocaleLowerCase())
      ) {
          selectElement('.search-results').innerHTML+=`
          <div class="search-result-items">
          <span class="search-item dayone">${databese[i].carName}</span>
          <span class="search-item">${databese[i].carPrice}</span>
          <span class="search-item">${databese[i].manzil}</span>
          <span class="search-item">${databese[i].carNumber}</span>
       
          </div>
          `;
      }
    }
  }

  }
  selectElement(".searchbar").addEventListener('keyup', getResults);
  
