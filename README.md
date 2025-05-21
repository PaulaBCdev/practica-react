# PASOS DEL PROYECTO

1. AdvertsPage ("/" y "/adverts")

   - Que llame bien a la api y se muestren los anuncios que ya haya en la api

2. LoginPage

   - Formulario
   - Checkbox "Recordar contraseña"

3. AdvertsPage

   - Que sea una pagina protegida
   - Si no hay anuncios, muestra enlace a NewAdvertPage
   - Cada anuncio es un enlace a su pagina de detalle (AdvertPage)
   - Si estas logeado, que salga un boton de Logout y te redirija a LoginPage

4. AdvertPage

   - Detalle del anuncio con foto si la hay
   - Si no existe, redireccion a NotFoundPage
   - Borrado del anuncio con confirmacion del usuario. Vuelta a "/"

5. NewAdvertPage
   - Formulario. Menos la foto, todos los campos son obligatorios
   - Cuando se crea el anuncio, redirije a "/adverts"

?. AdvertsPage - Filtros
