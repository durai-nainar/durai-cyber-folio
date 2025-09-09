import { useState, useEffect } from 'react';

interface MessagePopupProps {
  isSuccess: boolean;
  onClose: () => void;
}

export const MessagePopup = ({ isSuccess, onClose }: MessagePopupProps) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="success-popup rounded-3xl p-8 text-center max-w-sm mx-4 shadow-2xl animate-scale-in backdrop-blur-lg">
        <div className="success-tick">
          {isSuccess ? '✅' : '❌'}
        </div>
        <h3 className="text-xl font-bold mb-2">
          {isSuccess ? 'Message Sent Successfully!' : 'Message Failed to Send'}
        </h3>
        <p className="mb-4">
          {isSuccess 
            ? "Thank you for reaching out. I'll get back to you soon." 
            : 'Please check your inputs and try again.'
          }
        </p>
        <div className="countdown-timer">
          Auto-closing in {countdown}s
        </div>
      </div>
    </div>
  );
};