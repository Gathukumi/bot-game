import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  const [army, setArmy] = useState([]);

  // Function to add a bot to the army
  const addToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  // Function to remove a bot from the army
  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b !== bot));
  };

  // Function to discharge a bot
  const dischargeBot = (bot) => {
    setArmy(army.filter((b) => b !== bot));
  };

  // Example of using useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch data here
    // For example:
    // fetchData().then((data) => {
    //   setSomeData(data);
    // });
  }, []); // Empty dependency array means this effect runs only once, when the component mounts

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />
      <BotCollection addToArmy={addToArmy} />
    </div>
  );
}

export default App;
