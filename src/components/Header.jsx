import React from 'react';
import { Header, Image } from 'semantic-ui-react';

function WoofHeader() {
  return (
    <Header as="h2" icon textAlign="center" id="woof-header">
      <Image circular src="https://i.imgur.com/pBaQxiT.png" className="bg-circle shadow" />
      {' '}
      Dulce Woof
    </Header>
  );
}

export default WoofHeader;
