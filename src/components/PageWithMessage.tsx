type Props = {
  message: String;
  btnText: String;
  btnFunction: () => void;
};
export default function PageWithMessage({
  message,
  btnText,
  btnFunction,
}: Props) {
  return (
    <div className="flex min-h-screen justify-center items-center text-2xl">
      <div className="grid grid-rows-2">
        <h2>{message}</h2>
        <button
          className="py-2 px-4 bg-blue-700 rounded-md border border-white outline-none"
          onClick={(e) => {
            e.preventDefault();
            btnFunction();
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
