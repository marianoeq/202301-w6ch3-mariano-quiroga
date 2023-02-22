import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
export function Display() {
  const number = useSelector((state: RootState) => state.phone);
  return (
    <>
      <span className="number">{number}</span>
    </>
  );
}
