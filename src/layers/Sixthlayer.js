import React from 'react'
import styled from 'styled-components'
import PACKAGE1 from '../images/package1.png'
import PACKAGE2 from '../images/package2.png'
import PACKAGE3 from '../images/package3.png'
import PACKAGE4 from '../images/package4.png'
import PACKAGE5 from '../images/package5.png'
import PACKAGE6 from '../images/package6.png'
import PACKAGE7 from '../images/package7.png'
import PACKAGE8 from '../images/package8.png'
import PACKAGE9 from '../images/package9.png'


const Allwrap6 = styled.div`
width: 100%;
height: 400px;
position: relative;
/* outline: 1px dotted red; */

.innerwrap{
  /* outline: 1px dotted red; */
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

@media screen and (max-width:1200px) {
  width: 100%;
height: 400px;
position: relative;
/* outline: 1px dotted red; */

.innerwrap{
  /* outline: 1px dotted red; */
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
}
@media screen and (max-width:700px) {
  width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
position: relative;
/* outline: 1px dotted red; */

.innerwrap{
  /* outline: 1px dotted red; */
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
}
`

const CompBox = styled.div`
width: 300px;
box-shadow: 3px 3px 4px rgba(0,0,0,0.1);
height: 400px;
outline: 1px solid rgba(0,0,0,0.2);
border-radius: 15px;
.innertop{
  width: 100%;
  height: 50px;
  /* outline: 1px dotted red; */
  ul{
    /* outline: 1px dotted red; */
    height: 100%;
    margin: 0 20px;
    
    align-items: center;
    display: flex;
    justify-content: space-between;
    li{
      &:nth-child(1){
        font-weight: 700;
        font-size: 18px;
      }
      &:nth-child(2){
        font-size: 10px;
        cursor: pointer;
        padding: 5px 15px;
        border-radius: 5px;
        box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
        
      }
    }
  }
}
.innerbtm{
  width: 100%;
  height: 100%;
  /* outline: 1px dotted red; */

  ul{
    
    li{
      margin-left: 15px;
      font-size: 14px;
      display: flex;
      margin-top: 20px;
      margin-right: 15px;
      cursor: pointer;
      /* transition: 0.2s; */
      &:hover{
        outline: 1px solid rgba(0,0,0,0.1);
        box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
      }
      .photo{
        /* outline: 1px dotted red; */
        width: 80px;
        height: 90px;
        
        margin-right: 10px;
      }
      .photo1{
        background-image: url(${PACKAGE1});
        background-position: center;
        background-size: cover;
      }
      .photo2{
        background-image: url(${PACKAGE2});
        background-position: center;
        background-size: cover;
      }
      .photo3{
        background-image: url(${PACKAGE3});
        background-position: center;
        background-size: cover;
      }
      .photo4{
        background-image: url(${PACKAGE4});
        background-position: center;
        background-size: cover;
      }
      .photo5{
        background-image: url(${PACKAGE5});
        background-position: center;
        background-size: cover;
      }
      .photo6{
        background-image: url(${PACKAGE6});
        background-position: center;
        background-size: cover;
      }
      .photo7{
        background-image: url(${PACKAGE7});
        background-position: center;
        background-size: cover;
      }
      .photo8{
        background-image: url(${PACKAGE8});
        background-position: center;
        background-size: cover;
      }
      .photo9{
        background-image: url(${PACKAGE9});
        background-position: center;
        background-size: cover;
      }
      .text{
        width: 200px;
        padding-top: 20px;
        P{
          &:nth-child(1){
            font-weight: 600;
            line-height: 15px;
          }
          &:nth-child(2){
            margin-top: 10px;
            font-size: 18px;
            font-weight: 700;
          }
        }
      }
      &:nth-child(1){}
      &:nth-child(2){}
      &:nth-child(3){}
    }
  }
}

@media screen and (max-width:1200px) {
  
  width: 30vw;
box-shadow: 3px 3px 4px rgba(0,0,0,0.1);
height: 400px;
outline: 1px solid rgba(0,0,0,0.2);
border-radius: 15px;
.innertop{
  width: 100%;
  height: 50px;
  /* outline: 1px dotted red; */
  ul{
    /* outline: 1px dotted red; */
    height: 100%;
    margin: 0 20px;
    
    align-items: center;
    display: flex;
    justify-content: space-between;
    li{
      &:nth-child(1){
        font-weight: 700;
        font-size: 18px;
      }
      &:nth-child(2){
        font-size: 10px;
        cursor: pointer;
        padding: 5px 15px;
        border-radius: 5px;
        box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
        
      }
    }
  }
}
.innerbtm{
  width: 100%;
  height: 100%;
  /* outline: 1px dotted red; */

  ul{
    
    li{
      margin-left: 15px;
      font-size: 14px;
      display: flex;
      margin-top: 20px;
      margin-right: 15px;
      cursor: pointer;
      /* transition: 0.2s; */
      &:hover{
        outline: 1px solid rgba(0,0,0,0.1);
        box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
      }
      .photo{
        /* outline: 1px dotted red; */
        width: 80px;
        height: 90px;
        
        margin-right: 10px;
      }
      .photo1{
        background-image: url(${PACKAGE1});
        background-position: center;
        background-size: cover;
      }
      .photo2{
        background-image: url(${PACKAGE2});
        background-position: center;
        background-size: cover;
      }
      .photo3{
        background-image: url(${PACKAGE3});
        background-position: center;
        background-size: cover;
      }
      .photo4{
        background-image: url(${PACKAGE4});
        background-position: center;
        background-size: cover;
      }
      .photo5{
        background-image: url(${PACKAGE5});
        background-position: center;
        background-size: cover;
      }
      .photo6{
        background-image: url(${PACKAGE6});
        background-position: center;
        background-size: cover;
      }
      .photo7{
        background-image: url(${PACKAGE7});
        background-position: center;
        background-size: cover;
      }
      .photo8{
        background-image: url(${PACKAGE8});
        background-position: center;
        background-size: cover;
      }
      .photo9{
        background-image: url(${PACKAGE9});
        background-position: center;
        background-size: cover;
      }
      .text{
        width: 200px;
        padding-top: 20px;
        P{
          &:nth-child(1){
            font-weight: 600;
            line-height: 15px;
          }
          &:nth-child(2){
            margin-top: 10px;
            font-size: 18px;
            font-weight: 700;
          }
        }
      }
      &:nth-child(1){}
      &:nth-child(2){}
      &:nth-child(3){}
    }
  }
}

}

@media screen and (max-width:700px) {
margin-bottom: 20px !important;
position: relative;
width: 96%;
box-shadow: 3px 3px 4px rgba(0,0,0,0.1);
height: 100%;
padding-bottom: 20px;
margin: 0 10px;
outline: 1px solid rgba(0,0,0,0.2);
border-radius: 15px;
.innertop{
  width: 100%;
  height: 50px;
  /* outline: 1px dotted red; */
  ul{
    /* outline: 1px dotted red; */
    height: 100%;
    margin: 0 20px;
    
    align-items: center;
    display: flex;
    justify-content: space-between;
    li{
      &:nth-child(1){
        font-weight: 700;
        font-size: 18px;
      }
      &:nth-child(2){
        font-size: 10px;
        cursor: pointer;
        padding: 5px 15px;
        border-radius: 5px;
        box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
        
      }
    }
  }
}
.innerbtm{
  width: 100%;
  height: 100%;
  display: flex;
  /* position: relative; */
  justify-content: left;
  /* outline: 1px dotted red; */

  ul{
    display: flex;
    justify-content: space-around;
    margin-top: -30px;
    width: 60% !important;
    margin-right: 0px;
    li{
      /* outline:  1px dotted red; */
      margin-left: 0px;
      display: flex;
      margin-right: -10px;
      cursor: pointer;

      &:first-child{
        margin-left: 20px;
      }

      &:last-child{
        margin-right: 30px;
      }
      /* outline: 1px dotted red; */
      /* transition: 0.2s; */
      &:hover{
        outline: none;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.0);
      }
      .photo{
        /* outline: 1px dotted red; */
        width: 11.5vw;
        height: 11.5vw;
        margin-top: 15px;
        margin-right: 10px;
      }
      
      .text{
        width: 100%;
        /* position: relative; */
        padding-top: 20px;
        /* outline: 1px dotted red; */
        P{
          &:nth-child(1){
            width: 20vw;
            /* outline: 1px dotted red; */
            font-weight: 600;
            line-height: 20px;
            padding-top:20px;
            margin-bottom: 20px;
            box-sizing: border-box;
            font-size: 0.6rem;
            letter-spacing: -1.5px;
          }
          &:nth-child(2){
            position: absolute;
            bottom: 0px;
            transform:  translateX(-30%);
            width: 20vw;
            margin-bottom: 5px;
            /* outline: 1px dotted red; */
            margin-top: 20px;
            font-size: 3vw;
            font-weight: 700;
          }
        }
      }
      &:nth-child(1){}
      &:nth-child(2){}
      &:nth-child(3){}
    }
  }
}

}
`



const Sixthlayer = () => {
  return (
    <div>
      <Allwrap6>
        <div className='innerwrap'>

        <CompBox>
          <div className='innertop'>
            <ul>
              <li>패키지</li>
              <li>더보기</li>
            </ul>
          </div>
          <div className='innerbtm'>
            <ul>
              <li>
                <div className='photo photo1'></div>
                <div className='text'>
                  <p className='product'>극장판 도라에몽:진구의 지구 교향곡 - 얼리버드관람권</p>
                  <p className='price'>14,000원</p>
                </div>
              </li>
              <li>
                <div className='photo photo2'></div>
                <div className='text'>
                  <p className='product'>우리 패키지</p>
                  <p className='price'>62,000원</p>
                </div>
              </li>
              <li>
                <div className='photo photo3'></div>
                <div className='text'>
                  <p className='product'>나랑 너 패키지</p>
                  <p className='price'>35,000원</p>
                </div>
              </li>
            </ul>
          </div>
        </CompBox>
        <CompBox>
          <div className='innertop'>
            <ul>
              <li>영화관람권</li>
              <li>더보기</li>
            </ul>
          </div>
          <div className='innerbtm'>
            <ul>
              <li>
                <div className='photo photo4'></div>
                <div className='text'>
                  <p className='product'>CGV 영화관람관</p>
                  <p className='price'>13,000원</p>
                </div>
              </li>
              <li>
                <div className='photo photo5'></div>
                <div className='text'>
                  <p className='product'>IMAX 영화관람권</p>
                  <p className='price'>18,000원</p>
                </div>
              </li>
              <li>
                <div className='photo photo6'></div>
                <div className='text'>
                  <p className='product'>4DX 영화관람권</p>
                  <p className='price'>19,000원</p>
                </div>
              </li>
            </ul>
          </div>
        </CompBox>
        <CompBox>
          <div className='innertop'>
            <ul>
              <li>기프트카드</li>
              <li>더보기</li>
            </ul>
          </div>
          <div className='innerbtm'>
            <ul>
              <li>
                <div className='photo photo7'></div>
                <div className='text'>
                  <p className='product'>PACONNIE A형</p>
                  <p className='price'>금액충전형</p>
                </div>
              </li>
              <li>
                <div className='photo photo8'></div>
                <div className='text'>
                  <p className='product'>PACONNIE B형</p>
                  <p className='price'>금액충전형</p>
                </div>
              </li>
              <li>
                <div className='photo photo9'></div>
                <div className='text'>
                  <p className='product'>PACONNIE C형</p>
                  <p className='price'>금액충전형</p>
                </div>
              </li>
            </ul>
          </div>
        </CompBox>
      
        </div>
      </Allwrap6>
    </div>
  )
}

export default Sixthlayer
