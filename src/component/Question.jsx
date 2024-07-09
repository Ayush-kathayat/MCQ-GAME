
import './Question.css';

const Question = ({ question, options, handleAnswer, selectedOption }) => {
  return (
    <div className="question-container">
      <h2 className='ques'>{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
