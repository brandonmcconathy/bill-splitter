'use client'

import { useState } from "react"

export default function Main() {

  const [input, setInput] = useState({cost: 0, tax: 0, tip: 0})

  const handleChange = (event:any) => {
    const { name, value } = event.target
    setInput((prevInput) => ({ ...prevInput, [name]: value}))
  }

  return(
    <section className="bg-amber-200 flex flex-col justify-center items-center my-12 py-4 mx-auto gap-4 font-semibold rounded-xl box-pop w-1/2">
      <h1 className="text-2xl font-bold">Bill Splitter</h1>
      <div className="flex gap-4 items-center justify-center">
        <label htmlFor="cost">Your Item Cost ($):</label>
        <input type="number" id='cost' name='cost' value={input.cost} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300 w-32" />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <label htmlFor="tax">Tax (%):</label>
        <input type="number" id='tax' name='tax' value={input.tax} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300 w-32" />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <label htmlFor="tip">Tip (%):</label>
        <input type="number" id='tip' name='tip' value={input.tip} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300 w-32" />
      </div>
      <h2 className="text-lg">You owe: ${Math.round((Number(input.cost) * ((input.tax / 100) + (input.tip / 100) + 1)) * 100) / 100}</h2>
    </section>
  )
}