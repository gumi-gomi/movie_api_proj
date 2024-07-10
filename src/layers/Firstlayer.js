import React, { useState } from 'react'
import styled from 'styled-components'
import CGVLOGO from '../images/cgvlogo.png'






const Menuwrap = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fff;
  position: absolute;
  z-index: 5;
  top: -100px !important;
  /* outline: 1px dotted red; */
  transition: transform 0.2s ease-in-out;
  transform: ${({isOpen}) => (isOpen ? `translateY(-100px)` : 'translateY(300px)')};

    .menuinner{
        display: flex;
        width: 1100px;
        /* outline: 1px dotted red; */
        height: 100%;
        margin: 0 auto;

        .togglebtn{
            display: none;
        }
        
        ul{
            position:relative;
            z-index: 5;
            padding: 20px;
            margin-right : 20px;
            li{
                color:gray;
                cursor: pointer;
                margin-bottom: 15px;
                font-size: 12px;
                transition:0.1s;
                &.boldname{
                    color:black;
                    font-weight: 700;
                    font-size:14px;
                }

                &:hover{
                    color: black;
                }
            }

        }

    }

    @media screen and (max-width : 1200px) {
        width: 100%;
  height: 300px;
  background-color: #fff;
  position: absolute;
  z-index: 5;
  top: -100px !important;
  /* outline: 1px dotted red; */
  transition: transform 0.2s ease-in-out;
  transform: ${({isOpen}) => (isOpen ? `translateY(-100px)` : 'translateY(300px)')};

    .menuinner{
        display: flex;
        width: 100%;
        /* outline: 1px dotted red; */
        height: 100%;
        margin: 0 auto;
        
        ul{
            position:relative;
            z-index: 5;
            padding: 20px;
            margin-right : 20px;
            li{
                color:gray;
                cursor: pointer;
                margin-bottom: 15px;
                font-size: 12px;
                transition:0.1s;
                &.boldname{
                    color:black;
                    font-weight: 700;
                    font-size:14px;
                }

                &:hover{
                    color: black;
                }
            }

        }

    }
    }

    @media screen and (max-width : 780px) {
        width: 285px;
  height: 700px;
  background-color: #fff;
  position: absolute;
  z-index: 20;
  top: 200px !important;
  box-shadow:4px 4px 6px rgba(0,0,0,0.2);
  /* outline: 1px dotted red; */
  transition: transform 0.2s ease-in-out;
  transform: ${({isOpen}) => (isOpen ? `translateX(-290px)` : 'translateX(0px)')};

  
  .menuinner{
      display: flex;
      flex-wrap: wrap;
        width : 100%;
        /* outline: 1px dotted red; */
        justify-content: space-around;
        height: 100%;
        margin: 0 auto;
        /* padding-top:100px; */
        
        ul{
            /* outline: 1px dotted red; */
            position:relative;
            z-index: 5;
            padding: 20px;
            height: 100px;
            margin-right : 5px;
            li{
                color:gray;
                cursor: pointer;
                margin-bottom: 10px;
                font-size: 12px;
                transition:0.1s;
                &.boldname{
                    color:black;
                    font-weight: 700;
                    font-size:18px;
                }

                &:hover{
                    color: black;
                }
            }

        }

    }
    }

`

const Allwrap = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    background-color: #fff;
    /* outline: 1px dotted red; */
    z-index: 15;
    
    .inner{
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        z-index: 15;
        background-color: #fff;
        /* outline: 1px dotted red; */

        .innertop{
            /* border-bottom: 1px solid rgba(0,0,0,0.2); */
            display: flex;
            justify-content: space-between;
            padding-top: 50px ;
            /* outline: 1px dotted red; */

            &::after {
    content: '';
    position: absolute;
    bottom: 45px;
    left: 0px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
            .logo{
                background-image: url(${CGVLOGO});
                background-position: center;
                /* outline: 1px dotted red; */
                width: 400px;
                height: 100px;
                background-size: contain;
                background-repeat: no-repeat;

            }
            .topmenu{
                width: 500px;
                /* outline: 1px dotted red; */
                ul{
                    width: 100%;
                    display: flex;
                    justify-content: right;
                    li{
                        /* outline: 1px dotted red; */
                        width: 60px;
                        height: 70px;
                        margin-top: 25px;
                        margin-left: 25px;

                        div{
                            /* outline: 1px dotted red; */
                            height: 50px;
                            font-size: 25px;
                            display: flex;
                            justify-content:center;
                            align-items:end;
                            color: rgba(0,0,0,0.3);
                            transition: 0.2s;
                            &:hover{
                                color: rgba(0,0,0,0.7);
                            }
                        }
                        span{
                            width: 100%;
                            display: inline-block;
                            font-size:10px;
                            font-weight: 500;
                            text-align: center;
                        }
                    }
                }
            }
        }
        .innerbtm{
            display: flex;
            justify-content: space-between;
            width: 100%;
            box-sizing: border-box;

            .togglebtm{
                display: none;
            }
   
            ul{
                padding-top:20px;
                font-size: 14px;
                font-weight: 600;
                margin-left: 20px;
                display: flex;
                cursor: pointer;
                
                li{
                    transition: 0.2s;
                    margin-right: 45px;
                    &:hover{
                        font-weight: 700;
                        color: red;
                    }
                }
            }
            .searchbtn{
                /* outline: 1px dotted red; */
                display: flex;
                margin-top: 15px;
                input{
                    border: none;
                    outline: 1px solid rgba(0,0,0,0.2);
                    width: 170px;
                    box-sizing: border-box;
                    height: 100%;
                    border-radius: 5px 0 0 5px;
                }
                button{
                    cursor: pointer;
                    height: 100%;
                    border: none;
                    outline: 1px solid rgba(0,0,0,0.2);
                    width: 40px;
                    background-color: #fff;
                    border-radius: 0 5px 5px 0;

                    i{
                        font-size: 25px;
                        color: gray;
                    }
                }
            }
        }
    }

    @media screen and (max-width : 1200px) {
        max-width: 100%;
    height: 200px;
    position: relative;
    background-color: #fff;
    /* outline: 1px dotted red; */
    z-index: 15;
    
    .inner{
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
        position: relative;
        z-index: 15;
        background-color: #fff;
        /* outline: 1px dotted red; */

        .innertop{
            /* border-bottom: 1px solid rgba(0,0,0,0.2); */
            display: flex;
            justify-content: space-between;
            padding-top: 50px ;
            /* outline: 1px dotted red; */

            &::after {
    content: '';
    position: absolute;
    bottom: 45px;
    left: 0px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
            .logo{
                background-image: url(${CGVLOGO});
                background-position: center;
                /* outline: 1px dotted red; */
                width: 400px;
                height: 100px;
                background-size: contain;
                background-repeat: no-repeat;

            }
            .topmenu{
                width: 500px;
                /* outline: 1px dotted red; */
                ul{
                    width: 100%;
                    display: flex;
                    justify-content: right;
                    li{
                        /* outline: 1px dotted red; */
                        width: 60px;
                        height: 70px;
                        margin-top: 25px;
                        margin-left: 25px;

                        div{
                            /* outline: 1px dotted red; */
                            height: 50px;
                            font-size: 25px;
                            display: flex;
                            justify-content:center;
                            align-items:end;
                            color: rgba(0,0,0,0.3);
                            transition: 0.2s;
                            &:hover{
                                color: rgba(0,0,0,0.7);
                            }
                        }
                        span{
                            width: 100%;
                            display: inline-block;
                            font-size:10px;
                            font-weight: 500;
                            text-align: center;
                        }
                    }
                }
            }
        }
        .innerbtm{
            display: flex;
            justify-content: space-between;
            width: 100%;
            box-sizing: border-box;

   
            ul{
                padding-top:20px;
                font-size: 14px;
                font-weight: 600;
                margin-left: 20px;
                display: flex;
                cursor: pointer;
                
                li{
                    transition: 0.2s;
                    margin-right: 45px;
                    &:hover{
                        font-weight: 700;
                        color: red;
                    }
                }
            }
            .searchbtn{
                /* outline: 1px dotted red; */
                display: flex;
                margin-top: 15px;
                input{
                    border: none;
                    outline: 1px solid rgba(0,0,0,0.2);
                    width: 170px;
                    box-sizing: border-box;
                    height: 100%;
                    border-radius: 5px 0 0 5px;
                }
                button{
                    cursor: pointer;
                    height: 100%;
                    border: none;
                    outline: 1px solid rgba(0,0,0,0.2);
                    width: 40px;
                    background-color: #fff;
                    border-radius: 0 5px 5px 0;

                    i{
                        font-size: 25px;
                        color: gray;
                    }
                }
            }
        }
    }
    }
    @media screen and (max-width : 700px) {
        max-width: 100%;
    height: 200px;
    position: relative;
    background-color: #fff;
    /* outline: 1px dotted red; */
    z-index: 15;
    
    .inner{
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
        position: relative;
        z-index: 15;
        background-color: #fff;
        /* outline: 1px dotted red; */

        .innertop{
            /* border-bottom: 1px solid rgba(0,0,0,0.2); */
            display: flex;
            justify-content: space-between;
            padding-top: 50px ;
            /* outline: 1px dotted red; */

            &::after {
    content: '';
    position: absolute;
    bottom: 45px;
    left: 0px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
            .logo{
                background-image: url(${CGVLOGO});
                background-position: center;
                /* outline: 1px dotted red; */
                width: 300px;
                height: 100px;
                background-size: contain;
                background-repeat: no-repeat;

            }
            .topmenu{
                width: 500px;
                /* outline: 1px dotted red; */
                ul{
                    width: 100%;
                    display: flex;
                    justify-content: right;
                    li{
                        /* outline: 1px dotted red; */
                        width: 60px;
                        height: 70px;
                        margin-top: 25px;
                        margin-left: -10px;

                        div{
                            /* outline: 1px dotted red; */
                            height: 50px;
                            font-size: 18px;
                            display: flex;
                            justify-content:center;
                            align-items:end;
                            color: rgba(0,0,0,0.3);
                            transition: 0.2s;
                            &:hover{
                                color: rgba(0,0,0,0.7);
                            }
                        }
                        span{
                            width: 100%;
                            display: inline-block;
                            font-size:9px;
                            font-weight: 500;
                            text-align: center;
                        }
                    }
                }
            }
        }
        .innerbtm{
            display: flex;
            justify-content: right;
            width: 100%;
            box-sizing: border-box;
            position: relative;

            .togglebtm{
                position: absolute;
                left: -10px;
                top: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                box-shadow: 5px 0px 3px rgba(0,0,0,0.2);
                /* outline: 1px dotted red; */
                width: 50px;
                padding-left: 20px;
                height: 45px;
                cursor: pointer;
            }

            button{
                display: block;
                width: 50px;
                margin-right: 5px;
                background-color: royalblue;

            }
   
            ul{
                padding-top:20px;
                font-size: 12px;
                font-weight: 600;
                margin-left: 20px;
                display: none;
                cursor: pointer;
                
                li{ .topmenu{
                width: 500px;
                /* outline: 1px dotted red; */
                ul{
                    width: 100%;
                    display: flex;
                    justify-content: right;
                    li{
                        /* outline: 1px dotted red; */
                        width: 60px;
                        height: 70px;
                        margin-top: 25px;
                        margin-left: 25px;

                        div{
                            /* outline: 1px dotted red; */
                            height: 50px;
                            font-size: 25px;
                            display: flex;
                            justify-content:center;
                            align-items:end;
                            color: rgba(0,0,0,0.3);
                            transition: 0.2s;
                            &:hover{
                                color: rgba(0,0,0,0.7);
                            }
                        }
                        span{
                            width: 100%;
                            display: inline-block;
                            font-size:10px;
                            font-weight: 500;
                            text-align: center;
                        }
                    }
                }
            }
                    transition: 0.2s;
                    margin-right: 30px;
                    &:hover{
                        font-weight: 700;
                        color: red;
                    }
                }
            }
            .searchbtn{
                /* outline: 1px dotted red; */
                display: flex;
                margin-top: 15px;
                input{
                    border: none;
                    outline: 1px solid rgba(0,0,0,0.2);
                    width: 170px;
                    box-sizing: border-box;
                    height: 100%;
                    border-radius: 5px 0 0 5px;
                }
                button{
                    cursor: pointer;
                    height: 100%;
                    border: none;
                    outline: 1px solid rgba(0,0,0,0.2);
                    width: 40px;
                    background-color: #fff;
                    border-radius: 0 5px 5px 0;

                    i{
                        font-size: 25px;
                        color: gray;
                    }
                }
            }
        }
    }
    }
`
const Firstlayer = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const toggleMenu = () => {
      setIsOpen(false);
    };
    const upMenu = ()=>{
        setIsOpen(true)
    }

    const togglehandler = ()=>{
        setIsOpen(!isOpen);
    }




  return (
    <>
        <Allwrap>
            <div className='inner'>
                <div className='innertop'>
                    <div className='logo'></div>
                    <div className='topmenu'>
                        <ul   className="menu-button">
                            <li >
                                <div><i class="fa-solid fa-lock"></i></div>
                                <span  >로그인</span>
                            </li>
                            <li>
                                <div><i class="fa-solid fa-right-to-bracket"></i></div>
                                <span>회원가입</span>
                            </li>
                            <li>
                                <div><i class="fa-solid fa-user"></i></div>
                                <span>MY CGV</span>
                            </li>
                            <li>
                                <div><i class="fa-solid fa-headset"></i></div>
                                <span>고객샌터</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className='innerbtm'>
                    <ul>
                        <li onMouseOver={toggleMenu} onMouseLeave={upMenu}><span>영화</span></li>
                        <li onMouseOver={toggleMenu} onMouseLeave={upMenu}><span>극장</span></li>
                        <li onMouseOver={toggleMenu} onMouseLeave={upMenu}><span>예매</span></li>
                        <li onMouseOver={toggleMenu} onMouseLeave={upMenu}><span>스토어</span></li>
                        <li onMouseOver={toggleMenu} onMouseLeave={upMenu}><span>이벤트</span></li>
                        <li onMouseOver={toggleMenu} onMouseLeave={upMenu}><span>혜택</span></li>
                    </ul>
                        < div className='togglebtm' onClick={togglehandler}><i class="fa-solid fa-bars"></i></div>
                    <div className='searchbtn'>

                    <input placeholder='북극백화점의 안내원'></input>
                    <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </div>
        <Menuwrap isOpen={isOpen} onMouseOver={toggleMenu} onMouseLeave={upMenu}>
            <div className='menuinner'>
                <ul>
                    <li className='boldname'>영화</li>
                    <li>무비차트</li>
                    <li>아트하우스</li>
                    <li>ICECON</li>
                </ul>
                <ul>
                    <li className='boldname'>극장</li>
                    <li>CGV 극장</li>
                    <li>특별관</li>
                </ul>
                <ul>
                    <li className='boldname'>예매</li>
                    <li>빠른예매</li>
                    <li>상영스케줄</li>
                    <li>English Ticketing</li>
                    <li>English Schedule</li>
                </ul>
                <ul>
                    <li className='boldname'>스토어</li>
                    <li>패키지</li>
                    <li>영화관람권</li>
                    <li>기프트카드</li>
                    <li>콤보</li>
                    <li>팝콘</li>
                    <li>음료</li>
                    <li>스낵</li>
                    <li>플레이존</li>
                    <li>씨네샵</li>
                </ul>
                <ul>
                    <li className='boldname'>이벤트</li>
                    <li>SPECIAL</li>
                    <li>영화/예매</li>
                    <li>멤버십/CLUB</li>
                    <li>CGV 극장별</li>
                    <li>제휴할인</li>
                    <li>당첨자 발표</li>
                    <li>종료된 이벤트</li>
                </ul>
                <ul>
                    <li className='boldname'>혜택</li>
                    <li>CGV 할인정보</li>
                    <li>CLUB 서비스</li>
                    <li>VIP 라운지</li>
                </ul>
            </div>
        </Menuwrap>
        </Allwrap>
    </>
  )
}

export default Firstlayer
