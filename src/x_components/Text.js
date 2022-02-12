import React from 'react';

function Text() {
  let text =
    'Lorem ipsum dolor ipsum sit amet consectetur adipisicing elit. Sequi beatae minima in magnam provident dignissimos officia ipsum recusandae ipsum porro animi, laboriosam laudantium, ducimus odio placeat facilis aliquam sed quisquam! Architecto!';

  let highLight = function (text) {
    if (text.indexOf('ipsum') > -1) {
      text = text.replace(/ipsum/g, `<span class='blue'>ipsum</span>`);
    }

    return text;
  };

  highLight(text);

  return <p>{text}</p>;
}

export default Text;
