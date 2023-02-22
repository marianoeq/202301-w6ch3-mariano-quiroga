import { SingleKey } from "../singleKey/single.key";
import { MOCK_NUMBER } from "../../mock/mock.number";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteNumber } from "../../reducer/phone.actions.creator";

export function KeyBoard() {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(deleteNumber(""));
  };

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {MOCK_NUMBER.map((number: string) => (
          <SingleKey key={number} number={number}></SingleKey>
        ))}
        <li>
          <button className="key big" onClick={handleClick}>
            delete
          </button>
        </li>
      </ol>
    </div>
  );
}
