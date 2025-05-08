import './Cita.css';

const Cita = ({ cita }) => {
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <div className="cita">
      <h3>{mascota}</h3>
      <p><strong>Dueño:</strong> {propietario}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <p><strong>Síntomas:</strong> {sintomas}</p>
    </div>
  );
};

export default Cita;
