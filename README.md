# ByLuca

ByLuca es una plataforma educativa modular diseñada para que estudiantes puedan practicar sus conocimientos mediante simulacros de examen técnicos, bibliografía de consulta y desafíos prácticos integrados.

## Descripción

El proyecto ha evolucionado para convertirse en un Hub educativo unificado que abarca tanto el Ciclo Terciario (Desarrollo y Gestión) como el Ciclo Secundario (Ciencias, Lengua, Tecnología, Ciudadanía e Historia). ByLuca está diseñado bajo una arquitectura modular escalable que permite integrar nuevos módulos de estudio sin alterar el núcleo central.

## Características principales

- **Arquitectura escalable:** Estructura de carpetas optimizada para Firebase Hosting.
- **Simulacros de examen:** Motor dinámico que genera evaluaciones de 20 preguntas con dificultad aleatorizada.
- **Bibliografía técnica:** Guías de estudio formateadas como tarjetas técnicas para consulta inmediata.
- **Laboratorios Interactivos (Modo Estrella):** Desafíos prácticos por materia (ej: Microscopio Virtual, Editor Crítico, Diagramador de Sistemas, Tribunal Constitucional, Cronología Interactiva).
- **PWA (Progressive Web App):** Soporte offline mediante Service Workers y manifiesto de aplicación instalable.

## Materias integradas

**Ciclo Terciario:**

- Desarrollo Frontend, Gestión de Proyectos, Matemática, Inglés Técnico, Física y Química.

**Ciclo Secundario:**

- Biología, Lengua y Literatura, Educación Tecnológica, Ciudadanía y Participación, Historia.

## Tecnologías

- **Web:** HTML5, CSS3, JavaScript (ES6+).
- **Frameworks:** Bootstrap 5.
- **Infraestructura:** Firebase Hosting (PWA ready).
- **Animaciones:** Animate.css.

## Estructura del proyecto

- `/public/`: Directorio raíz de despliegue (hosting).
- `/public/common/`: Recursos compartidos (global.css, motor central engine.js).
- `/public/[materia]/`: Directorios independientes por materia (index, exámenes, bibliografía).
- `/public/manifest.json`: Configuración de PWA.

## Uso local y despliegue

1. **Local:** Utilice la extensión **Live Server** en VS Code dentro de la carpeta raíz.
2. **Despliegue:** Proyecto configurado para despliegue automático mediante `firebase deploy`.
