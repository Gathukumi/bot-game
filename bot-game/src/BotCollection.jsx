import React, { useEffect, useState } from 'react';
import './BotCollection.css';

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    async function fetchBots() {
      const response = await fetch('http://localhost:3000/bots');
      const bots = await response.json();
      setBots(bots);
    }
    fetchBots();
  }, []);

  const addToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b !== bot));
  };

  return (
    <div className="bot-list-container">
      {bots.map((bot, index) => (
        <div key={index} className="bot-item">
          <img src={bot.avatar_url} alt={`Bot ${index}`} />
          <p>Name: {bot.name}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Bot_Class: {bot.bot_class}</p>
          <p className="bot-phrase">Phrase: {bot.catchphrase}</p>
          <p>Created_at: {bot.created_at}</p>
          <p>Updated_at: {bot.updated_at}</p>
          <button
            className="btn"
            onClick={() => removeFromArmy(bot)}
          >
            X
          </button>
          <button
            className="button"
            onClick={() => addToArmy(bot)}
          >
            Add to Army
          </button>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
