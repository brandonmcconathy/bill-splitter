export default function TipCalc() {

  let tip = 0

  return(
    <section>
      <h1>Tip Calculator</h1>
      <div>
        <label>Subtotal Before Tax</label>
        <input />
      </div>
      <div>
        <label>Tip Amount</label>
        <input />
      </div>
      <h1>Tip is {tip}%</h1>
    </section>
  )
}