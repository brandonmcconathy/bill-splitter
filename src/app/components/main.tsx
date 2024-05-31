'use client'

import { useState } from "react"

export default function Main() {

  const [input, setInput] = useState({cost: 0, tax: 0, tip: 0})

  const handleChange = (event:any) => {
    const { name, value } = event.target
    setInput((prevInput) => ({ ...prevInput, [name]: value}))
  }

  return(
    <section className="">
      <h1>Bill Splitter</h1>
      <div>
        <label>Your Item Cost</label>
        <input type="number" id='cost' name='cost' value={input.cost} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300" />
      </div>
      <div>
        <label>Tax (%)</label>
        <input type="number" id='tax' name='tax' value={input.tax} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300" />
      </div>
      <div>
        <label>Tip (%)</label>
        <input type="number" id='tip' name='tip' value={input.tip} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300" />
      </div>
      <h2>You owe: {Math.round((Number(input.cost) * ((input.tax / 100) + (input.tip / 100) + 1)) * 100) / 100}</h2>
    </section>
  )
}