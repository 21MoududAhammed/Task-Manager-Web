export default function ConfirmPopUp({ setIsShow, setIsDelete }) {
  return (
    <div className="w-96  h-50 bg-slate-600 text-white px-10 py-5 absolute top-40 left-[35%] z-50 rounded-2xl">
      <h3 className="text-3xl mb-8 text-center">Are you sure ?</h3>
      <div className="flex justify-between">
        <button
          className="px-10 py-5 bg-red-400 rounded-3xl font-bold"
          onClick={() => {
            setIsShow(false);
            setIsDelete(true);
          }}
        >
          Confirm
        </button>
        <button
          className="px-10 py-5 bg-white text-black rounded-3xl font-bold"
          onClick={() => {
            setIsShow(false);
            setIsDelete(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
