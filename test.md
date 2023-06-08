

var tableQualities: [{id, qual, value}];   // Sorted by value desc

var nbResultMin = 5;
var tableResult = [];

int i=0;
int j=0;
while (tableResult.length < nbResultMin) {
    var quality = tableQualities[j++]
    tableResult[i++] = quality;
    for (k=j; k<tableQualities.length; k++){
        if (tableQualities[k].value === quality.value) {
            tableResult[i++] = tableQualities[k];
            j = j+1;
        } else {
            break;
        }
    }
} 



choisir qualités :

10
9
8
8
7
7
7

table de 7 arguments
- récupérer les éléments qui ont une valeur similaire
- les stocker dans un tableau
- exporter les tableaux
- afficher les tableaux sur modal dans "Résults"
- quand utilisateur choisi, valeur est enlevée du tableau de valeur similaire
- enlever les valeurs du tableau tableResults

for ( i = 0; i < tableResults.lenght; i++ ) {

    console.log(tableResults[i].value);

}


table endResults =

- recupérer l'index de l'élément sélectionné
- supprimer l'élément du tableau correspondant à l'index
- réindexer le tableau
- ajouter +1 au nombre d'éléments supprimés
- si un élément sélectionné 

while ( nbSelectItems < nbDeleteItems ) {

    selectedItems++;
    nbDeleteItems--
}

