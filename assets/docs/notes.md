# Notas

## Historietas

Formato de documento de información de cada historieta. Se guarda un documento con el nombre `info.json` en el directorio de cada historieta. Por ejemplo: `/comics/c_000/info.json`.

``` JSON
{
  "folder": "c_000",
  "title": "Capítulo piloto",
  "image-format": "jpg",
  "pages": 7,
  "cover": "portada.jpg",
  "color": "#0dcaf0",
  "date": "16/10/2023"
}
```

## Colores

Yami: amarillo y rosa
Ayu: verde menta y azul cobalto

El azul cielo es cuando es el neutral de ambas.

## Utils

Para obtener la fecha y convertirla a formato legible.

```JavaScript
const date = new Date();
```

Obtener directorio actual dentro de una carpeta:

```JavaScript
const currentPath = window.location.pathname.split('/');
currentDirectory = currentPath[currentPath.lenght - 2]; 
```
