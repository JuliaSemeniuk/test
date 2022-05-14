interface Props {
  id: string;
  audio: string;
  songTitle: string;
  description: string;
  image: string;
  name: string;

  isSelected: boolean;
}

const Option: React.FC<Props> = ({ songTitle }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label className="form-check-label" htmlFor="flexRadioDefault1">
        {songTitle}
      </label>
    </div>
  );
};

export default Option;
