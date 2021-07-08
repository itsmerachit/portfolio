import './darky.css'
export default function Darky({ darkMode, setDarkMode }) {
  return (
    <div className="dark-mode-btn">
      <button
        className={"text-white py-2 px-4 rounded-2xl relative bottom-8 " + (darkMode?"btn-dark":"btn-light")}
        onClick={() => {
          setDarkMode(!darkMode);
        }}>
          {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
          )
          : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
          )}
      </button>
    </div>
  );
}
