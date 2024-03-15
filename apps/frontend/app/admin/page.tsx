import Typography from '@/Components/Typography/Typography';

function Dashboard() {
  return (
    <main>
      <Typography vairent="secondary" component="h1">
        Welcome to Admin Panel
      </Typography>
      <Typography vairent="p" component="p">
        Manage your appointmets with clients, cases and more.
      </Typography>
    </main>
  );
}

export default Dashboard;
