import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SUITE from '../images/SUITE.png'
import CINE from '../images/CINE.png'
import DX from '../images/DX.png'
import CHEF from '../images/CHEF.png'


const imgArray = [SUITE, CINE,DX,CHEF]

const Allwrap5 = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    /* outline: 1px dotted red; */

    .inner{
        /* outline: 1px dotted red; */
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        position: relative;

        .innertop{
            height: 60px;
            /* outline: 1px dotted red; */
            ul{
                /* outline: 1px dotted red; */
                box-sizing: border-box;
                padding:  20px 60px;
                display: flex;
                justify-content: space-between;
                li{
                    &:nth-child(1){
                        font-size: 20px;
                        font-weight: 700;
                       
                    }
                    &:nth-child(2){
                        font-size: 12px;
                        display: inline-block;
                        padding: 8px 15px;
                        border-radius: 10px;
                        box-shadow: 0px 0px 2px rgba(0,0,0,0.4);
                        cursor: pointer;
                        transition: 0.5s;

                        &:hover{
                            background-color: rgba(0,0,0,0.2);
                            scale: 1.1;
                        }
                    }
                }
            }
        }
        .innerbtm{
            /* outline: 1px dotted red; */
            width: 100%;
            display: flex;

            .btmleft{
                /* outline: 1px dotted red; */
                flex:  1;
                display: flex;
                justify-content: center;
                align-items: center;
                
                .cinephoto{
                    width: 500px;
                    height: 270px;
                    border-radius: 15px;
                    margin: 20px 0;
                    /* background-color:  royalblue; */
                    background-image: url(${{SUITE}});
                    background-size: cover;
                    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
                }
            }
            .btmright{
                flex: 1;
                ul{
                    display: flex;
                    margin-top: 25px;
                    flex-direction:column;

                    li{
                        /* outline: 1px dotted red; */
                        margin-bottom:  10px;


                        span{
                            display: inline-block;
                            padding: 20px;
                            opacity: 0.5;
                            font-size: 20px;
                            padding-left: 40px;
                            font-weight: 700;
                            width: 470px;
                            border-radius: 10px;
                            transition: 0.3s;
                            cursor: pointer;

                            &.on{
                                outline: 1px solid rgba(0,0,0,0.3);
                                opacity: 1;
                                font-weight: 700;
                                background-color: rgba(0,0,0,0.05);
                                box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
                            }
                        }
                    }
                }
            }
        }
        
    }

    @media screen and (max-width: 1200px) {
        
    width: 100%;
    height: 400px;
    position: relative;
    /* outline: 1px dotted red; */

    .inner{
        /* outline: 1px dotted red; */
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
        position: relative;

        .innertop{
            height: 60px;
            /* outline: 1px dotted red; */
            ul{
                /* outline: 1px dotted red; */
                box-sizing: border-box;
                padding:  20px 60px;
                display: flex;
                justify-content: space-between;
                li{
                    &:nth-child(1){
                        font-size: 20px;
                        font-weight: 700;
                       
                    }
                    &:nth-child(2){
                        font-size: 12px;
                        display: inline-block;
                        padding: 8px 15px;
                        border-radius: 10px;
                        box-shadow: 0px 0px 2px rgba(0,0,0,0.4);
                        cursor: pointer;
                        transition: 0.5s;

                        &:hover{
                            background-color: rgba(0,0,0,0.2);
                            scale: 1.1;
                        }
                    }
                }
            }
        }
        .innerbtm{
            /* outline: 1px dotted red; */
            width: 100%;
            display: flex;

            .btmleft{
                /* outline: 1px dotted red; */
                flex:  1;
                display: flex;
                justify-content: center;
                margin-left: 30px;
                align-items: center;
                
                .cinephoto{
                    width: 450px;
                    height: 250px;
                    border-radius: 15px;
                    margin: 20px 0;
                    /* background-color:  royalblue; */
                    background-image: url(${{SUITE}});
                    background-size: cover;
                    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
                }
            }
            .btmright{
                flex: 0.7;
                /* outline: 1px dotted red; */
                width: 100%;
                ul{
                    margin-left: 20px;
                    display: flex;
                    margin-top: 25px;
                    flex-direction:column;

                    li{
                        /* outline: 1px dotted red; */
                        margin-bottom:  10px;


                        span{
                            display: inline-block;
                            padding: 20px;
                            opacity: 0.5;
                            font-size: 15px;
                            padding-left: 40px;
                            font-weight: 700;
                            width: 15vw;
                            border-radius: 10px;
                            transition: 0.3s;
                            cursor: pointer;

                            &.on{
                                outline: 1px solid rgba(0,0,0,0.3);
                                opacity: 1;
                                font-weight: 700;
                                background-color: rgba(0,0,0,0.05);
                                box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
                            }
                        }
                    }
                }
            }
        }
        
    }

    }

    @media screen and (max-width: 700px) {
        
        width: 100%;
        height: 100%;
        position: relative;
        /* outline: 1px dotted red; */
    
        .inner{
            /* outline: 1px dotted red; */
            max-width: 100%;
            height: 100%;
            margin: 0 auto;
            position: relative;
    
            .innertop{
                height: 60px;
                /* outline: 1px dotted red; */
                ul{
                    /* outline: 1px dotted red; */
                    box-sizing: border-box;
                    padding:  20px 60px;
                    display: flex;
                    justify-content: space-between;
                    li{
                        &:nth-child(1){
                            font-size: 20px;
                            font-weight: 700;
                           
                        }
                        &:nth-child(2){
                            font-size: 12px;
                            display: inline-block;
                            padding: 8px 15px;
                            border-radius: 10px;
                            box-shadow: 0px 0px 2px rgba(0,0,0,0.4);
                            cursor: pointer;
                            transition: 0.5s;
    
                            &:hover{
                                background-color: rgba(0,0,0,0.2);
                                scale: 1.1;
                            }
                        }
                    }
                }
            }
            .innerbtm{
                /* outline: 1px dotted red; */
                width: 100%;
                display: flex;
    
                .btmleft{
                    /* outline: 1px dotted red; */
                    flex:  1;
                    display: flex;
                    justify-content: center;
                    margin-left: 0px;
                    align-items: center;
                    
                    .cinephoto{
                        width: 80vw;
                        height: 40vw;
                        border-radius: 15px;
                        margin: 20px 0;
                        /* outline: 1px dotted red; */
                        /* background-color:  royalblue; */
                        background-image: url(${{SUITE}});
                        background-size: cover;
                        box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
                    }
                }
                .btmright{
                    display: none;
                    flex: 0.7;
                    /* outline: 1px dotted red; */
                    width: 100%;
                    ul{
                        margin-left: 20px;
                        display: flex;
                        margin-top: 25px;
                        flex-direction:column;
    
                        li{
                            /* outline: 1px dotted red; */
                            margin-bottom:  10px;
    
    
                            span{
                                display: inline-block;
                                padding: 20px;
                                opacity: 0.5;
                                font-size: 15px;
                                padding-left: 40px;
                                font-weight: 700;
                                width: 15vw;
                                border-radius: 10px;
                                transition: 0.3s;
                                cursor: pointer;
    
                                &.on{
                                    outline: 1px solid rgba(0,0,0,0.3);
                                    opacity: 1;
                                    font-weight: 700;
                                    background-color: rgba(0,0,0,0.05);
                                    box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
                                }
                            }
                        }
                    }
                }
            }
            
        }
    
        }
 `

const Fifthlayer = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
      };

      useEffect(() => {
        if (window.innerWidth < 700) {
            const interval = setInterval(() => {
                setActiveIndex(prevIndex => (prevIndex + 1) % 4);
            }, 2000);

            return () => clearInterval(interval); 
        }
    },[window.innerWidth]);

  return (
    <>
      <Allwrap5>
        <div className='inner'>
            <div className='innertop'>
                <ul>
                    <li>특별관</li>
                    <li><span>전체보기</span></li>
                </ul>
            </div>
            <div className='innerbtm'>
                <div className='btmleft'>
                    <div className='cinephoto'  style={{ backgroundImage: activeIndex === null?`url(${imgArray[0]})` :`url(${imgArray[activeIndex]})` }}></div>
                </div>
                <div className='btmright'>
                    <ul>
                        <li><span  className={activeIndex === 0 ? 'on' : ''}
          onMouseEnter={() => handleMouseEnter(0)}>SUITE CINEMA</span></li>
                        <li><span  className={activeIndex === 1 ? 'on' : ''}
          onMouseEnter={() => handleMouseEnter(1)}>CINE & LIVINGROOM</span></li>
                        <li><span  className={activeIndex === 2 ? 'on' : ''}
          onMouseEnter={() => handleMouseEnter(2)}>4DX</span></li>
                        <li><span  className={activeIndex === 3 ? 'on' : ''}
          onMouseEnter={() => handleMouseEnter(3)}>CINE de CHEF</span></li>
                    </ul>
                </div>
            </div>
        </div>
      </Allwrap5>
    </>
  )
}

export default Fifthlayer;