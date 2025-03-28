export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Strata Management System</h1>
      <p>Please choose an option:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="/report">🛠️ Report a Repair</a></li>
        <li><a href="/announcement">📢 View Announcements</a></li>
      </ul>
    </main>
  );
}
