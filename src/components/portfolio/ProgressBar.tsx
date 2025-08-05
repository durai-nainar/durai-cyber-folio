interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div 
      className="progress-bar"
      style={{ width: `${progress}%` }}
    />
  );
};