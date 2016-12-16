import React, { PropTypes } from 'react';
import { Card } from 'antd';
import { kittyEmoji } from 'emoji-generator';
// the fun part: some CSS :)
import '../../style.css';

function KittyCard(props) {
  /**
   * show a kitty with a name and a picture
   */
  const { _id, name } = props;
  const title = `${name} is cat #${_id} ${kittyEmoji.next().value}`;
  const style = {
    width: 400,
    font: 'bold 16pt Roboto-Regular, sans-serif',
  };
  const picture = `http://thecatapi.com/api/image/get?meow=${_id}`;
  return (
    <Card title={title} style={style}>
      <img src={picture} />
    </Card>
  );
}

KittyCard.propTypes = {
  _id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default KittyCard;
