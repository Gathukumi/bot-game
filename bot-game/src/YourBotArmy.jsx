import React from 'react';
import BotProfile from './BotProfile';

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {army && army.length > 0 ? (
          army.map((bot) => (
            <div key={bot.id}>
              <BotProfile bot={bot} />
              <button onClick={() => removeFromArmy(bot)}>Release</button>
              <button onClick={() => dischargeBot(bot)}>Discharge</button>
            </div>
          ))
        ) : (
          <p>Your army is empty.</p>
        )}
      </div>
    </div>
  );
}

export default YourBotArmy;
