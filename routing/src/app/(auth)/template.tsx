// ACTIVE LINKS
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./style.css"

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
    const[input,setInput] = useState("")
    const pathName = usePathname()
  return (
    <div>
       <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
       </div>
      {navLinks.map((link) => {
        // console.log(pathName)
        const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !=="/")
        return <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4 "} href={link.href} key={link.href}>{link.name}</Link>;
      })}
      {children}
    </div>
  );
}
