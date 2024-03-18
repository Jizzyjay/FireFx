import PropTypes from 'prop-types';
import Button from './Button';

const OfferCard = ({ header, description, buttonText, buttonColor, buttonTextColor, hoverColor, buttonBorderColor, buttonBorder }) => {
  return (
    <div className="bg-[#f8f8f8] border border-[#d9d9d9] shadow-md rounded-3xl w-[280px] h-[500px] flex flex-col">
      <div className="rounded-lg p-2 flex-1">
        <h2 className="text-lg font-semibold p-8">{header}</h2>
        <p className="text-gray-700 p-4 leading-8">{description}</p>
      </div>
      <div className="bg-white p-6 w-full rounded-b-3xl">
        <Button
            text={buttonText}
            color={buttonColor}
            textColor={buttonTextColor}
            border={buttonBorder}
            borderColor={buttonBorderColor}
            hoverColor={hoverColor}
          />
      </div>
    </div>
  );
};

OfferCard.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  buttonBorder: PropTypes.bool.isRequired,
  buttonColor: PropTypes.string.isRequired,
  buttonTextColor: PropTypes.string.isRequired,
  buttonBorderColor: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,

};

export default OfferCard;
