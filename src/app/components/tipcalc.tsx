'use client'

import { useState } from "react"

export default function TipCalc() {

  let tip = 0

  return(
    <section>
      <h1>Tip Calculator</h1>
      <div>
        <label>Subtotal Before Tax</label>
        <input type="number" id='subtotal' name='subtotal' value={input.subtotal} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300" />
      </div>
      <div>
        <label>Tip Amount</label>
        <input type="number" id='subtotal' name='subtotal' value={input.subtotal} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300" />
      </div>
      <h1>Tip is {tip}%</h1>
    </section>
  )
}