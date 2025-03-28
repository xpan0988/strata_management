export default function Report() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Repair Request Form</h1>
      <form>
        <p>
          <label>Name:<br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>Room Number:<br />
            <input type="text" name="room" />
          </label>
        </p>
        <p>
          <label>Description:<br />
            <textarea name="description" rows={4} />
          </label>
        </p>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
