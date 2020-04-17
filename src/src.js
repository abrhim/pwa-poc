import React from 'react';

const Src = ({href, sup}) => {
    return (<code><a href={href}>src<sup>{sup}</sup></a></code>);
}

export default Src;
