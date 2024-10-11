# Syntaxe du Markdown

## Les titres

```md
    # Titre 1
    ## Titre 2
    ### Titre 3
    #### Titre 4
    ##### Titre 5
    ###### Titre 6
```

## Les textes

Il suffit juste de taper du texte sans formatage particulier

les textes peuvent etre : 

- *italique*
- **gras**
- ***italique et gras***

les textes peuvent avoir des couleurs en ajoutant du HTML dans le texte: 

```md
    <span style="color: #00FF00">Ce texte est vert</span>
```

- <span style="color: #00FF00">Ce texte est vert</span>


## Liens

### Liens externes

Les lient externes permettent d'acceder a du contenue externe au document.

Exemple : 

```md
    [Texte qui s'affiche](https://google.fr)
```

- [Texte qui s'affiche](https://google.fr)
- [documentation de Markdaown](https://www.markdownguide.org/basic-syntax/)


### Liens internes

Les liens interne permettent d'acceder a du contenue interne au document (Titre, partie, point-d'interet....etc). 

Exemple : 

```md
    [Texte qui renvois au titres](#les-titres)
```

- [Texte qui renvois au titres](#les-titres)


## Les Listes

### les liste ordonées

1. Premier item de ma liste
2. Deuxieme item de ma liste
3. Troisieme item de ma liste
   1. Une sous liste


### les liste non-ordonées

- Liste non ordonnée
  
  - liste non ordonner
  - [ ] checkbox
  - [x] checké


## Block code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

```md

    ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>
    ```

```


## Les séparateurs

```md

___ ou --- ou ***

```

___



## Les images


[![An old rock in the desert](/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)


```md
[![un texte a afficher si l'image n'est pas chargé](Le titre de l'image)](https://le-lien-de-image.com)
```
## les Tableaux


| Syntax     | Description |
| -----------| ----------- |
| Header     | Title       |
| Paragraph  | Text        |


| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |

