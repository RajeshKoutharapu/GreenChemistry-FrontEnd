import { useLocation } from 'react-router-dom';
import Tab1 from '../tabs/tab1/tab1';
import Tab2 from '../tabs/tab2/tab2';
import Tab3 from '../tabs/tab3/tab3';
import Tab4 from '../tabs/tab4/tab4';
import Tab5 from '../tabs/tab5/tab5';
import './Dashboard.css';
import TabsNavbar from '../TabsNavbar/TabsNavbar';

const Dashboard = () => {
  const location = useLocation();
  const currentTab = location.pathname.split('/').pop();

  const getBackgroundClass = () => {
    switch (currentTab) {
      case 'Title_Preparations':
        return 'gradient1';
      case 'IntstrumentsExperiments':
        return 'gradient2';
      case 'Chemicals_Reagents_Solvents_Gas':
        return 'gradient3';
      case 'General':
        return 'gradient4';
      case 'FinalReport':
        return 'gradient5';
      default:
        return 'gradient1';
    }
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 'Title_Preparations':
        return <Tab1 />;
      case 'IntstrumentsExperiments':
        return <Tab2 />;
      case 'Chemicals_Reagents_Solvents_Gas':
        return <Tab3 />;
      case 'General':
        return <Tab4 />;
      case 'FinalReport':
        return <Tab5 />;
      default:
        return <Tab1 />;
    }
  };

  return (
    <div className={`dashboard-container ${getBackgroundClass()}`}>
      <TabsNavbar />
      <div className="tab-content">
        <div className="tab-inner">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
