import styles from './PageContainer.module.scss';

type PageContainerProps = {
  children?: React.ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => {
  return <div className={styles.pageContainer}>{children}</div>;
};
