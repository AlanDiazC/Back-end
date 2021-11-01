# Back-end

## 1. Crear playlists
Permite la creación de una playlist vacia indicando su tipo de contenido
- **Endpoint:** `/postCrearPlaylist`
- **Method:** `POST`
- **Body:** `{ "nombre":"playlist1", "contenido":"Canciones" }`
- **Validaciones:** 
  - `nombre: string único de la playlist, no se puede repetir`
  - `contenido: string mayor a 0 requerido`
- **Errores:**
  - `ValidarionError: 'contenido' is required, HTTP status 400 `
  - `ValidarionError: is not a valid enum value for path 'contenido', HTTP status 400 `
  - `AliasExistsException 500`
  - `Unprocessable Entity 422`
- **Respuesta:** `HTTP status 200 `

## 2. Agregar una canción a una playlist
Se utiliza para agregar una canción a una playlist de canciones
- **endpoint:** `/postAgregarCancion`
- **method:** `POST`
-  **Body:** `{ "nombre":"playlist1", "nombreCancion":"Melodian", "autorCancion": "Mago de Oz", "generoCancion": "Rock", "album": "Ilussia" }`
- **Validaciones:** 
  - `nombre: string mayor a 0 del nombre de la playlist`
  - `nombreCancion: string`
  - `autorCancion: string`
  - `generoCancion: string`
  - `album: string`
- **Errores:**
  - `AliasExistsException 500`
  - `Unprocessable Entity 422`
- **Respuesta:** `HTTP status 200 `

## 3. Agregar un libro a una playlist
Se utiliza para agregar un libro a una playlist de libros
- **endpoint:** `/postAgregarLibro`
- **method:** `POST`
- **Body:** `{ "nombre":"playlist2", "nombreLibro":"El repliegue de los espejos", "autorLibro": "Fernando Díaz Cid", "generoLibro": "Poesia", "editorial": "Editorial Nazarí" }`
- **Validaciones:** 
  - `nombre: string mayor a 0 del nombre de la playlist`
  - `nombreLibro: string`
  - `autorLibro: string`
  - `generoLibro: string`
  - `editorial: string`
- **Errores:**
  - `AliasExistsException 500`
  - `Unprocessable Entity 422`
- **Respuesta:** `HTTP status 200 `

## 4. Borrar playlist
Permite borrar completamente una playlist
- **endpoint:** `/borrarPlaylist`
- **method:** `POST`
- **Body:** `{ "nombre":"playlist1" }`
- **Validaciones:** 
  - `nombre: string mayor a 0 del nombre de la playlist a eliminar`
- **Errores:**
  - `AliasExistsException 500`
  - `Unprocessable Entity 422`
- **Respuesta:** `HTTP status 200 `

## 5. Eliminar una canción dentro de una playlist
Permite eliminar una canción de una playlist de canciones
- **endpoint:** `/postBorrarCancion`
- **method:** `POST`
- **Body:** `{ "nombre":"playlist1", "nombreCancion":"Melodian", "autorCancion": "Mago de Oz", "generoCancion": "Rock", "album": "Ilussia" }`
- **Validaciones:** 
  - `nombre: string mayor a 0 del nombre de la playlist`
  - `nombreLibro: string`
  - `autorLibro: string`
  - `generoLibro: string`
  - `editorial: string`
- **Errores:**
  - `AliasExistsException 500`
  - `Unprocessable Entity 422`
- **Respuesta:** `HTTP status 200 `

## 6. Eliminar un libro de una playlist
Permite eliminar un libro de una playlist de libros
- **endpoint:** `/postBorrarLibro`
- **method:** `POST`
- **Body:** `{ "nombre":"playlist2", "nombreLibro":"El repliegue de los espejos", "autorLibro": "Fernando Díaz Cid", "generoLibro": "Poesia", "editorial": "Editorial Nazarí" }`
- **Validaciones:** 
  - `nombre: string mayor a 0 del nombre de la playlist`
  - `nombreLibro: string`
  - `autorLibro: string`
  - `generoLibro: string`
  - `editorial: string`
- **Errores:**
  - `AliasExistsException 500`
  - `Unprocessable Entity 422`
- **Respuesta:** `HTTP status 200 `

## 7. Modificar una playlist
Permite modificar el nombre de una playlist
- **endpoint:** `/modificarPlaylist`
- **method:** `POST`
- **Body:** `{ "nombre":"playlist2", "nombreNuevo":"playlistLibros" }`
- **Validaciones:** 
  - `nombre: string mayor a 0 del nombre de la playlist a modificar`
  - `nombreNuevo: string del nuevo nombre de la playlist`
- **Errores:**
  - `AliasExistsException 500`
  - `Unprocessable Entity 422`
- **Respuesta:** `HTTP status 200 `

## 8. Obtener todas las playlists
Se utiliza para ver todas las playlists guardadas en la base de datos
- **endpoint:** `/obtenerPlaylists`
- **method:** `GET`
- **Errores:**
  - `AliasExistsException 500`
  - `Unprocessable Entity 422`
- **Respuesta:** `HTTP status 200 { { "nombre":"playlist1", "contenido":"Canciones", "nombreCancion":"Melodian", "autorCancion": "Mago de Oz", "generoCancion": "Rock", "album": "Ilussia" }, { "nombre":"playlist2", "contenido":"Libros", "nombreLibro":"El repliegue de los espejos", "autorLibro": "Fernando Díaz Cid", "generoLibro": "Poesia", "editorial": "Editorial Nazarí" } }`

## 9. Obtener todas las playlists de un tipo de contenido
Se utiliza para ver todas las playlists con un tipo de contenido buscado
- **endpoint:** `/obtenerPlaylistsPorContenido`
- **method:** `POST`
- **Body:** `{ "contenido":"Canciones" }`
- **Validaciones:** 
  - `contenido: string`
- **Errores:**
  - `AliasExistsException 500`
  - `Unprocessable Entity 422`
- **Respuesta:** `HTTP status 200 {"nombre":"playlist1", "contenido":"Canciones", "nombreCancion":"Melodian", "autorCancion": "Mago de Oz", "generoCancion": "Rock", "album": "Ilussia" }`

