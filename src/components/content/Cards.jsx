import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Cards = () => {

    const [imgs,setImg] = useState([]);
    const navigate = useNavigate();

    //화면을 처음 렌더링할 때, 이미지 전체 정보를 가져온다.
    useEffect(()=>{
        axios
        .get(`https://gallery.jmoomin.com/imageAll`)
        .then((res)=>{
            setImg(res.data);
        })
        .catch((res)=>{
            alert(res);
        })
    },[]);


    const Imgs = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 600px;
        justify-items: center;
        margin-left: 100px;
        margin-right: 100px;
        margin-bottom: 40px;

    `;

    const Img = styled.div`
       display: flex;
       flex-direction: column;
    `;

    const ImgUrl = styled.img`
        content : src(${(props) => props.src});
        width: 450px;
        height: 450px;
    `;


    const ImgName = styled.h1`
        display: flex;
        flex-wrap: wrap;
        font-size: 28px;
        width: 450px;
        
    `;

    const ImgText = styled.p`
        font-size: 20px;
        width: 450px;
    `;

    //image 클릭 시, 이미지 정보와 댓글을 확인할 수 있는 페이지로 이동한다.
    const GoToCardPage = (imageId) => {
        navigate(`/${imageId}`);
    };


    return (
        <>
        <Imgs>
        {
            imgs.map((img)=>{
                return(
                    <>
                    <Img>
                    <ImgUrl src={img.imageURL} onClick={() => GoToCardPage(img.id)}/>
                    <ImgName>{img.imageName}</ImgName>
                    <ImgText>{img.imageText}</ImgText>
                    </Img>
                    </>
                );
            })
        }
        </Imgs>
        </>
    );
};

export default Cards;