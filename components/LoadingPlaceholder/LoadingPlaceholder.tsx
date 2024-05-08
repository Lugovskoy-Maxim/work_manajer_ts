import styles from './loadingPlaceholder.module.scss'; // Стили для заглушки загрузки

const LoadingPlaceholder: React.FC = () => {
  return (
    <div className={styles.placeholder}>
      <div className={styles.gradient}></div>
    </div>
  );
};

export default LoadingPlaceholder;