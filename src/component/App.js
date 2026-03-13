export default function App() {
  return (
    <div>
      <form className="bg-blue-500">
        <label>Text</label>
        <input
          type="text"
          className="block ml-10 mr-10 w-full focus:w-96"
          placeholder="Enter something"
        />
        <button className=" border p-5 m-5 border-red-500 font-bold bg-orange-500 rounded-full">
          Click
        </button>
      </form>
    </div>
  );
}
