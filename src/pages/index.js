import React from "react";

const index = () => {
  return (
    <div className="flex flex-col items-center gap-5 bg-gray-200 h-screen">
      <h1 className="text-5xl text center font-extrabold">Contact</h1>

      <form className="flex flex-col items-center w-[90%]">
        <label htmlFor="pseudo" className="mx-auto">
          Nom
        </label>
        <input
          id="pseudo"
          type="text"
          placeholder="Nom..."
          className="border-2 border-silver mb-10 rounded-lg p-2"
        />
        <label htmlFor="message" className="mx-auto">
          Message
        </label>
        <textarea
          id="message"
          type="textarea"
          placeholder="Message..."
          className="border-2 border-silver rounded-lg p-2 w-[100%] max-w-5xl h-72 overflow-scroll"
        />
      </form>
    </div>
  );
};

export default index;
