import React from 'react';

function SocialItem(props) {
  return (
    <li className="list-group-item">
      <img
        src={props.object.img}
        alt={`icon of ${props.object.media.charAt(0).toUpperCase() + props.object.media.slice(1)}`}
      />
      <input type="checkbox" id={props.object.media} />
      <label htmlFor={props.object.media}>{props.object.media}</label>
    </li>
  );
}

export default SocialItem;
