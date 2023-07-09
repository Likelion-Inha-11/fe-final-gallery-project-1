import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-top:100px;
    margin-bottom: 50px;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

const ProfileImg = styled.img`
    content :url(${(props) => props.url});
    border-radius: 50%;
    margin-right: 80px;
    margin-left: 410px;
    width: 250px;
    height: 250px;
`;

const ProfileName = styled.h1`
    font-size: 50px;
    margin-bottom: 10px;

`;

const ProfileText = styled.p`
    font-size: 28px;
    width: 400px;
`;

const CountCards = styled.p`
    font-size: 28px;
    font-weight: bold;
    margin-top:10px;
`;


const Intro = () => {
    const [count,setCount]=useState(0);

    //총 이미지 개수를 가져온다.
    useEffect(()=>{
        axios
        .get(`https://gallery.jmoomin.com/imageSize`)
        .then((res)=>{
            setCount(res.data);
        })
        .catch((res)=>{
            alert(res);
        })
    },[]);


    return (
        <>
        <Profile>
            <ProfileImg url="profileImage/childlion.png"/>
            <ProfileInfo>
                <ProfileName>likelion_11th_frontend</ProfileName>
                <ProfileText>멋쟁이사자처럼  11기 여러분의 소중한 추억들을 보관합니다.</ProfileText>
                <CountCards>게시물 {count}개</CountCards>
            </ProfileInfo>
        </Profile>
        
        </> 
    );
};

export default Intro;