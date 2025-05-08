import Cita from './Cita';
import './ListadoCitas.css';

const ListadoCitas = ({ citas }) => {
  return (
    <div className="listado-citas">
      <h2>Listado de Citas</h2>
      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
    </div>
  );
};

export default ListadoCitas;