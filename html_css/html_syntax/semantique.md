# Semantique en HTML

## Les Images

- La source est Obligatoire
- L'attribut title ne dois pas servire a decrire
- L'attribut alt est obligatoire et sert a décrire l'image
- les images doivent etre les plus legere possible.

## Les Textes

- PAs de texte sans balise
- Majoritairement les textes iront dans une balise p, span, a.
- **TOUTE** les balises servant a modifier l'apparence d'un texte sont OBSOLETES
  - la balise strong a un interet semantique

## Les liste

- Les seules enfant directe d'un balise ul ou ol  sont les balises li.

## Les liens

- L'attribut href est obligatoire
- mettre un # dans l'attribut href n'est pas une bonne pratique

## Les formulaire

- le label est obligatoire
- le place placeholder ne doit pas remplacer le label
- Si il y a plusieurs forms sur la page, ils doivent etre identifié

### Inputs

- Doivent avoir un label, un name et un id
- Dans certain cas, l'attribut Value est obligatoire.


## La déclaration d'espace

### html

C'est le plus haut parent du document.

### head

- un espace qui sert a la configuration du document. Son est contenu est invisible au client

### Body

- Contient tout les element visible de la page 

### header

- Déclare l'entete de la page ( ou de la section)
  
### nav

- declarer une barre de navigation
- Les lien a l'interieure de la nav serviront a naviguer sur le site

### section

- Une section est une div qui regroupe sont contenue autoure d'une idée commune
- une section comment soit par un h1 soit par un h2
  
### aside

- Un espace ( generalement sur le coté) qui va permettre d'acceder a du contenue facultatif

### div

- Element de division de l'espace disponible
- Un div n'as aucun poind semantique
- la div a un display block par defaut

### span

- Element de division de l'espace disponible
- Un span n'as aucun poind semantique
- le span a un display inline par defaut
  

### Footer

- C'est le pied de page du document

### le main

- Le contenue principale du document
- 1 main par page

### L'article

- C'est element composé d'un titre d'un texte rassemblé sour la meme idée.
- une idée par article

