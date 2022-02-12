import React from 'react';

function Header() {
  const clientNeeds = '';
  const clientNeedsTitle = {
    designer: 'designer',
    programmer: 'programmer',
  };
  const clientInfo = {
    name: 'joe',
    nick: 'goldberg',
  };

  return (
    <div className="navbar bg-dark rounded header text-white">
      {`Hi, ${clientInfo.name} ${clientInfo.nick}`}
      <h2>
        {clientNeeds === 'designer' ? clientNeedsTitle.designer : clientNeedsTitle.programmer} is my life. is my life.
      </h2>
    </div>
  );
}

export default Header;
