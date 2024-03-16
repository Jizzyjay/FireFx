import PropTypes from 'prop-types';

const TestimonialCard = ({ topic, description, profileImage, name, job, className }) => {
  return (
    <div className={`bg-[#757575] w-[350px] h-[350px] p-6 rounded-lg shadow-md ${className}`}>
      <h3 className="text-lg font-semibold">{topic}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="flex items-center mt-4">
        <img src={profileImage} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-gray-600">{job}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  topic: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TestimonialCard.defaultProps = {
  className: '',
};

export default TestimonialCard;
