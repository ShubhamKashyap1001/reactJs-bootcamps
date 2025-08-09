import { useState } from 'react';
import './App.css';
import ContributionCard from './components/ContributionCard';
import MonthSelector from './components/MonthSelector';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("Jan");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <MonthSelector selected={selectedMonth} onChange={setSelectedMonth} />
      <ContributionCard month={selectedMonth} />
    </div>
  );
};

export default App;

