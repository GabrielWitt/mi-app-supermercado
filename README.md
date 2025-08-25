# Supermarket List & Recipes App – Lista de Supermercado y Recetas 🛒🍲

**Ubicación / Location:** Quito, Ecuador  
**Tecnologías / Tech Stack:** React Native, TypeScript, Firebase (Firestore, Auth, Storage), React Navigation, Context API, Jest

---

## English Version

**Description:**  
A mobile app designed to optimize grocery shopping and cooking experiences, integrating real-time data synchronization and a user-friendly UI for budget-conscious users.

**Key Achievements:**  
- **End-to-End Development:** Designed and implemented the app from scratch using React Native (TypeScript) for cross-platform mobile support and Firebase for a serverless backend.  
- **State Management Optimization:** Leveraged React Context API to manage shopping lists, recipes, and user authentication, ensuring smooth performance and low memory usage.  
- **Advanced Firebase Integration:** Implemented Firestore for real-time updates, Authentication for secure user access, and Storage for optional item/recipe images.  
- **Scalable Architecture:** Structured the codebase with reusable UI components, modular screens, and service-based logic to facilitate future feature expansion.  
- **Budget Control Feature:** Added an interactive shopping summary to track real-time expenses vs. a predefined budget.  
- **Recipe-to-List Automation:** Enabled one-click ingredient import from recipes directly into the active shopping list.  
- **Testing Coverage:** Applied Jest and React Native Testing Library to ensure unit and integration test coverage for core components and workflows.

---

## Versión en Español

**Descripción:**  
Aplicación móvil diseñada para optimizar la experiencia de compra y cocina, integrando sincronización de datos en tiempo real y una interfaz amigable para usuarios que buscan controlar su presupuesto.

**Logros Clave:**  
- **Desarrollo de Principio a Fin:** La app fue diseñada e implementada desde cero usando React Native (TypeScript) para soporte multiplataforma y Firebase como backend sin servidor.  
- **Optimización de Gestión de Estado:** Se utilizó React Context API para gestionar listas de supermercado, recetas y autenticación de usuarios, asegurando un rendimiento fluido y bajo consumo de memoria.  
- **Integración Avanzada con Firebase:** Se implementó Firestore para actualizaciones en tiempo real, Authentication para acceso seguro y Storage para imágenes opcionales de ítems y recetas.  
- **Arquitectura Escalable:** Código estructurado con componentes reutilizables, pantallas modulares y lógica basada en servicios para facilitar futuras expansiones.  
- **Control de Presupuesto:** Resumen interactivo de compras que compara gastos en tiempo real contra un presupuesto predefinido.  
- **Automatización de Recetas a Lista:** Importación de ingredientes a la lista activa con un solo clic.  
- **Cobertura de Pruebas:** Uso de Jest y React Native Testing Library para pruebas unitarias e integradas de componentes y flujos principales.

---

## App Plan / Plan de Aplicación

**Objetivos / Goals 🎯**  
- **Gestión de Listas de Supermercado / Shopping List Management:** Crear, modificar y organizar listas de manera intuitiva.  
- **Control de Gastos / Budget Tracking:** Registrar precios y cantidades en tiempo real y comparar con presupuesto.  
- **Historial de Compras / Past Purchases:** Visualizar listas anteriores con precios registrados.  
- **Integración de Recetas / Recipe Integration:** Crear y guardar recetas; añadir ingredientes a la lista activa.  
- **Configuración Personalizada / Customization:** Bloquear edición de listas y establecer presupuestos.

**Arquitectura / Architecture 🏗️**  
- **Frontend (Cliente Móvil):** React Native, React Navigation, Context API  
- **Backend (Servicios en la Nube):** Firebase (Firestore, Auth, Storage)  

**Estructura de Proyecto / Project Structure:**  
- `src/components`: Componentes reutilizables de UI y funcionales  
- `src/screens`: Pantallas de la app  
- `src/navigation`: Configuración de rutas  
- `src/services`: Lógica de Firebase  
- `src/context`: Gestión de estado  

---

## Componentes / Components 🧱

**UI Generales / General UI:**  
- `Button`, `InputField`, `NumericInput`, `Checkbox`, `LoadingIndicator`, `Modal`, `Header`

**Lista de Supermercado / Shopping List:**  
- `ShoppingListItem`: Nombre, imagen, precio, cantidad, checkbox  
- `ShoppingListSummary`: Total acumulado y presupuesto restante  
- `ListSettingsButton`, `AddItemButton`

**Recetas / Recipes:**  
- `RecipeCard`, `IngredientItem`, `RecipeForm`  

**Historial de Compras / Past Shopping Lists:**  
- `PastShoppingListCard`, `PastShoppingListItemDetail`

---

**Contacto / Contact:**  
Gabriel Witt – Senior Frontend & Mobile Developer  
Email: gabrowitt@hotmail.com | Quito, Ecuador  
GitHub: [GabrielWitt](https://github.com/GabrielWitt)
