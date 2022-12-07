

//API
fetch("recipes.json")
  .then((response) => response.json())
  .then((data) => {
    //LE JSON
    const resultas = data.recipes;
    console.log(resultas)
    
// TRIE DE RECHERCHE 
    //EVENT
    rechercheBar.addEventListener("input", filtre);

    function filtre(e) {
      //VIDE LA LISTE
      resulta.innerHTML = "";
      const rechercheString = e.target.value.toLowerCase().replace(/\s/g, "");

      const trie = resultas.filter(
        (el) =>
          el.name.toLowerCase().includes(rechercheString) ||
          el.appliance.toLowerCase().includes(rechercheString) 
          
      );

      creaCarte(trie);
      console.log(resultas);
    }

    
    


    // AFFICHE CARTES
    creaCarte(resultas);

    //affiche filtre appareil
    apprareilFiltreAppareil(resultas);

    apprareilFiltreUstensiles(resultas);

    apprareilFiltreIngredient(resultas);

   
    

    const test = document.querySelectorAll(".casparcas");
    
    
    

     resultasIngr.addEventListener("input", function () {
       //console.log(this.value);
       const rechercheClavier = this.value;
       const ingredientFiltre = test.filter(function(ingredient){
        return ingredient.toLowerCase().includes(rechercheClavier);
       })

       apprareilFiltreIngredient(ingredientFiltre);
     });
    
   
  })

    

  //FIN 
  .catch((err) => {
    console.log(err);
  });
  

  
