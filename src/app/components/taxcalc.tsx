'use client'

import { useState } from "react"

export default function TaxCalc() {

  const [input, setInput] = useState({subtotal: 0, tax: 0})

  const handleChange = (event:any) => {
    const { name, value } = event.target
    setInput((prevInput) => ({ ...prevInput, [name]: value}))
  }

  return(
    <section className="bg-amber-200 flex flex-col justify-center items-center my-12 py-4 mx-auto gap-4 font-semibold rounded-xl box-pop w-1/2">
      <h1>Tax Calculator</h1>
      <div>
        <label>Subtotal ($)</label>
        <input type="number" id='subtotal' name='subtotal' value={input.subtotal} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300" />
      </div>
      <div>
        <label>Tax Amount ($)</label>
        <input type="number" id='tax' name='tax' value={input.tax} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300" />
      </div>
      <h1>Tax is {Math.round((input.tax / input.subtotal) * 10000) / 100}%</h1>
    </section>
  )
}