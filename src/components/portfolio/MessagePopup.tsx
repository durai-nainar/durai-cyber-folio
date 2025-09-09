import { useEffect, useState } from 'react';

interface MessagePopupProps {
  isVisible: boolean;
  isSuccess: boolean;
  onClose: () => void;
}

export const MessagePopup = ({ isVisible, isSuccess, onClose }: MessagePopupProps) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (isVisible) {
      setCountdown(5);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className={`${
        isSuccess 
          ? 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-900/90 dark:via-green-900/90 dark:to-teal-900/90 border-2 border-emerald-400 dark:border-emerald-600' 
          : 'bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 dark:from-red-900/90 dark:via-pink-900/90 dark:to-rose-900/90 border-2 border-red-400 dark:border-red-600'
      } rounded-3xl p-8 text-center max-w-sm mx-4 shadow-2xl popup-scale-in backdrop-blur-lg`}>
        
        <div className={`mx-auto mb-4 text-6xl animate-bounce ${
          isSuccess ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
        }`}>
          {isSuccess ? '✔️' : '✖️'}
        </div>
        
        <h3 className={`text-xl font-bold mb-2 ${
          isSuccess ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'
        }`}>
          {isSuccess ? 'Message Sent Successfully!' : 'Message Failed to Send!'}
        </h3>
        
        <p className={`mb-4 ${
          isSuccess ? 'text-emerald-600/80 dark:text-emerald-400/80' : 'text-red-600/80 dark:text-red-400/80'
        }`}>
          {isSuccess ? 'Thank you for reaching out. I\'ll get back to you soon.' : 'Please check your inputs and try again.'}
        </p>
        
        <div className={`text-lg font-bold mb-2 ${
          isSuccess ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'
        }`}>
          Closing in {countdown}s
        </div>
      </div>
    </div>
  );
};