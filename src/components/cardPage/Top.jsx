import React from 'react';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Top = () => {
    const {imageId} = useParams();
    const[imgs,setImage] = useState([]);

    //해당 image에 해당하는 제목과 내용을 가져온다.
    useEffect(()=>{
        axios
        .get(`https://gallery.jmoomin.com/imageAll`)
        .then((res)=>{
            setImage(res.data);
        })
        .catch((res)=>{
            alert(res);
        })
    },[imageId]);

   


    const Img = styled.div`
        margin-top: 60px;
        margin-left: 420px;
    `;

    const ImgTitle = styled.h1`
        font-size: px;
        margin-bottom: 15px;
    `;

    const ImgText = styled.p`
        font-size: 28px;
    `;

    const ImgUrl = styled.img`
        content : src(${props => props.src});
        margin: auto;
        display: block;
        width: 50%;
        margin-top: 30px;
        
    `;

    return (
        <>
            {
            imgs.map((img) => {
                return (img.id === imageId) ? 
                        <>
                            <Img>
                            <ImgTitle>{img.imageName}</ImgTitle>
                            <ImgText>{img.imageText}</ImgText>
                            </Img>
                            <ImgUrl src={img.imageURL}/>
                              
                        </>
                : null
            })
        }
        </>
    );
};

export default Top;