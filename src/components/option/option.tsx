import { makeOptionSelected } from "features/quiz/quizSlice";
import { useAppDispatch } from "app/hooks";

interface Props {
  id: string;
  audio: string;
  songTitle: string;
  description: string;
  image: string;
  name: string;

  isActive: boolean; //just for choose and show info
  isAnswered: boolean; //isActive - for highlighting red or green
  correctAnswerId: string;
  isCorrectSelected: boolean;
}

const Option: React.FC<Props> = ({
  id,
  isAnswered,
  songTitle,
  correctAnswerId,
  isCorrectSelected,
}) => {
  const dispatch = useAppDispatch();

  let style = {};

  if (isAnswered) {
    if (id === correctAnswerId) {
      style = { backgroundColor: "var(--bs-green)" };
    } else {
      style = { backgroundColor: "var(--bs-red)" };
    }
  }

  return (
    <div
      className="form-check"
      onClick={(event) => {
        if (isCorrectSelected) {
          return;
        }

        dispatch(makeOptionSelected(id));
      }}
      style={style}
    >
      {/* <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      /> */}
      <label className="form-check-label" htmlFor="flexRadioDefault1">
        {songTitle}
      </label>
    </div>
  );
};

export default Option;
