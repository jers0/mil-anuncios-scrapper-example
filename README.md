# mil-anuncios-scrapper-example
Ejemplo de Scrapping sobre Mil Anuncios con Nightmare y persistencia.



# ====== PRIMER PASO ====== <h1>

1. Ejecutamos el comando "npm install"

# ===== SEGUNDO PASO ====== <h1>

2. Ejecutamos el comando: "node index.js"

# ===== ACLARACIÓN ===== <h2>

3. Hay que tener en cuenta, qué milanuncios detecta navegadores "inusuales" para esto construimos Nightmare con un parámetro que es "partition", y nos permite almacenar información de ese Chromium (sessiones, cache, cookies... etc). Esto significará que la primera vez que ejecutemos la aplicación y se abrá Nightmare, mil anuncios nos pedira resolver un captcha. Una vez resuelto, se deberian almacenar los datos en la partition que hemos creado, y las siguientes veces que instanciemos Nightmare ya no debería saltar el captcha.