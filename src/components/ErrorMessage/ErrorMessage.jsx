import styles from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return <p className={styles.error}>No images were found for your query</p>;
};
