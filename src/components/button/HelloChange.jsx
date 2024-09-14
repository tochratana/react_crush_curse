import React from "react";

export function HelloChange({ greeting, changeFuncs }) {
  return (
    <>
      <button
        onClick={changeFuncs}
        className="bg-blue-700 text-2xl font-bold text-red-600 px-4 py-2 rounded-xl"
      >
        {greeting}
      </button>
    </>
  );
}
