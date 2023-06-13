import style from "../../index.module.css";
import { useState } from "react";
import data from "../topics/topics.json";
import extractQuestionData from "./extractQuestionData";

const BotonOpciones = ({ opciones, handleOptionSelection }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
    handleOptionSelection(opcion);
    setMostrarOpciones(false);
  };

  return (
    <div>
      <button onClick={() => setMostrarOpciones(!mostrarOpciones)}>
        {opcionSeleccionada ? opcionSeleccionada : "Seleccionar opción"}
      </button>
      {mostrarOpciones && (
        <ul>
          {opciones.map((opcion) => (
            <li key={opcion} onClick={() => handleOpcionSeleccionada(opcion)}>
              {opcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BotonOpciones;