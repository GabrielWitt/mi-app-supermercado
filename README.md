# Supermarket List & Recipes App – Lista de Supermercado y Recetas 🛒🍲

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase)
![License](https://img.shields.io/badge/License-MIT-green)

**Ubicación / Location:** Quito, Ecuador  
**Tecnologías / Tech Stack:** React Native, TypeScript, Firebase (Firestore, Auth, Storage), React Navigation, Context API, Jest

---

## English Version

**Description:**  
A mobile app designed to optimize grocery shopping and cooking experiences, integrating real-time data synchronization and a user-friendly UI for budget-conscious users.

**Key Achievements:**  
- **End-to-End Development:** Designed and implemented from scratch using React Native (TypeScript) for cross-platform mobile support and Firebase as a serverless backend.  
- **State Management Optimization:** Leveraged React Context API for smooth performance and low memory usage.  
- **Advanced Firebase Integration:** Firestore for real-time updates, Authentication for secure access, Storage for optional images.  
- **Scalable Architecture:** Reusable UI components, modular screens, and service-based logic for easy expansion.  
- **Budget Control Feature:** Interactive shopping summary to track expenses vs. budget.  
- **Recipe-to-List Automation:** One-click ingredient import from recipes to shopping list.  
- **Testing Coverage:** Unit and integration tests using Jest & React Native Testing Library.

---

## Versión en Español

**Descripción:**  
Aplicación móvil diseñada para optimizar la experiencia de compra y cocina, con sincronización en tiempo real y una interfaz amigable para usuarios que controlan su presupuesto.

**Logros Clave:**  
- **Desarrollo de Principio a Fin:** Creación completa usando React Native (TypeScript) y Firebase.  
- **Optimización de Estado:** Context API para listas, recetas y autenticación con buen rendimiento.  
- **Integración Avanzada con Firebase:** Firestore, Auth y Storage.  
- **Arquitectura Escalable:** Componentes reutilizables y lógica modular.  
- **Control de Presupuesto:** Resumen interactivo de gastos vs. presupuesto.  
- **Automatización Recetas-Lista:** Importación de ingredientes con un clic.  
- **Cobertura de Pruebas:** Jest y React Native Testing Library.

---

## App Plan / Plan de Aplicación

**Objetivos / Goals 🎯**  
- **Gestión de Listas / Shopping List Management**: Crear, modificar y organizar listas.  
- **Control de Gastos / Budget Tracking**: Registrar precios y comparar con presupuesto.  
- **Historial de Compras / Past Purchases**: Visualizar listas pasadas.  
- **Recetas / Recipe Integration**: Crear, guardar y añadir ingredientes a la lista.  
- **Configuración Personalizada / Customization**: Bloquear edición y establecer presupuestos.

**Arquitectura / Architecture 🏗️**  
- **Frontend (Cliente Móvil)**: React Native, React Navigation, Context API  
- **Backend (Servicios en la Nube)**: Firebase (Firestore, Auth, Storage)  

**Estructura de Proyecto / Project Structure:**  
- `src/components`: Componentes reutilizables  
- `src/screens`: Pantallas de la app  
- `src/navigation`: Rutas y navegación  
- `src/services`: Lógica Firebase  
- `src/context`: Gestión de estado  

---

## Componentes / Components 🧱

**UI Generales / General UI:**  
`Button`, `InputField`, `NumericInput`, `Checkbox`, `LoadingIndicator`, `Modal`, `Header`

**Lista de Supermercado / Shopping List:**  
`ShoppingListItem`, `ShoppingListSummary`, `ListSettingsButton`, `AddItemButton`

**Recetas / Recipes:**  
`RecipeCard`, `IngredientItem`, `RecipeForm`  

**Historial de Compras / Past Shopping Lists:**  
`PastShoppingListCard`, `PastShoppingListItemDetail`

---

## Screenshots / Capturas

![Home](./screenshots/home.png)
![Shopping List](./screenshots/shopping_list.png)
![Recipes](./screenshots/recipes.png)
![Past Purchases](./screenshots/past_purchases.png)

> *(Agrega tus capturas dentro de la carpeta `/screenshots` y reemplaza los nombres de archivo.)*

---

## Testing

- **Unit & Integration:** Jest + React Native Testing Library  
- **Coverage:** Core components & workflows  

---

## Contacto / Contact

Gabriel Witt – Senior Frontend & Mobile Developer  
Email: gabrowitt@hotmail.com | Quito, Ecuador  
GitHub: [GabrielWitt](https://github.com/GabrielWitt)
