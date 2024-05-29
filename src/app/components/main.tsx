export default function Main() {

  let share = 0

  return(
    <section>
      <h1>Bill Splitter</h1>
      <div>
        <label>Your Item Cost</label>
        <input />
      </div>
      <div>
        <label>Tax (%)</label>
        <input />
      </div>
      <div>
        <label>Tip (%)</label>
        <input />
      </div>
      <h2>You owe: {share}</h2>
    </section>
  )
}