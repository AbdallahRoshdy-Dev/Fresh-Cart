"use client"

import CartContextProvider from "@/context/CartContext/CartContext"
import { SessionProvider } from "next-auth/react"
import React from "react" 

export default function MySession({children}: {children : React.ReactNode}) {
  return (
    <CartContextProvider>
      <SessionProvider>
          {children}
      </SessionProvider>
    </CartContextProvider>
  )
}
