import './App.css'
import { UserList } from './components/UserList'
import { PostViewer } from './components/PostViewer';
import { useFetch } from './components/useFetch';
import { UserListOptimized } from './components/UserListOptimized';

const App = () => {
  return (
    <div>
      <UserList />
      <useFetch />
      <UserListOptimized />
      <PostViewer />
    </div>
  );
};

export default App;