import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components';



const Allwrap3 = styled.div`
width: 100%;
height: 500px;
position: relative;
/* outline: 1px dotted red; */
background-color: rgba(0,0,0,0.05);

.inner{
  /* outline: 1px dotted red; */
  width: 1100px;
  height: 100%;
  margin:  0 auto;
  position: relative;

  .divtop{
    /* outline: 1px dotted red; */
    height: 70px;
    display: flex;
    position: relative;
    padding:  0 30px;
    justify-content: space-between;
    padding-top: 45px;
    box-sizing: border-box;
    margin-bottom: 10px;

    ul{
      display: flex;
      gap: 20px;
      
      li{
        &:nth-child(1){
          font-weight: 700;
        }
        &:nth-child(2){
          margin-top: 5px;
          font-weight: 600;
          font-size: 10px;
        }
      }
    }
    div{
      margin-bottom: 5px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      /* outline: 1px dotted red; */
      padding: 8px 10px;
      font-size: 12px;
      border-radius: 10px;
      transition: 0.3s;
      box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
      cursor: pointer;
      &:hover{
        scale: 1.1;
        background-color: rgba(0,0,0,0.1);
      }
    }
    
  }
  .divbtm{
    width: 100%;
    height: 100%;
    /* outline: 1px dotted red; */
    display: flex;
    justify-content: space-around;
  }
}

@media screen and (max-width:1200px) {

width: 100%;
height: 450px;
position: relative;
/* outline: 1px dotted red; */
background-color: rgba(0,0,0,0.05);

.inner{
  /* outline: 1px dotted red; */
  width: 100%;
  height: 100%;
  margin:  0 auto;
  position: relative;

  .divtop{
    /* outline: 1px dotted red; */
    height: 70px;
    display: flex;
    position: relative;
    padding:  0 30px;
    justify-content: space-between;
    padding-top: 45px;
    box-sizing: border-box;
    margin-bottom: 10px;

    ul{
      display: flex;
      gap: 20px;
      
      li{
        &:nth-child(1){
          font-weight: 700;
        }
        &:nth-child(2){
          margin-top: 5px;
          font-weight: 600;
          font-size: 10px;
        }
      }
    }
    div{
      margin-bottom: 5px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      /* outline: 1px dotted red; */
      padding: 8px 10px;
      font-size: 12px;
      border-radius: 10px;
      transition: 0.3s;
      box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
      cursor: pointer;
      &:hover{
        scale: 1.1;
        background-color: rgba(0,0,0,0.1);
      }
    }
    
  }
  .divbtm{
    width: 100%;
    height: 100%;
    /* outline: 1px dotted red; */
    display: flex;
    justify-content: space-around;
  }
 }
}

@media screen and (max-width: 700px) {

  width: 100%;
height: 100%;
position: relative;
/* outline: 1px dotted red; */
background-color: rgba(0,0,0,0.05);

.divtop{
    /* outline: 1px dotted red; */
    height: 70px;
    display: flex;
    position: relative;
    padding:  0 30px;
    justify-content: space-between;
    padding-top: 45px;
    box-sizing: border-box;
    margin-bottom: 10px;

    ul{
      display: flex;
      flex-direction: column;
      gap: 0px !important;
      
      li{
        /* outline: 1px dotted red; */
        &:nth-child(1){
          font-weight: 700;
          font-size: 2.6vw;
        }
        &:nth-child(2){
          margin-top: 0px;
          font-weight: 600;
          font-size: 10px;
        }
      }
    }
    div{
      margin-bottom: 5px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      /* outline: 1px dotted red; */
      padding: 8px 15px;
      font-size: 2vw !important;
      border-radius: 10px;
      transition: 0.3s;
      box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
      cursor: pointer;
      &:hover{
        scale: 1 !important;
        background-color: rgba(0,0,0,0.0);
      }
    }
    
  }


  .divbtm{
    width: 100%;
    height: 100%;
    /* outline: 1px dotted red; */
    display: flex;
    /* justify-content: space-around; */
    /* display: flex; */
    flex-wrap: wrap;
  }
}



 `

// box component -------------------------------------
 const BoxEl = styled.div`
  /* outline:  1px dotted red; */
  width: 200px;
  height: 100%;
  padding: 0 15px;

  .boximg{
    width: 100%;
    height: 270px;
    /* outline:  1px dotted red; */
    border-radius: 10px;
    margin-bottom: 10px;
    background-size: cover;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
    transition: 0.3s;

    &:hover{
      scale: 1.05;
    }
  }
  .boxtext{
    /* outline: 1px dotted red; */
    width: 100%;
    position: relative;
    height: 100px;
    p{
      text-align: center;
      
      &:nth-child(1){
        /* outline: 1px dotted red; */
        width: 100%;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
        /* white-space: nowrap;  
        overflow: hidden; 
        text-overflow: ellipsis;  */
      }
      &:nth-child(2){
        position: absolute;
        bottom: 10px;
        /* outline: 1px dotted red; */
        display: block;
        width: 100%;
        display: none !important;
      }
    }

  }
 @media screen and (max-width:1200px) {
  
  width: 200px;
  height: 70vw;
  padding: 0 15px;

  .boximg{
    width: 100%;
    height: 24vw;
    /* outline:  1px dotted red; */
    border-radius: 10px;
    margin-bottom: 10px;
    background-position: center;
    background-size: cover;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
    transition: 0.3s;

    &:hover{
      scale: 1.05;
    }
  }
  .boxtext{
    /* outline: 1px dotted red; */
    width: 100%;
    position: relative;
    height: 100px;
    p{
      text-align: center;
      
      &:nth-child(1){
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      &:nth-child(2){
        position: absolute;
        bottom: 0;
        /* outline: 1px dotted red; */
        display: block;
        width: 100%;
      }
    }

  }
 }

 @media screen and (max-width:700px) {
  
  width: 200px;
  height: 100%;
  padding: 0 15px;
  /* outline:  1px dotted red; */
 
  .boximg{
    width: 200px;
    height:36vw;
    /* outline:  1px dotted red; */
    border-radius: 10px;
    
    /* margin-bottom: 10px; */
    background-position: center;
    background-size: cover;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
    transition: 0.3s;

    &:hover{
      scale: 1.05;
    }
  }
  .boxtext{
    /* outline: 1px dotted red; */
    width: 100%;
    position: relative;
    height: 60px;
    p{
      text-align: center;
      
      &:nth-child(1){
        font-size: 13px;
        font-weight: 600;
        /* margin-bottom: 10px; */
      }
      &:nth-child(2){
        position: absolute;
        bottom: 0;
        /* outline: 1px dotted red; */
        display: none;
        width: 100%;
      }
    }

  }
 }
 
 @media screen and (max-width:500px) {
  
  width: 40%;
  height: 100%;
  padding: 0 12px;
  /* outline:  1px dotted red; */
 
  .boximg{
    width: 100%;
    height:50vw;
    /* outline:  1px dotted red; */
    border-radius: 10px;
    
    /* margin-bottom: 10px; */
    background-position: center;
    background-size: cover;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
    transition: 0.3s;

    &:hover{
      scale: 1.05;
    }
  }
  .boxtext{
    /* outline: 1px dotted red; */
    width: 100%;
    position: relative;
    height: 60px;
    p{
      text-align: center;
      
      &:nth-child(1){
        font-size: 13px;
        font-weight: 600;
        /* margin-bottom: 10px; */
      }
      &:nth-child(2){
        position: absolute;
        bottom: 0;
        /* outline: 1px dotted red; */
        display: none;
        width: 100%;
      }
    }

  }
 }
 `



const Thirdlayer = () => {

  // ------------------------------------- 스타일드컴포넌트 --------------------------------

//  --------------- axios부분

const [isLoading, setIsLoading] = useState(true);
const [movies, setMovies] = useState([]);

const getMovies = async () => {
  const {
    data: {
      data: { movies }
    }
  } = await axios.get('https://yts.mx/api/v2/list_movies.json/?sort_by=rating');
  setMovies(movies);
  setIsLoading(false);
};

useEffect(() => {
  getMovies();
}, []);

// console.log(movies);
// console.log(movies[0].summary);


  return (
    <>
        <Allwrap3>
            <div className='inner'>
                <div className='divtop'>
                  <ul>
                    <li>무비차트</li>
                    <li>(아래의 5개 영화는 YTS.MX의 Open Api 데이터입니다.)</li>
                  </ul>
                  <div>전체보기</div>
                </div>
                <div className='divbtm'>
                {isLoading ? (
              <p>Loading...</p>
            ) : (
              movies.slice(0, 5).map((movie) => (
                <BoxEl key={movie.id}>
                  <div
                    className='boximg'
                    style={{ backgroundImage: `url(${movie.medium_cover_image})` }}
                  ></div>
                  <div className='boxtext'>
                    <p> {movie.title}</p>
                    <p> {movie.genres[1]}</p>
                   </div>
                </BoxEl>
              ))
            )}
                </div>
            </div>
        </Allwrap3>
    </>
  )
}

export default Thirdlayer;
