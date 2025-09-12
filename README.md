# Ejemplo de Integración de Chatbot Asistente

Este proyecto es un ejemplo básico para integrar el **chatbot asistente de Tripilots** en aplicaciones modernas desarrolladas con **React + TypeScript + Vite**.  

La integración se realiza mediante un **iframe** y puede adaptarse fácilmente a cualquier web moderna o CMS (como WordPress).

---

## 🚀 Tecnologías

- [React](https://react.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Vite](https://vitejs.dev/)  

---

## 🔗 Estructura del iframe

El chatbot se integra mediante un iframe que utiliza la **URL base** y el **companyId** proporcionado por correo electrónico.

- **URL base:** `https://sac.tripilots.com`  
- **Forma final:** `https://sac.tripilots.com/companyId`  

**Ejemplo de iframe básico:**

```html
<iframe 
  id="chatbot" 
  src="https://sac.tripilots.com/companyId" 
  width="300" 
  height="600">
</iframe>
```

## 📦 Ejemplo en React
Inserción del iframe en JSX

```jsx
export default function App() {
  return (
    <iframe
      id="chatbot"
      src="https://sac.tripilots.com/companyId"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        height: "600px",
        border: "none",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    />
  );
}
```

## Comunicación con el iframe (postMessage)

El chatbot envía mensajes al padre mediante postMessage para indicar eventos como apertura o cierre del modal.

El cliente debe escuchar estos mensajes para ajustar dinámicamente el tamaño del iframe.

```jsx
import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.origin !== "https://sac.tripilots.com") return;

      if (event.data === "chatbot-open") {
        document.getElementById("chatbot")!.style.height = "600px";
      }

      if (event.data === "chatbot-close") {
        document.getElementById("chatbot")!.style.height = "80px";
      }
    };

    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  }, []);

  return (
    <iframe
      id="chatbot"
      src="https://sac.tripilots.com/companyId"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        height: "80px",
        border: "none",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    />
  );
}
```

## 🖌️ Personalización

El tamaño, posición y estilos del iframe deben ser gestionados por el equipo integrador.

Se recomienda colocar el chatbot en la esquina inferior derecha.

El desarrollador del chatbot no puede controlar dinámicamente el iframe desde fuera (limitaciones de seguridad cross-origin).

## 🧩 Ejemplo en WordPress

En WordPress puedes usar:

- Bloques HTML personalizados en el editor de páginas.
- Widgets HTML para incluir el iframe en áreas específicas.
- Plugins de edición de plantillas si quieres mayor control.

Ejemplo mínimo en WordPress:
```html
<iframe 
  id="chatbot" 
  src="https://sac.tripilots.com/companyId" 
  width="300" 
  height="600">
</iframe>
```

## ⚠️ Nota Importante

El control del tamaño y comportamiento (mostrar/ocultar, abrir modal, reposicionar, etc.) depende completamente del integrador final.

## 📚 Buenas prácticas

- Usar la ubicación recomendada (esquina inferior derecha).
- Personalizar estilos con CSS propio del proyecto.
- Si surgen problemas o tienes mejoras, contacta con el equipo de soporte.