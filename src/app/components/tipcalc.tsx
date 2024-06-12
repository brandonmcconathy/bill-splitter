'use client'

import { useState } from "react"

export default function TipCalc() {

  const [input, setInput] = useState({subtotal: 0, tip: 0})

  const handleChange = (event:any) => {
    const { name, value } = event.target
    setInput((prevInput) => ({ ...prevInput, [name]: value}))
  }

  return(
    <section className="bg-amber-200 flex flex-col justify-center items-center my-20 py-4 mx-auto gap-4 font-semibold rounded-xl box-pop w-1/2">
      <h1 className="text-2xl font-bold">Tip Calculator</h1>
      <div className="flex gap-4 items-center justify-center">
        <label htmlFor="subtotal">Subtotal Before Tax ($):</label>
        <input type="number" id='subtotal' name='subtotal' value={input.subtotal} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300 w-32" />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <label htmlFor="tip">Tip Amount ($):</label>
        <input type="number" id='tip' name='tip' value={input.tip} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300 w-32" />
      </div>
      <h1 className="text-lg">Tip is {Math.round((input.tip / input.subtotal) * 10000) / 100}%</h1>
    </section>
  )
}