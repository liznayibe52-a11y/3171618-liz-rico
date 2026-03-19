import './App.css'
import { UserList } from './components/UserList'
import { PostViewer } from './components/PostViewer';

const App = () => {
  return (
    <div>
      <UserList />
      <PostViewer />
    </div>
  );
};

export default App;