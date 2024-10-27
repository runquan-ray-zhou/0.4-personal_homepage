import bw from "../assets/bw-portrait.jpg";

export default function Main() {
  return (
    <div className="hidden md:block mt-4">
      <div className="grid grid-cols-5 grid-rows-4 gap-4">
        <div className="col-start-2 col-end-5 row-start-1 row-end-4">
          <img
            src={bw}
            alt="Black and White Portrait"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
