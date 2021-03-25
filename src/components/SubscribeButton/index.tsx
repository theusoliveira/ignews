import styles from './styles.module.scss';

interface SubscripeProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscripeProps) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}