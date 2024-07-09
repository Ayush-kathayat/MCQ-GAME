
# MCQ Game App

This is a simple multiple-choice question (MCQ) game built with React and Vite. The game displays one question per screen, allows users to select an answer, and shows the final score upon completion of the quiz.

## Features

- One-question-per-screen navigation
- User-friendly design
- Final score display upon completing the questions

## Project Structure

```
/src
  /components
    Question.jsx
    Question.css
    Quiz.jsx
    Quiz.css
  /data
    questions.js
  App.jsx
  main.jsx
  index.css
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mcq-game.git
   cd mcq-game
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the app.

## Usage

- The app starts with a welcome screen showing the first question.
- Select an answer by clicking on one of the options.
- Click the "Next" button to proceed to the next question.
- After answering all questions, the final score is displayed.

## Components

### Question Component

`Question.jsx` displays individual questions and options. It handles the user's answer selection.

### Quiz Component

`Quiz.jsx` manages the state and logic of the quiz, including navigation between questions and score calculation.

### App Component

`App.jsx` is the root component that includes the `Quiz` component and provides the main structure of the app.

## Styling

The app uses basic CSS for styling. Styles are defined in `styles.css`, `Question.css`, and `Quiz.css`.

## Sample Questions Data

`questions.js` contains the sample questions used in the quiz. You can modify or add more questions as needed.

## License

This project is licensed under the MIT License. 
