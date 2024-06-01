export default function TaxCalc() {

  let tax = 0

  return(
    <section>
      <h1>Tax Calculator</h1>
      <div>
        <label>Subtotal ($)</label>
        <input type="number" id='subtotal' name='subtotal' value={input.cost} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300" />
      </div>
      <div>
        <label>Tax Amount ($)</label>
        <input type="number" id='tax' name='tax' value={input.cost} onChange={handleChange} required className="text-black outline-none rounded-xl px-4 py-2 shadow-xl focus:ring focus:ring-gray-300 transition duration-300" />
      </div>
      <h1>Tax is {tax}%</h1>
    </section>
  )
}