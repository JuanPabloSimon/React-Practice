import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup 
    // --> cuando el componente se desmonta
    // --> cuando cambian las dependencias (estado)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]);
  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#000",
          borderRadius: "50%",
          opacity: 0.5,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h3> Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar " : "Activar "}seguir puntero
      </button>
    </main>
  );
}

export default App;
