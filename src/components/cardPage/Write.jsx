import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const All = styled.h1`
display: flex;
flex-direction: row;
justify-content:space-between;
margin-left: 425px;
margin-right: 430px;
margin-top: 10px;
margin-bottom: 10px;
`;

const WriteText = styled.input`
font-size: 20px;
padding:2px;
`;

const Write = () => {
    const{imageId}=useParams();
    const[text,setText]=useState("");

    const WriteButton = styled.button`
    
    `;

    const handleText = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = () => {
        axios
        .post(`https://gallery.jmoomin.com/${imageId}/comments`, {
            commentBody: text
        })
        .then(()=>{
            window.location.reload();
        }
        )
    };


    return (
        <>
                <All>
                    <WriteText placeholder="댓글 작성..." value={text} onChange={handleText}/>
                    <WriteButton onClick={handleSubmit}>게시</WriteButton>
                </All>
                
    
            
        
        </>
    );
};

export default Write;