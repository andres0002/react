import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// component -> PascalCase.
export const ButtonComponent = ({text, onClick}) => {
  return (
    <button
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
      </svg>

      {text}
    </button>
  )
};

// function.
const showMessage = (message) => {
  console.log(message);
}

// punto de entrada app (main.jsx).
const root = createRoot(document.getElementById('root'));

// render de elements.
root.render(
  <React.Fragment>
    <ButtonComponent text="Click" onClick={() => showMessage("Hello World...")} />
  </React.Fragment>
)
