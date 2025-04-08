interface ButtonProps {
  text: string;
  size: 'small' | 'medium' | 'large';
}

function Button({ text, size }: ButtonProps) {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'rounded-xl max-h-[44px] font-semibold bg-[#FF00C7] text-white',
  };

  return <button className={`${sizeClasses[size]}`}>{text}</button>;
}

export default Button;
