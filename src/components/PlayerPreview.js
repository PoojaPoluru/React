/**
 * Created by Pooja on 16-11-2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

function PlayerPreview (props) {
    return (
        <div>
            <div className='column'>
                <img
                    className='Avatar'
                    src={props.avatar}
                    alt={'Avatar for ' + props.username}
                />
                <h2 className='username'>@{props.username}</h2>
            </div>
            {props.children}
        </div>
    )
}

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};

export default PlayerPreview;