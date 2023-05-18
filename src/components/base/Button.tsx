import cn from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  active: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({ className, active, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        'text-base leading-tight font-bold rounded-full py-2 px-4 focus:outline focus:outline-offset-2 focus:outline-link dark:focus:outline-link-dark inline-flex items-center my-1',
        {
          'bg-link border-link text-white hover:bg-link focus:bg-link active:bg-link':
            active,
          'bg-transparent text-primary dark:text-primary-dark active:text-primary shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark hover:bg-gray-40/5 active:bg-gray-40/10  hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10':
            !active,
        }
      )}>
      {children}
    </button>
  );
}

export default Button;
