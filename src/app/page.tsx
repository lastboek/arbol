// import Head from "next/head";
// import Link from "next/link";
import { X, Instagram, Mail } from "react-feather";

function Subscribe() {
  return (
    <form className="mt-8">
      <input
        type="email"
        className="w-48 h-10 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter your email"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" style={{ backgroundColor: '#31D347' }}>
        Subscribe
      </button>
    </form>
  )
}

function Landing() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <img src="/images/logo.svg" alt="Logo" className="w-3/4 m-16 mb-4" />
      <h1 className="text-white text-7xl font-serif font-black text-sm">coming soon</h1>
     {/* <Subscribe /> */}
      <footer className="w-full p-4 flex justify-center">
        <ul className="flex gap-2">
          <li className="mx-1"><a href="https://www.instagram.com/arbolfoods" target='_blank'><Instagram className="w-6 h-6 text-white" /></a></li>
        </ul>
      </footer>
    </div>
  )
}





function Second() {
  return (
    <div className="flex-1 flex items-center justify-center">
      
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Landing />
      <Second />
    </div>
  );
}
