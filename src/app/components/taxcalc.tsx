export default function TaxCalc() {

  let tax = 0

  return(
    <section>
      <h1>Tax Calculator</h1>
      <div>
        <label>Subtotal</label>
        <input />
      </div>
      <div>
        <label>Tax Amount</label>
        <input />
      </div>
      <h1>Tax is {tax}%</h1>
    </section>
  )
}