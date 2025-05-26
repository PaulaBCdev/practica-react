# PASOS DEL PROYECTO

1. LoginPage

   - DONE Formulario
   - DONE Checkbox "Recordar contraseña" = Si esta chequeado, que se guarde token

2. Layout

   - DONE Header
   - DONE Footer

3. AdvertsPage (se puede poner como lazy() y un Suspense con loader)

   - DONE Que llame bien a la api y se muestren los anuncios que ya haya en la api
   - DONE Que sea una pagina protegida
   - DONE Si no hay anuncios, muestra enlace a NewAdvertPage
   - Cada anuncio es un enlace a su pagina de detalle (AdvertPage)
   - DONE Si estas logeado, que salga un boton de Logout y te redirija a LoginPage
   - Aplicar el Suspense y que salga un loader cuando carguen los anuncios

4. AdvertPage (se puede poner como lazy() y un Suspense con loader)

   - Detalle del anuncio con foto si la hay
   - Si no existe, redireccion a NotFoundPage
   - Borrado del anuncio con confirmacion del usuario. Vuelta a "/"
   - Aplicar el Suspense y que salga un loader cuando carguen los anuncios

5. NewAdvertPage

   - Formulario. Menos la foto, todos los campos son obligatorios
   - Cuando se crea el anuncio, redirije a "/adverts"
   - Aplicar el Suspense y que salga un loader cuando carguen los anuncios

6. AdvertsPage - Filtros

## ToDo's

- Menu hamburguesa en el navbar
- Hover animado en los botones del navbar
