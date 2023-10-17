import Head from "next/head";
import Link from "next/link";
import NavBar from "~/components/navbar";
import { Twitter, Instagram, Linkedin, Mail, FileText } from "feather-icons";

function Landing() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-white text-7xl font-serif font-black">Hello, I'm Justin</h1>
      <ul className="flex gap-2">
        <li><a href="#email"><Mail className="w-8 h-8 text-white" /></a></li>
        <li><a href="#instagram"><Instagram className="w-8 h-8 text-white" /></a></li>
        <li><a href="#twitter"><Twitter className="w-8 h-8 text-white" /></a></li>
        <li><a href="#linkedin"><Linkedin className="w-8 h-8 text-white" /></a></li>
        <li><a href="#resume"><FileText className="w-8 h-8 text-white" /></a></li>
      </ul>
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
