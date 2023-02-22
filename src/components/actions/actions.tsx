import { Action } from "../action/action";
import { Display } from "../display/display";
/* eslint-disable jsx-a11y/anchor-is-valid */
export function Actions() {
  const handleCall = () => {
    return <></>;
  };
  const handleHang = () => {
    return <></>;
  };

  return (
    <div className="actions">
      <Display></Display>

      <Action
        name={"call"}
        color={"red"}
        handle={handleCall} // Pasamos como prop una funcion que luego va a ser recbida por un evento. Esta funcion esta definida en el contexto, y cada vez que hacemos click en el boton tira de la funcion definida en el contexto
        class={"call"}
      ></Action>
      <Action
        name={"hang"}
        color={"green"}
        handle={handleHang}
        class={"hang - active"}
      ></Action>
    </div>
  );
}
