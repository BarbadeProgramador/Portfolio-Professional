import { image } from "motion/react-client"

//SECTION TOP
const jobSearch = [
  {
    state: 'Disponible', // Corregido: Disponble -> Disponible
  },
  {
    state: 'Trabajando'
  }
]

//EXPERIENCE JOB SECTION
export const Experience = [
  {
    image: 'images/mocion_logo.webp',
    enterphrise: 'Moción Experience Tech', // Corregido: Moncion -> Moción
    title: 'Full Stack Developer',
    subTitle: 'data',
    date: 'oct 2024 - dic 2024',
    description: 'Desarrollo, actualización y mantenimiento de diversas experiencias digitales utilizando React y Next.js, abarcando todo el ciclo de vida del producto desde su etapa inicial de conceptualización y venta, pasando por el diseño e implementación técnica, hasta su entrega final al cliente; generación de reportes personalizados mediante Looker a partir del análisis de los datos recolectados por dichas experiencias, permitiendo entregar métricas reales; y uso de Git como herramienta principal para el almacenamiento, control de versiones, seguimiento de cambios, colaboración entre equipos y gestión eficiente del ciclo de desarrollo de los proyectos' // Corregido: metricas -> métricas
  },
  {
    image: 'images/seguridad_oncor_logo.webp',
    enterphrise: 'Seguridad Oncor LTDA',
    title: 'Backend Junior Developer',
    subTitle: 'data',
    date: 'oct 2022 - ago 2024',
    description: 'Lideré un equipo de practicantes en el desarrollo de un software de gestión de solicitudes y órdenes de compra con módulos específicos para diferentes áreas ejecutivas como Medios Tecnológicos, Compras y Contabilidad, utilizando Python como lenguaje principal; diseñé e implementé un modelo relacional orientado a la escalabilidad de la lógica de negocio del proyecto; gestioné el versionamiento colaborativo del código mediante Git y GitHub; desarrollé aplicaciones web funcionales para automatizar procesos operativos en distintas áreas, brindando soporte continuo a los sistemas web y móviles principales de la empresa; creé informes interactivos en Power BI para visualizar datos relevantes y capacitar al personal en su uso; y realicé tareas de análisis y manejo de bases de datos utilizando SQL Server y hojas de cálculo para garantizar la integridad y utilidad de la información en la toma de decisiones.' // Corregido: areas -> áreas, informacion -> información
  }
]


//PROJECTS SECTION
export const Projects_Professional = [
  {
    image: 'images/kardex.webp',
    title: 'Kardex Digital',
    description: 'Aplicativo web de gestión y entrega de dotación para los nuevos y antiguos trabajadores de la empresa conectándose a las bases de datos internas y gestionando una API para la transacción de información al CRM principal', // Corregido: gestion -> gestión, dotacion -> dotación, conectanse -> conectándose, api -> API, transaccion -> transacción, informacion -> información
    tecnologies: [
      {
        name: 'Php',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'Laravel',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      },
      {
        name: 'SQL Server',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
      }
    ],
    names: 'Creador'
  },
  {
    image: 'images/otech.webp',
    title: 'Otech',
    description: 'Aplicativo web para la gestión de solicitudes y órdenes de compra con módulos para las áreas de contabilidad, medios tecnológicos y compras, separando la lógica de sesión por un sistema de roles', // Corregido: gestion -> gestión, ordenes -> órdenes, modulos -> módulos, areas -> áreas, tecnologicos -> tecnológicos, logica -> lógica, sesion -> sesión
    tecnologies: [
      { name: 'Python',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
       },
      { name: 'Django',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', },
      { name: 'SQL Server',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
       }
    ],
    names: 'Creador'
  },
  {
    image: 'images/IAmusic.webp',
    title: 'IA Music',
    description: 'Aplicativo que convierte todo lo que dices en una canción esto gracias a la Inteligencia Artificial. Este aplicativo fue presentado en Colombia 4.0 2024', // Corregido: cancion -> canción, Intelengicia -> Inteligencia
    tecnologies: [
      { name: 'JavaScript',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
       },
      { name: 'React',
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
       },
      { name: 'Next',
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", },
      { name: 'MongoDB',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', }
    ],
    names: 'Participación' // Corregido: Participacion -> Participación
  },
  {
    image: 'images/calidadPuestos.webp',
    title: 'Evaluación de calidad', // Corregido: Evaluacion -> Evaluación
    description: 'Aplicativo web para evaluar establecimientos y puestos de trabajo de una empresa, con el fin de medir la calidad de sus servicios y permitiendo que esta información llegara por medio de correo electrónico a la Gerencia', // Corregido: informacion -> información, electronico -> electrónico
    tecnologies: [
      { name: 'Python',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
       },
      { name: 'Django',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', },
      { name: 'SQL Server',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
       }
    ],
    names: 'Creador'
  },
  {
    image: 'images/packguarda2.webp',
    title: 'Sistema de tareas para vigilantes',
    description: 'Paquete de aplicaciones web que incluye subaplicaciones diseñadas específicamente para el uso de personal de vigilancia incluida en la aplicación móvil principal de la empresa creada con java en el 2011', // Corregido: especificamente -> específicamente, aplicacion -> aplicación, movil -> móvil
    tecnologies: [
      {
        name: 'Php',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'Laravel',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      },
      {
        name: 'SQL Server',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
      }
    ],
    names: 'Time Tracker'
  },
  {
    image: 'images/dashboard.webp',
    title: 'Dashboard Análisis de Vigilancia', // Corregido: Analisis -> Análisis
    description: 'Dashboard interactivo para monitorear y evaluar el rendimiento de las rondas realizadas por los guardas a nivel nacional y permitiendo visualizar a los clientes todos los movimientos.', // Corregido: movientos -> movimientos
    tecnologies: [
      { name: 'PowerBI', // Nota: Podría ser 'Power BI' si se desea el espacio, pero 'PowerBI' es aceptable como nombre técnico aquí.
        url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg',
       },
      { name: 'SQL Server',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg', }
    ],
    names: 'Participación' // Corregido: Participacion -> Participación
  }
]




export const Projects_Freelance = [
  {
    image: 'images/motelapp.webp',
    title: 'Motel - App Web',
    description: 'Aplicación web desarrollada para la gestión y administración integral de un motel. Este proyecto pertenece a un trabajo final universitario de décimo semestre', // Corregido: gestion -> gestión, administracion -> administración, decimo -> décimo, añadido espacio después de motel.
    tecnologies: [
      {
        name: 'Php',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'Laravel',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      },
      {
        name: 'SQL Server',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
      }
    ],
    names: 'Creador'
  },
  {
    image: 'images/capipay2.webp',
    title: 'Capipay',
    description: 'Sitio web diseñado para el lanzamiento de un modelo de negocio enfocado en adelantos salariales con bajos intereses.',
    tecnologies: [
      {
        name: 'Wordpress', // Nota: Podría ser 'WordPress' para la capitalización estándar.
        url: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
      }
    ],
    names: 'Creador'
  },


]

export const Projects_personal = [
  {
    image:'images/appcomics.webp',
    title:'Web Catálogo de cómics', // Corregido: Catalogo -> Catálogo, comics -> cómics
    description:'Página web para visualizar cómics consumiendo una API pública como práctica del uso de los FETCH en el uso full stack', // Corregido: Pagina -> Página, comics -> cómics, Api -> API, publica -> pública, practica -> práctica
    tecnologies: [
      { name: 'JavaScript',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
       },
      { name: 'React',
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
       },
       { name: 'Node',
         "url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        }
    ],
    names: 'Creador'
  },
  {
    image:'images/automatizacionqr.webp',
    title:'Automatización QR', // Corregido: Automatizacion -> Automatización
    description: 'Aplicativo web para automatizar un proceso laborioso de edición y estructuración de QRs', // Corregido: edicion -> edición, estructuracion -> estructuración
    tecnologies: [
      {
        name: 'Php',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'Laravel',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      }
    ],
    names: 'Creador'
  },
  {
    image:'images/mrrelacion.webp',
    title: 'Sistema de Roles',
    description: 'Modelo relacional creado para la gestión y autorización de roles desde SQL internamente todo con Stored Procedures', // Corregido: gestion -> gestión, autorizacion -> autorización
    tecnologies: [
      { name: 'JavaScript',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
       },
      { name: 'React',
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
       },
       { name: 'SQL',
          url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
        }
    ],
    names: 'Creador'
  },
  {
    image:'images/loginPromise2.webp',
    title: 'Promesas - Login Simulado',
    description: 'Simulación de un sistema de autenticación con manejo de estados asíncronos como práctica del uso de callbacks y promesas.', // Corregido: practica -> práctica, eliminado espacio antes del punto final.
    tecnologies: [
      { name: 'JavaScript',
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
       }
    ],
    names: 'Creador'
  }

]

//STUDY SECTION
export const Study_data = [
  {
    image: 'images/sena.webp',
    title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información', // Corregido: Tecnologo -> Tecnólogo, Analisis -> Análisis, informacion -> Información (capitalización para título)
    subTitle: 'SENA', // Corregido: Sena -> SENA (acrónimo)
    date: 'abr 2020 - may 2022',
    description: 'Ministerio de Tecnologías de la Información y las Comunicaciones' // Corregido: Tecnologías, Información, Comunicaciones (capitalización estándar)
  },
  {
    image: 'images/comunicacionestecnologias.webp',
    title: 'Desarrollador Web Full Stack',
    subTitle: 'Ministerio de Tecnologías de la Información y las Comunicaciones', // Corregido: Tecnologías, Información, Comunicaciones (capitalización estándar)
    date: 'jun 2024 - oct 2024',
    description: ''
  },
  {
    image: 'images/facebook_logo.webp',
    title: 'Desarrollo Móvil JavaScript', // Corregido: Movil -> Móvil
    subTitle: 'Meta - Coursera',
    date: 'Cursando',
    description: ''
  },
  {
    image: 'images/googleima.webp',
    title: 'Analizar datos para responder preguntas',
    subTitle: 'Google - Coursera',
    date: 'may 2024',
    description: ''
  },
  {
    image: 'images/googleima.webp',
    title: 'Proceso de datos sucios a datos limpios',
    subTitle: 'Google - Coursera',
    date: 'dic 2023',
    description: ''
  },
  {
    image: 'images/googleima.webp',
    title: 'Preparación de datos para la exploración', // Corregido: Preparacion -> Preparación, exploracion -> exploración
    subTitle: 'Google - Coursera',
    date: 'nov 2023',
    description: ''
  },
  {
    image: 'images/googleima.webp',
    title: 'Formular preguntas basadas en datos',
    subTitle: 'Google - Coursera',
    date: 'oct 2023',
    description: ''
  }
]

//SECTION TECNOLOGY

export const Technologies = [
  {
    name: "WORDPRESS",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg"
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "PYTHON",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "DJANGO",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },
  {
    name: "PHP",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  },
  {
    name: "LARAVEL",
  img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
  },
  {
    name: "GIT",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "FIGMA",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
  },
  {
    name: "SQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "IA",
  img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg"
  },
  {
    name: "JAVASCRIPT",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "REACT",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  }
];