export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to the Strata Management System</h1>
      <p>Please make a selection：</p>
      <ul>
        <li><a href="/report">Repair registration</a></li>
        <li><a href="/announcement">Announcement View</a></li>
      </ul>
    </main>
  );
}
