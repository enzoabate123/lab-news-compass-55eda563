
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ResearchRequests from './ResearchRequests';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const showResearchRequests = location.pathname === '/';

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />
        
        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
          
          {/* Right Panel - Research Requests - Only on Home page */}
          {showResearchRequests && (
            <aside className="hidden xl:block border-l border-gray-200 bg-white">
              <ResearchRequests />
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
