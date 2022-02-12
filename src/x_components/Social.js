import React from 'react';
import SocialItem from './Social_Item';

function Social() {
  return (
    <ul className="list-group">
      <SocialItem
        object={{
          // first {} to enter js  and second {} to write the object
          media: 'facebook',
          img: 'https://picsum.photos/60',
        }}
      />
      <SocialItem
        object={{
          media: 'linkedin',
          img: 'https://picsum.photos/61',
        }}
      />
      <SocialItem
        object={{
          media: 'github',
          img: 'https://picsum.photos/62',
        }}
      />
    </ul>
  );
}

export default Social;
