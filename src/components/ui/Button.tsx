interface ButtonProps {
  label: string;
  type: 'button' | 'submit' | 'reset';
  click: () => void;
}


export default function Button({ label, type, click }:ButtonProps) {
  return (
    <div>
      <button
        onClick={click}
        className={`ring ring-blue-800 py-1 px-4 rounded-lg shadow-sm shadow-blue-300  bg-blue-800 text-white`}
        type={type}
      >
        <h4>{label}</h4>
      </button>
    </div>
  );
}

