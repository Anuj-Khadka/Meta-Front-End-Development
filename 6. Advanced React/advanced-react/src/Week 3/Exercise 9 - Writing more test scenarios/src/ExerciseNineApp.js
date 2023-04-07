import FeedbackForm from "./FeedbackForm";

function ExerciseNineApp() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ExerciseNineApp;
