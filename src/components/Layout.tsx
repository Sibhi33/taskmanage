import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
                Task Manager
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                All Tasks
              </Link>
              <Link 
                to="/add" 
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Add Task
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout; 