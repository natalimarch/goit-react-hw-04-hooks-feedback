import { useState } from "react";
import styles from "./Feedback.module.css";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";

const Feedback = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const addFeedback = (name) => {
    setState({
      ...state,
      [name]: state[name] + 1,
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    const positive = Math.round((good / total) * 100);
    return positive;
  };

  const names = Object.keys(state);

  return (
    <div className={styles.FeedbackForm}>
      <Section title="Please leave feedback" />
      <FeedbackOptions options={names} onLeaveFeedback={addFeedback} />
      <Section title="Statistics" />
      <Statistics
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
        total={countTotalFeedback()}
        positive={countPositiveFeedbackPercentage()}
      />
    </div>
  );
};

export default Feedback;
// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countFeedback = (name) => {
//     // e.preventDefault();
//     // console.log(e.currentTarget.name);
//     const currentState = name;
//     this.setState((prevState) => ({
//       [currentState]: prevState[currentState] + 1,
//     }));
//     this.countTotalFeedback();
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const { countTotalFeedback } = this;
//     const total = countTotalFeedback();
//     const positive = Math.round((good / total) * 100);
//     return positive;
//   };

//   render() {
//     const {
//       countFeedback,
//       countTotalFeedback,
//       countPositiveFeedbackPercentage,
//     } = this;
//     const { good, neutral, bad } = this.state;
//     const onLeaveFeedback = { countFeedback };
//     const names = Object.keys(this.state);
//     return (
//       <div className={styles.FeedbackForm}>
//         <Section title="Please leave feedback" />
//         <FeedbackOptions options={names} onLeaveFeedback={countFeedback} />
//         <Section title="Statistics" />
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={countTotalFeedback()}
//           positive={countPositiveFeedbackPercentage()}
//         />
//       </div>
//     );
//   }
// }
//
