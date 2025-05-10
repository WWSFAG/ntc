
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Zaloguj się</h1>
        <input type="text" placeholder="Nazwa użytkownika" className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="Hasło" className="w-full p-2 mb-4 border rounded" />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Zaloguj</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
