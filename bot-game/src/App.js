import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css';

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
    // Implement the discharge logic here
    // You can remove the bot from the army or perform any other action
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection addToArmy={addToArmy} />
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />
    </div>
  );
}

export default App;
