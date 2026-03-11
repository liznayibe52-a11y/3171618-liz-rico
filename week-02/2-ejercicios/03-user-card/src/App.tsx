import './App.css'
import { UserCard } from './components/UserCard';

function App() {

  const user = {
    id: 1,
    name: 'Ana García',
    email: 'ana@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    role: 'admin' as const
  };

  const handleDelete = (id: number) => {
    console.log(`Delete user ${id}`);
  };

  return (
    <div>
      <h1>User Card Example</h1>

      <UserCard
        user={user}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default App;