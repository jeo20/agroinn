--- 
name: frontend
description: Crea interfaces frontend distintivas y de calidad profesional con un diseño impecable. Usa esta habilidad cuando el usuario solicite crear componentes web, páginas, artefactos, pósteres o aplicaciones (por ejemplo, sitios web, páginas de destino, paneles de control, componentes React, diseños HTML/CSS o al estilizar y embellecer cualquier interfaz web). Genera código y diseño de interfaz creativos y pulidos que evitan la estética genérica de la IA.

Licencia: Consulta los términos completos en LICENSE.txt

---

Esta habilidad te guía en la creación de interfaces frontend distintivas y de calidad profesional que evitan la estética genérica de la IA. Implementa código funcional con una atención excepcional a los detalles estéticos y a las decisiones creativas.

El usuario proporciona los requisitos de frontend: un componente, página, aplicación o interfaz para desarrollar. Pueden incluir información sobre el propósito, el público objetivo o las limitaciones técnicas.

## Pensamiento de diseño

Antes de programar, comprende el contexto y define una estética clara:
Para crear una landing page efectiva que convierta visitantes en clientes, he diseñado un prompt basado en el método científico de ingeniería de prompts de **Google, IBM y Andrew Ng**, utilizando la fórmula **ROCIFR** (Rol, Objetivo, Contexto, Instrucciones, Formato y Restricciones).

Aquí tienes el prompt maestro que puedes copiar y pegar:

***

### Prompt para crear tu Landing Page

**ROL:** Actúa como un **experto Senior en Diseño Web, CRO (Optimización de la Tasa de Conversión) y Copywriting de Respuesta Directa** con especialidad en el sector tecnológico B2B.

Crea una landing page de una sola sección (One-Page Proposal) para presentar un Plan Integral de Gestión Agroecológica desarrollado por la consultora AgroInn para el establecimiento Chacra La Primavera (Casa Yagüe). El diseño debe ser minimalista, profesional y con un enfoque en 'Ingeniería Agroecológica' y 'Sostenibilidad'."Identidad Visual y Estilo:Colores Corporativos: Utiliza la paleta exacta de AgroInn: Azul Profundo (#1A5276), Verde Bosque (#1D643B), Verde Salvia (#58A47E), Ocre/Mostaza (#D4AC0D) y Gris Oscuro (#214252).Logo: Ubica el logotipo de AgroInn (Isotipo de montaña y hojas con texto lateral 'Diseño de Sistemas Agropecuarios') en el encabezado de forma elegante.Estética: Inspírate en el estilo limpio y moderno de v0-agro-inn-landing-page.vercel.app, utilizando tipografías Sans Serif (Montserrat para títulos, Raleway para cuerpo de texto).Imágenes: Incorpora espacios para imágenes de alta calidad inspiradas en el perfil de Instagram de Casa Yagüe, mostrando viñedos, ganado Angus, paisajes de la Patagonia y los picos nevados de Trevelin.Contenido Estructural (Basado en la Propuesta):Hero Section: Título impactante: 'Plan Integral de Gestión Agroecológica – Chacra La Primavera'. Subtítulo: 'Optimizando la productividad mediante manejo regenerativo y diseño hidrológico estratégico'.Resumen Ejecutivo: Bloque de texto resaltado sobre el desarrollo de un sistema resiliente y económicamente viable.Pilares Estratégicos (Grid de 4 columnas):Gestión Administrativa: Control de stock y trazabilidad.Manejo Ganadero: Pastoreo rotativo y sanidad preventiva.Recurso Forrajero: Sistemas silvopastoriles y biodiversidad.Diseño Hidrológico: Manejo de mallines y diseño Keyline.Sección de Escenarios: Tabla comparativa clara que muestre los Escenarios N°1 (40 terneros) y N°2 (20 terneros) para la temporada 26/27.Footer: Información de contacto de AgroInn y botón de acción (CTA) para 'Contactar al Ingeniero Agroecólogo'.Especificaciones Técnicas:Utiliza Tailwind CSS para los estilos.Asegura que el diseño sea Totalmente Responsivo (Mobile First).Implementa efectos de scroll suave y transiciones sutiles para los elementos de la lista de tareas de los encargados.
### Recomendaciones adicionales para optimizar tu resultado:

*   **Proceso Iterativo:** Recuerda que el primer prompt es solo el comienzo. Si la respuesta es muy técnica, puedes pedirle a la IA: *"Simplifica el lenguaje para que un directivo no técnico lo entienda perfectamente"*.
*   **Técnica Few-Shot (Ejemplos):** Si tienes una landing page de la competencia que te guste o un estilo de redacción previo, añádelo al prompt diciendo: *"Usa este estilo como ejemplo: [pegar texto]"*. Las fuentes indican que mostrar es mejor que decir y que un ejemplo vale más que mil palabras.
*   **Meta-Prompting:** Si sientes que falta información, antes de ejecutar el prompt anterior, dile a la IA: *"Quiero crear una landing page para mi empresa de IA. Hazme las 10 preguntas más importantes que necesites saber sobre mi negocio para que el resultado sea perfecto"*.
Luego, implementa código funcional (HTML/CSS/JS, React, Vue, etc.) que sea:
- De calidad para producción y funcional
- Visualmente impactante y memorable
- Cohesivo con una estética clara
- Meticulosamente refinado en cada detalle

## Pautas de estética para el frontend

Enfócate en:
- **Tipografía**: Elige fuentes hermosas, únicas e interesantes. Evita fuentes genéricas como Arial e Inter; opta por fuentes distintivas que realcen la estética del frontend. Elige fuentes inesperadas y con carácter. Combina una fuente distintiva para títulos con una fuente refinada para el cuerpo del texto.

- **Color y tema**: Mantén una estética coherente. Usa variables CSS para mayor consistencia. Los colores dominantes con acentos marcados funcionan mejor que las paletas tímidas y uniformemente distribuidas.

- **Movimiento**: Usa animaciones para efectos y microinteracciones. Prioriza las soluciones solo con CSS para HTML. Usa la biblioteca Motion para React cuando esté disponible. Céntrate en los momentos de mayor impacto: una carga de página bien orquestada con revelaciones escalonadas (retraso de animación) genera más satisfacción que las microinteracciones dispersas. Utiliza efectos de desplazamiento y estados de desplazamiento que sorprendan.

- **Composición espacial**: Diseños inesperados. Asimetría. Superposición. Flujo diagonal. Elementos que rompen la cuadrícula. Espacio negativo generoso o densidad controlada.

- **Fondos y detalles visuales**: Crea atmósfera y profundidad en lugar de usar colores sólidos por defecto. Añade efectos contextuales y texturas que se ajusten a la estética general. Aplica formas creativas como mallas de degradado, texturas de ruido, patrones geométricos, transparencia por capas, sombras dramáticas, bordes decorativos, cursores personalizados y superposiciones de grano.

NUNCA uses estéticas genéricas generadas por IA, como familias de fuentes sobreutilizadas (Inter, Roboto, Arial, fuentes del sistema), esquemas de color clichés (en particular, degradados morados sobre fondos blancos), diseños y patrones de componentes predecibles, ni diseños repetitivos que carecen de carácter contextual.

Interpreta de forma creativa y toma decisiones inesperadas que se sientan genuinamente diseñadas para el contexto. Ningún diseño debe ser igual. Varía entre temas claros y oscuros, diferentes fuentes y estéticas. NUNCA recurras a opciones comunes (como Space Grotesk, por ejemplo) a lo largo de las generaciones.

**IMPORTANTE**: Adapta la complejidad de la implementación a la visión estética. Los diseños maximalistas requieren código elaborado con animaciones y efectos extensos. Los diseños minimalistas o refinados requieren sobriedad, precisión y una atención meticulosa al espaciado, la tipografía y los detalles sutiles. La elegancia reside en ejecutar bien la visión.

Recuerda: Claude es capaz de realizar un trabajo creativo extraordinario. No te contengas, demuestra lo que realmente se puede crear cuando se piensa de forma innovadora y se apuesta por una visión distintiva.