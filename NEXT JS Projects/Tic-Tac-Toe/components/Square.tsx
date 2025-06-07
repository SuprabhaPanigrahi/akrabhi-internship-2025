"use client";
type SquareProps = {
  value: 'X' | 'O' | null;
  onClick: () => void;
};

export default function Square({ value, onClick }: SquareProps) {
  const textColor = value === 'X' ? 'text-red-600' : 'text-blue-600';
  
  return (
    <button
      onClick={onClick}
      className={`
        w-24 h-24 text-5xl font-bold 
        border-2 border-gray-800 
        flex items-center justify-center
        bg-white hover:bg-gray-100
        ${value ? textColor : 'text-black'}
      `}
    >
      {value}
    </button>
  );
}