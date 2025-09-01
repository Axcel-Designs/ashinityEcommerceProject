interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  click?: () => void;
}

export default function Button({ label, type, click }:ButtonProps) {
  return (
    <div>
      <button
        onClick={click}
        className={` py-2 px-4 w-full bg-gray-400 text-black`}
        type={type}
      >
        <h4>{label}</h4>
      </button>
    </div>
  );
}

