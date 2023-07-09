import React from 'react';
import Top from '../components/cardPage/Top';
import Comments from '../components/cardPage/Comments';
import Write from '../components/cardPage/Write';

const CardPage = () => {
    return (
        <>
            <Top/>
            <Write/>
            <Comments/>
        </>
    );
};

export default CardPage;