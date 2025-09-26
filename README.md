# Sitio Web Institucional de Iñaqui Techos

Este repositorio contiene el código fuente del sitio web institucional de Iñaqui Techos, desarrollado con Astro.

[![Netlify Status](https://api.netlify.com/api/v1/badges/[ID_DE_TU_BADGE_EN_NETLIFY]/deploy-status)](https://app.netlify.com/sites/[NOMBRE_DE_TU_SITIO]/deploys)

**Sitio en vivo:** [https://www.inaquitechos.com.ar](https://www.inaquitechos.com.ar)

---

## 🚀 Guía de Inicio Rápido (para desarrolladores)

Sigue estos pasos para levantar el proyecto en un entorno de desarrollo local.

### Prerrequisitos

-   **Node.js**: Se recomienda la versión 20.x o superior.

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone [URL_DE_TU_REPOSITORIO_GIT]
    ```
2.  Navega a la carpeta del proyecto:
    ```bash
    cd [NOMBRE_DE_LA_CARPETA]
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```

### Comandos Principales

-   **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:4321`.

-   **Construir el sitio para producción:**
    ```bash
    npm run build
    ```
    Los archivos estáticos se generarán en la carpeta `dist/`.

---

## 🛠️ Tecnologías Utilizadas

-   **Framework:** [Astro](https://astro.build/)
-   **Componentes Interactivos:** [React](https://reactjs.org/)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Íconos:** [Lucide Icons](https://lucide.dev/)
-   **Despliegue y Formularios:** [Netlify](https://www.netlify.com/)

---

## 📂 Estructura del Proyecto

Una descripción general de las carpetas más importantes del proyecto.

-   `src/pages/`: Contiene todas las páginas del sitio. Cada archivo `.astro` corresponde a una ruta URL.
-   `src/components/`: Contiene componentes reutilizables (tanto `.astro` como `.tsx`).
-   `src/layouts/`: Contiene la plantilla principal del sitio (`Layout.astro`) que define la estructura común (header, footer, etc.).
-   `src/assets/`: Almacena todos los recursos estáticos como imágenes y PDFs que son procesados por Astro.
-   `public/`: Para archivos estáticos que no necesitan ser procesados, como `favicon.ico`.

---

## ✍️ Mantenimiento y Actualización de Contenido

Guía básica para la actualización de los contenidos más comunes del sitio.

### Textos

La mayoría de los textos (títulos, párrafos, descripciones) se encuentran directamente en los archivos `.astro` dentro de la carpeta `src/pages/`. Por ejemplo, para editar la página de contacto, se debe modificar el archivo `src/pages/contacto.astro`.

### Imágenes y PDFs

1.  **Añadir el archivo:** Coloca la nueva imagen o PDF en la carpeta `src/assets/` (o una subcarpeta, ej. `src/assets/pdf/`).
2.  **Importar el archivo:** En la parte superior del archivo `.astro` donde se usará, añade una línea de importación. Ejemplo:
    ```javascript
    import nuevoManual from '../assets/pdf/nuevo-manual.pdf';
    ```
3.  **Usar el archivo:** Utiliza la variable importada en el HTML. Ejemplo:
    ```html
    <a href={nuevoManual.src}>Ver nuevo manual</a>
    ```

### Mensajes del Formulario de Contacto

Los mensajes enviados a través del formulario de contacto **no llegan por email por defecto**. Se almacenan de forma segura en el panel de Netlify.

Para verlos, inicia sesión en Netlify y ve a la sección **"Forms"** del sitio.

---

## 🚀 Despliegue

El sitio está configurado para un despliegue continuo (Continuous Deployment) a través de Netlify.

Cualquier cambio subido (`git push`) a la rama `main` del repositorio de GitHub activará automáticamente una nueva construcción y despliegue del sitio.