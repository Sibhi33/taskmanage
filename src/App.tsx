import { TaskProvider } from './context/TaskContext';
import AppRoutes from './router';
import Layout from './components/Layout';

const App = () => (
  <TaskProvider>
    <Layout>
      <AppRoutes />
    </Layout>
  </TaskProvider>
);

export default App;
