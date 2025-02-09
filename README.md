### Colaboradores

<table>
  <tr>
    <td align="center"><a style="color: black" href="https://github.com/AxelLeo129"><img src="https://github.com/AxelLeo129.png" width="100" height="100" alt="Axel Leonardo"><br>Axel Leonardo</a></td>
  </tr>
</table>

Realizado con las siguientes tecnologías:

- Node JS v20.13.0
- NPM v10.5.2
- Javascript
- Typesscript
- Angular 17
- PHP v8.2
- Composer
- Laravel 10
- MySQL

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. **Clonar repositorio**

   Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:
    ```bash
    git clone https://github.com/AxelLeo129/tu-chance-prueba-tecnica
    ```

2. **Instalar PHP, Composer, Node JS y agregar entorno local**

    Asegúrate de tener la versión de PHP 8.2 instalada. Si aún no lo tienes, puedes descargarlo desde la página oficial de PHP.
    También instala Composer, que puedes descargar desde la página oficial de Composer. Haz lo mismo con Node JS v20.13.0 instalada. Si aún no lo tienes, puedes descargarlo desde la [página oficial de Node JS](https://nodejs.org/en/download). De igual manera con Angular 17. Si aún no lo tienes, puedes descargarlo desde la [página oficial de Angular](https://angular.dev/overview).
    Una vez instaladas las herramientas, abre una terminar el proyecto y realiza lo siguiente:
    
    - Ingresa a la terminal del proyecto
    - Frontend:
        - Ingrese a la carpeta frontend: 
        ```bash
        cd frontend
        ```
        - Instala las dependencias: 
        ```bash
        npm install
        ```
    - Backend:
        - Ingrese a la carpeta backend: 
        ```bash
        cd backend
        ```
        - Instala las dependencias: 
        ```bash
        composer install
        ```
        - Copia el archivo de entorno:
        ```bash
        cp .env.example .env
        ```
        - Genera la clave de aplicación:
        ```bash
        php artisan key:generate
        ```
        - Configura la base de datos en el archivo .env con las credenciales de MySQL.
        - Ejecuta las migraciones:
        ```bash
        php artisan migrate
        ```
    
4. **Ejecutar el proyecto**

    - Para ejecutar el proyecto, dentro de la misma terminal respectiva: 
        - Frontend:
            - Ejecuta: 
            ```bash
            ng serve -o
            ```
        - Backend
            - Ejecuta: 
            ```bash
            php artisan serve
            ```

## Licencia

MIT

**Free Software, software to learn!**
