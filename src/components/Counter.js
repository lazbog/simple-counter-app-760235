'use client';

import { useState, useCallback } from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showReset?: boolean;
  onValueChange?: (value: number) => void;
}

export default function Counter({
  initialValue = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  label = 'Counter',
  showReset = true,
  onValueChange,
}: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prevCount) => {
      const newValue = Math.min(prevCount + step, max);
      onValueChange?.(newValue);
      return newValue;
    });
  }, [step, max, onValueChange]);

  const decrement = useCallback(() => {
    setCount((prevCount) => {
      const newValue = Math.max(prevCount - step, min);
      onValueChange?.(newValue);
      return newValue;
    });
  }, [step, min, onValueChange]);

  const reset = useCallback(() => {
    setCount(initialValue);
    onValueChange?.(initialValue);
  }, [initialValue, onValueChange]);

  const isMinReached = count <= min;
  const isMaxReached = count >= max;

  return (
    <div className={styles.counterContainer} role="group" aria-labelledby={`${label}-label`}>
      <label id={`${label}-label`} className={styles.counterLabel}>
        {label}
      </label>
      
      <div className={styles.counterControls}>
        <button
          type="button"
          onClick={decrement}
          disabled={isMinReached}
          className={`${styles.counterButton} ${styles.decrement} ${
            isMinReached ? styles.disabled : ''
          }`}
          aria-label={`Decrease ${label} by ${step}`}
          aria-disabled={isMinReached}
        >
          −
        </button>
        
        <span className={styles.counterValue} aria-live="polite" aria-atomic="true">
          {count}
        </span>
        
        <button
          type="button"
          onClick={increment}
          disabled={isMaxReached}
          className={`${styles.counterButton} ${styles.increment} ${
            isMaxReached ? styles.disabled : ''
          }`}
          aria-label={`Increase ${label} by ${step}`}
          aria-disabled={isMaxReached}
        >
          +
        </button>
      </div>
      
      {showReset && (
        <button
          type="button"
          onClick={reset}
          className={styles.resetButton}
          aria-label={`Reset ${label} to ${initialValue}`}
        >
          Reset
        </button>
      )}
      
      {(isMinReached || isMaxReached) && (
        <div className={styles.limitMessage} role="status" aria-live="polite">
          {isMinReached && `Minimum value (${min}) reached`}
          {isMaxReached && `Maximum value (${max}) reached`}
        </div>
      )}
    </div>
  );
}