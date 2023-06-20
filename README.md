# Questionnaire de Seligman

Ce projet est construit avec React JS, TypeScript et SCSS. 


## Commandes / Vite

- Lancer serveur de développement : \
<code>`npm start`</code>

- Lancer serveur de développement avec partage (partage l'adresse IP de la machine) : \
<code>npm start --host</code> \
Note : Les appareils doivent se trouver sur le même réseau Wifi

- Builder le projet : \
<code>npm run build</code>

## Documentation

Les questions sont générées à partir des deux tableaux `questionsA` et `questionsB` à partir du modèle composant "QuestionModel".

Lorsque les questions A et B sont complétées, les données sont envoyées dans le SessionStorage quand le boutton "Envoyer" est cliquée. Les données sont envoyées sous forme de string et doivent donc être converties en nombre grâce à la fonction `convertToNumbers`. \
\
Le code "tableResults.ts" convertie les données des tableaux `tableA` et `tableB` en `tableC` avec les valeurs adittionées.

\
Le calcul final correspond à : Valeur de questionA-1 + Valeur de questionB-1 = Valeur de type nombre. \
Les 5 valeurs les plus élevées sont ensuites sélectionnées pour être affichées. \


Lorsque le composant "Results" est affiché, 2 cas possibles : 
- La tableauC.lenght est égale à 5 => les 5 résultats sont affichés
- La tableauC.lenght est plus grande que 5 => on laisse la possibilité à l'utilisateur de faire un choix sur quelles qualités choisir, les qualités sélectionnées sont ajoutées dans un nouveau tableau "newTableResults" qui est affiché lorsque l'utilisateur confirme son choix. \

Le tableau "tableResults" est divisé en deux parties : le début du tableau et la fin du tableau comportant tous les éléments qui ont la même valeur et qui font passer la longueur du tableau à plus de 5. \
Les qualités choisies par l'utilisateur sont ensuite ajoutés dans un nouveau tableau "newEndTableResuls" qui est ensuite concaténé au tableau "startTableResults" pour créer le nouveau tableau "newTableResults" qui est ensuite affiché.


