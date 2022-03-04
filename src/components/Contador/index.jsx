import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { diminuir, aumentar } from "../../store/modules/counter/actions";

export const Contador = () => {
  const numero = useSelector((state) => state.numero);
  const dispatch = useDispatch();

  const handleTirar = () => {
    dispatch(diminuir());
  };
  const handleAcrescentar = () => {
    dispatch(aumentar());
  };
  return (
    <div>
      <button onClick={() => handleTirar()}> - </button>
      <span> {numero} </span>
      <button onClick={() => handleAcrescentar()}> + </button>
    </div>
  );
};
