import React from 'react';
import BotProfile from './BotProfile';
import './YourBotArmy'
import './YourBotArmy.css'

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
  return (
    <div>
      <div className="bot-list">
        {army && army.length > 0 ? (
          army.map((bot) => (
            <div key={bot.id}>
              <BotProfile bot={bot} />
              <button onClick={() => removeFromArmy(bot)}>Release</button>
              <button onClick={() => dischargeBot(bot)}>Discharge</button>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}

export default YourBotArmy;
