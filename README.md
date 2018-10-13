# console-shortcuts
> Inicia las paginas web y aplicaciones que mas utilizas con un simple comando de consola

## Install
```
    npm install -g console-shortcuts
```

## Utilización

  ### cs help
  Este comando te mostrara un listado de los comandos que pueden ser utilizados. Por ejemplo:

  ```
    cs list
  ```

  ### cs add (app name) "(app location)"
  Este comando te permitira definir la aplicacion a la cual quieras acceder rapidamente. Por ejemplo:

  ```
    cs add chrome "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
  ```

  ### cs add (website name) "(website URL)"
  Este comando te permitira definir la pagina web a la cual quieras acceder rapidamente. Por ejemplo:

  ```
    cs add github "https://www.github.com/"
  ```

  ### cs add (directory name) "dir:///(directory)"
  Este comando te permitira definir el directorio al cual quieras acceder rapidamente. Esto solo funciona para directorios, la diferencia es que debes ingresar "dir:///" antes de ingresar el directorio para que se detecte que lo que intentas abir es un direcorio Por ejemplo:

  ```
    cs add usuarios "dir:///C:/users"
  ```
  > Nota: tambien puede utilizar dir:// en vez de dir:///.

  ### cs (app name/website name/directory name)
  Este comando te permitira iniciar las aplicaciones, paginas webs o directorios que hayas definido con el comando ```cs add ...```. Por ejemplo:
  
  ```
    cs github
  ```
  
  ### cs list
  Este comando te mostrara un listado de las aplicaciones, paginas webs o directorios que tienes configuradas hasta el momento. Por ejemplo:

  ```
    cs list
  ```

  ### cs remove (app id)
  Este comando te permitira eliminar alguna aplicación, pagina web o directorio del listado. Por ejemplo:

  ```
    cs remove 0
  ```
  > Nota: Puedes obtener la id de cada aplicación cuando escribes ```cs list```

   ### cs move (app id) (positionid)
  Este comando te permitira mover la posición de un shortcut. Por ejemplo:

  ```
    cs move 0 2
  ```
