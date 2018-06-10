# console-shortcuts
> Inicia las paginas web y aplicaciones que mas utilizas con un simple comando de consola

## Install
```
    npm install -g console-shortcuts
```

## Utilización


  ### cs add (app/website name) (app location/website url)
  Este comando te permitira definir la aplicacion o pagina web a la cual quieras acceder rapidamente. Por ejemplo:

  ```
    cs add github https://www.github.com/
  ```

  ### cs (app/website name)
  Este comando te permitira iniciar las aplicaciones o paginas webs que hayas definido con el comando ```cs add (app/website name) (app location/website url)```. Por ejemplo:
  
  ```
    cs github
  ```
  
  ### cs list
  Este comando te mostrara un listado de las aplicaciones o paginas webs que tienes configuradas hasta el momento. Por ejemplo:

  ```
    cs list
  ```

  ### cs remove (app id)
  Este comando te permitira eliminar alguna aplicación del listado. Por ejemplo:

  ```
    cs remove 0
  ```
  > Nota: Puedes obtener la id de cada aplicación cuando escribes ```cs list```