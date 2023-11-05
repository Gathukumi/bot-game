import React from 'react';
import './BotProfile.css';

function BotProfile({ bot }) {
  return (
    <div className="bot-card">
      <div className="bot-image">
        <img src={bot.avatar_url} alt={bot.name} />
      </div>
      <div className="bot-details">
        <h3>{bot.name}</h3>
        <p>Power: {bot.power}</p>
        <p>Speed: {bot.speed}</p>
        <p>Health: {bot.health}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
      </div>
    </div>
  );
}

export default BotProfile;
