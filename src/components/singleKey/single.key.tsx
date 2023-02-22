//PORQUE NO ME DEJA PASARLE TIPO STRING AL PROPS

import { useDispatch } from "react-redux";
import { clickNumber } from "../../reducer/phone.actions.creator";
import { AppDispatch } from "../../store/store";

type keyProps = {
  number: string;
};

export function SingleKey({ number }: keyProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = (number: string) => {
    dispatch(clickNumber(number));
  };

  return (
    <>
      <button onClick={() => handleClick(number)} className="key">
        {number}
      </button>
    </>
  );
}
