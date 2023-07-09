import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Comments = () => {
    const[comments,setComments] = useState([]);
    const {imageId} = useParams();

     //해당 image에 해당하는 댓글들을 가져온다.
     useEffect(()=>{
        axios
        .get(`https://gallery.jmoomin.com/${imageId}/comments`)
        .then((res)=>{
            setComments(res.data);
        })
        .catch((res)=>{
            alert(res);
        })
    },[imageId]
    );

    const Comment = styled.div`
        display: flex;
        flex-direction: row;   
        justify-content:space-between;
        margin-left: 425px;
        margin-right: 430px;

        font-size:20px;
    `;

    const HandleDelete = (id) => {
        axios
        .delete(`https://gallery.jmoomin.com/${imageId}/comments/${id}`)
        .then(()=>{ 
            window.location.reload();
        })
        .catch((res)=>{
            alert(res);
        })
    };

    return (
       <>

            {comments.map((comment)=>{
                return(
                    <Comment>
                        <div>익명 {comment.commentBody}</div>
                        <button onClick = {() => HandleDelete(comment.id)}>삭제</button>
                    </Comment>
                    );
            })}
       </>
    );
};

export default Comments;