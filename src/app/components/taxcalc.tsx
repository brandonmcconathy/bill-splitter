'use client'

import { useState } from "react"

export default function TaxCalc() {

  const [input, setInput] = useState({subtotal: 0, tax: 0})

  const handleChange = (event:any) => {
    let { name, value } = event.target
    if (value < 0) {
      value = 0
    }
    setInput((prevInput) => ({ ...prevInput, [name]: value}))
  }

  return(
    <section className="bg-amber-200 flex flex-col justify-center items-center my-20 py-4 mx-auto gap-4 font-semibold rounded-xl box-pop w-97 sm:w-5/6 md:w-3/4 lg:w-7/12 xl:w-1/2">
      <h1 className="text-2xl font-bold">Tax Calculator</h1>
      <div className="flex gap-4 items-center justify-center">
        <label htmlFor="subtotal">Subtotal ($):</label>
        <input type="number" id='subtotal' name='subtotal' value={input.subtotal} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300 w-32" />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <label htmlFor="tax">Tax Amount ($):</label>
        <input type="number" id='tax' name='tax' value={input.tax} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300 w-32" />
      </div>
      <h1 className="text-lg">Tax is {Math.round((input.tax / input.subtotal) * 10000) / 100}%</h1>
    </section>
  )
}