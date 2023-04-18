import React from "react";

const index = () => {
  return (
    <div className="flex flex-col items-center gap-5 h-screen">
      <h1 className="text-5xl text center font-extrabold">Contact</h1>

      <form className="flex flex-col items-center w-[90%]  bg-gray-200 rounded-3xl p-5">
        <div className="flex flex-col items-start">
          <label htmlFor="pseudo" className="font-bold">
            Nom
          </label>
          <input
            id="pseudo"
            type="text"
            placeholder="Nom..."
            className="border-2 border-cyan-500 mb-10 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="123@email.com..."
            className="border-2 border-cyan-500 mb-10 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col w-[100%] max-w-5xl">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            id="message"
            type="textarea"
            placeholder="Message..."
            className="border-2 border-cyan-500 rounded-lg p-2 h-72 overflow-scroll"
          />
        </div>
        <imput
          type="submit"
          className="flex items-center justify-center bg-cyan-500 p-2 rounded-xl w-32  h-12 text-center mt-10"
        >
          Envoyer
        </imput>
      </form>
    </div>
  );
};

export default index;
