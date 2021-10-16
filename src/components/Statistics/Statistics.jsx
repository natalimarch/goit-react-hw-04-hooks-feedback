import styles from "./Statistics.module.css";
import Notification from "./Notification";
import PropTypes from "prop-types";

const Statistics = ({ values, total, positive }) => {
  const Grades = values.map((item, index) => {
    return (
      <li key={index}>
        {item[0]}:<span> {item[1]}</span>
      </li>
    );
  });
  return (
    <>
      {total ? (
        <ul className={styles.FeedbackList}>
          {Grades}
          <li>
            Total:
            <span> {total}</span>
          </li>
          <li>
            Positive feedback:
            <span> {positive}%</span>
          </li>
        </ul>
      ) : (
        <Notification message={"No feedback given"} />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
