
import { useState } from 'react';
import './Formulario.css';

const Formulario = ({ onAgregarCita }) => {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (!mascota || !propietario || !fecha || !hora || !sintomas) return;

    const nuevaCita = {
      mascota,
      propietario,
      fecha,
      hora,
      sintomas,
    };

    onAgregarCita(nuevaCita);

    // Limpiar campos
    setMascota('');
    setPropietario('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <form className="formulario" onSubmit={manejarSubmit}>
      <h2>Crear Cita</h2>

      <label>Nombre Mascota</label>
      <input
        type="text"
        name="mascota"
        className="u-full-width"
        placeholder="Nombre Mascota"
        value={mascota}
        onChange={(e) => setMascota(e.target.value)}
      />

      <label>Nombre Dueño</label>
      <input
        type="text"
        name="propietario"
        className="u-full-width"
        placeholder="Nombre dueño de la mascota"
        value={propietario}
        onChange={(e) => setPropietario(e.target.value)}
      />

      <label>Fecha</label>
      <input
        type="date"
        name="fecha"
        className="u-full-width"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <label>Hora</label>
      <input
        type="time"
        name="hora"
        className="u-full-width"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />

      <label>Síntomas</label>
      <textarea
        name="sintomas"
        className="u-full-width"
        placeholder="Describí los síntomas"
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
      ></textarea>

      <button type="submit" className="u-full-width button-primary">
        Agregar Cita
      </button>
    </form>
  );
};

export default Formulario;

