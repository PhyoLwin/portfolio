import { Dispatch, FC, ReactNode, SetStateAction, useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  text: ReactNode;
  className?: string;
}

export const Toast: FC<Props> = ({ show, setShow, text, className }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  return (
    show && (
      <div
        className={`${!show ? 'hidden' : ''} flex min-h-14 min-w-52 items-center justify-between gap-5 rounded-2xl border border-black bg-white p-5 ${className}`}
      >
        {text}
        <button
          onClick={() => setShow(false)}
          aria-label="Close"
          className="focus:outline-none"
        >
          <FaXmark className="text-gray-400" />
        </button>
      </div>
    )
  );
};
