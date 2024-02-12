import React, { useEffect, useState } from 'react';
import './BotCollection.css';

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    async function fetchBots() {
      try {
        const response = await fetch('http://localhost:3001/bots');
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    }
    fetchBots();
  }, []);

  const handleEnlist = (bot) => {
    fetch(`http://localhost:3001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Successfully deleted bot:', data);
        setBots(bots.filter(b => b.id !== bot.id));
      })
      .catch((error) => {
        console.error('Error deleting bot:', error);
      });
  };

  const addToArmy = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    const updatedArmy = army.filter(b => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  return (
    <div>
      <div className="army-container">
        <h2>Your Bot Army</h2>
        <div className="selected-bots-container">
          {army.map((bot, index) => (
            <div key={index} className="army-bot">
              <img src={bot.avatar_url} alt={`Bot ${index}`} />
              <p>Name: {bot.name}</p>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <button className='button' onClick={() => removeFromArmy(bot)}>Remove from Army</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bot-list-container">
        {bots.map((bot, index) => (
          <div key={index} className="bot-item">
            <img src={bot.avatar_url} alt={`Bot ${index}`} />
            <p>Name: {bot.name}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Bot_Class: {bot.bot_class}</p>
            <p>Phrase: {bot.catchphrase}</p>
            <p>Created_at: {bot.created_at}</p>
            <p>Updated_at: {bot.updated_at}</p>
            <button className='btn' onClick={() => handleEnlist(bot)}>X</button>
            <button className='button' onClick={() => addToArmy(bot)}>Add to Army</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
