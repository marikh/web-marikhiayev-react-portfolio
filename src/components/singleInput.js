import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
    <input
        type={props.inputType}
        value={props.content}
        onChange={props.controlFunc}
        placeholder={props.placeholder} />
);

SingleInput.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    placeholder: PropTypes.string,
};

export default SingleInput;
