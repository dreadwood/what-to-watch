type ShowMoreButtonProps = {
  onButtonCLick: () => void
}

function ShowMoreButton({onButtonCLick}: ShowMoreButtonProps) {
  return (
    <div className="catalog__more">
      <button className="catalog__button"
        type="button"
        onClick={() => onButtonCLick()}
      >Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
