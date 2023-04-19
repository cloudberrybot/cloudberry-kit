type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <div className='flex justify-center mb-4'>
      <button
        type='button'
        onClick={onClick}
        className='py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 dark:bg-gray-600 dark:hover:bg-gray-200 dark:hover:text-gray-800 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
      >
        <svg
          className='w-3 h-3'
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
        >
          <path
            d='M2.63452 7.50001L13.6345 7.5M8.13452 13V2'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
        {label}
      </button>
    </div>
  );
}
