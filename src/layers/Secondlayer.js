import React from 'react'
import styled from 'styled-components';


// --------------------------------- 스타일드 컴포넌트 
const Allwrap = styled.div`
width: 100%;
height: 500px;
position: relative;
background-color: #000;

.secinner{
  width: 1200px;
  height: 100%;
  margin:0 auto;
  position: relative;
  overflow: hidden;

  .leftgra{
    position: absolute;
    width: 250px;
    height: 100%;
    z-index: 1;
    left: 60px;
    background: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0) 100%);
  }
  .rightgra{
    position: absolute;
    width: 250px;
    height: 100%;
    z-index: 1;
    right: 60px;
    background: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)100%);
  }

  #youtube-video{
    scale: 120%;
    width: 1200px;
    position: relative;
    height: 500px;
    pointer-events: none;

  }
  .textwrap{
    color: #fff;
    margin-left: 120px;
    position: absolute;
    z-index: 2;
    top: 170px;
    
    h1{
      font-weight: 700;
      text-shadow: 2px 2px 1px rgba(0,0,0,0.6);
      font-size: 40px;
      margin-bottom: 20px;
    }
    .textsmall{
      line-height: 25px;
      font-weight: 500;
      margin-bottom: 20px;
      text-shadow: 1px 1px 1px black;
    }
    .detailpage{
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 12px;
      color: #000;
      background-color: #fff;
      cursor: pointer;
      display: inline-block;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
      transition: 0.3s;
      
      &:hover{
        scale: 1.1;
      }
    }
  }
}
@media screen and (max-width :1200px) {
  width: 100%;
height: 430px;
position: relative;
background-color: #000;

.secinner{
  width: 100%;
  height: 100%;
  margin:0 auto;
  position: relative;
  overflow: hidden;

  .leftgra{
    position: absolute;
    width: 250px;
    height: 450px;
    z-index: 1;
    left: 0px;
    background: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0) 100%);
  }
  .rightgra{
    position: absolute;
    width: 250px;
    height: 450px;
    z-index: 1;
    right: 0px;
    background: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)100%);
  }

  #youtube-video{
    /* outline: 1px dotted red; */
    scale: 100%;
    max-width: 100%!important;
    margin-right: 30px;
    position: relative;
    height: 450px;
    bottom: 10px;
    pointer-events: none;

  }
  .textwrap{
    color: #fff;
    margin-left: 50px;
    position: absolute;
    z-index: 2;
    top: 170px;
    
    h1{
      font-weight: 700;
      text-shadow: 2px 2px 1px rgba(0,0,0,0.6);
      font-size: 40px;
      margin-bottom: 20px;
    }
    .textsmall{
      line-height: 25px;
      font-weight: 500;
      margin-bottom: 20px;
      text-shadow: 1px 1px 1px black;
    }
    .detailpage{
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 12px;
      color: #000;
      background-color: #fff;
      cursor: pointer;
      display: inline-block;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
      transition: 0.3s;
      
      &:hover{
        scale: 1.1;
      }
    }
  }
}
}
@media screen and (max-width :700px) {
  width: 100%;
  height: 47vw;
position: relative;
background-color: #000;

.secinner{
  width: 100%;
  height: 100%;
  margin:0 auto;
  position: relative;
  overflow: hidden;

  .leftgra{
    position: absolute;
    width: 250px;
    height: 450px;
    z-index: 1;
    left: 0px;
    background: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0) 100%);
  }
  .rightgra{
    position: absolute;
    width: 250px;
    height: 450px;
    z-index: 1;
    right: 0px;
    background: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)100%);
  }

  #youtube-video{
    /* outline: 1px dotted red; */
    scale: 120%;
    max-width: 100%!important;
    margin-right: 30px;
    position: relative;
    height: 57.14vw;
    bottom: 60px;
    pointer-events: none;

  }
  .textwrap{
    /* display: none; */
    color: #fff;
    margin-left: 10px;
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    
    h1{
      font-weight: 700;
      text-shadow: 2px 2px 1px rgba(0,0,0,0.6);
      font-size: 4.4vw;
      margin-bottom: 5px;
    }
    .textsmall{
      line-height: 20px;
      font-size: 2vw;
      font-weight: 500;
      margin-bottom: 20px;
      text-shadow: 1px 1px 1px black;
    }
    .detailpage{
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 12px;
      color: #000;
      background-color: #fff;
      cursor: pointer;
      display: inline-block;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
      transition: 0.3s;
      
      &:hover{
        scale: 1.1;
      }
    }
  }
}
}
`

const Secondlayer = () => {


const handleClick = (event) => {
  event.stopPropagation();
};

  return (
    <>
    <Allwrap>
      <div className='secinner'>
        <div className='leftgra'></div>
        <div className='rightgra'></div>
      <iframe id="youtube-video"   src="https://www.youtube.com/embed/umelPJ-Ws2k?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=umelPJ-Ws2k&playsinline=1"   frameborder="0" allow="autoplay; fullscreen"></iframe>
        <div className='textwrap'>
          <h1>북극백화점의 안내원</h1>
          <div className='textsmall'>
            <p>동물 곡객 만족도 100%까지!</p>
            <p>좌충우돌 정직원 되기 프로젝트</p>
          </div>
          <div className='detailpage' onClick={handleClick}>상세보기</div>
        </div>
      </div>
    </Allwrap>
    </>
  )
}

export default Secondlayer;
