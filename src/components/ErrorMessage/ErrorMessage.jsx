import styles from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return <p className={styles.error}>Unknown error, please try again later</p>;
};
