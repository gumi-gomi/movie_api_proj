import React from 'react'
import styled from 'styled-components';

const Footer = () => {

    const Footerwrap = styled.div`
    width: 100%;
    height: 200px;
    background-color: #f8f8f8;
    margin-top: 20px;
    .inner{
        position: relative;
        width: 1100px;
        margin: 0 auto;
        height: 100%;
        /* outline: 1px dotted red; */
        .innertop{
            ul{
                
                height: 50px;
                /* outline: 1px dotted red; */
                display: flex;
                justify-content: space-around;
                li{
                    line-height: 50px;
                    /* margin-right: 0px; */
                    font-size: 12px;
    
                  a{
                    font-weight: 500;

                    &:nth-child(8){
                        font-weight: 700;
                    }
                  }
                }
            }
        }
        .innerbtm{
          display: flex;
          height: 150px;
            .btmleft{
                /* outline: 1px dotted red; */
                display: flex;
                flex-direction: column;
                justify-content: center;
                span{
                    font-size: 12px;
                    
                }
            }
            .btmright{
                position: absolute;
                /* outline: 1px dotted red; */
                right: 60px;
                bottom: 30px;
                select{
                    height: 30px;
                }
                button{
                    height: 30px;
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        
        width: 100%;
    height: 200px;
    background-color: #f8f8f8;
    margin-top: 20px;
    .inner{
        position: relative;
        width: 100%;
        margin: 0 auto;
        height: 100%;
        /* outline: 1px dotted red; */
        .innertop{
            ul{
                
                height: 50px;
                /* outline: 1px dotted red; */
                display: flex;
                justify-content: space-around;
                li{
                    line-height: 50px;
                    /* margin-right: 0px; */
                    font-size: 10px;
    
                  a{
                    font-weight: 500;

                    &:nth-child(8){
                        font-weight: 700;
                    }
                  }
                }
            }
        }
        .innerbtm{
          display: flex;
          height: 150px;
            .btmleft{
                /* outline: 1px dotted red; */
                display: flex;
                margin-left: 20px;
                flex-direction: column;
                justify-content: center;
                span{
                    font-weight: 600;
                    font-size: 10px;
                    
                }
            }
            .btmright{
                position: absolute;
                /* outline: 1px dotted red; */
                right: 25px;
                bottom: 30px;
                select{
                    height: 30px;
                }
                button{
                    height: 30px;
                }
            }
        }
    }

    }

    @media screen and (max-width: 700px) {
        
        width: 100%;
    height: 200px;
    background-color: #f8f8f8;
    margin-top: 20px;
    .inner{
        position: relative;
        width: 100%;
        margin: 0 auto;
        height: 100%;
        /* outline: 1px dotted red; */
        .innertop{
            ul{
                padding-top: 10px;
                height: 60px;
                /* outline: 1px dotted red; */
                display: flex;
                flex-wrap: wrap;
                /* justify-content: space-around; */
                li{
                    margin-top: 0px;
                    line-height: 0px;
                    margin-right: 20px;
                    font-size: 10px;
                    height: 20px !important;
    
                  a{
                    font-weight: 500;

                    &:nth-child(8){
                        font-weight: 700;
                    }
                  }
                }
            }
        }
        .innerbtm{
          display: flex;
          height: 150px;
            .btmleft{
                /* outline: 1px dotted red; */
                display: flex;
                margin-left: 20px;
                flex-direction: column;
                justify-content: center;
                span{
                    font-weight: 600;
                    font-size: 10px;
                    
                }
            }
            .btmright{
                display: none;
                position: absolute;
                /* outline: 1px dotted red; */
                right: 10px;
                bottom: 10px;
                select{
                    width: 140px;
                    height: 30px;
                }
                button{
                    height: 30px;
                }
            }
        }
    }

    }
    `
  return (
    <div>
      <Footerwrap>
        <div className='inner'>
            <div className='innertop'>
                <ul>
                    <li><a>회사소개</a></li>
                    <li><a>지속가능경영</a></li>
                    <li><a>IR</a></li>
                    <li><a>채용정보</a></li>
                    <li><a>광고/제휴/출점문의</a></li>
                    <li><a>이용약관</a></li>
                    <li><a>편성기준</a></li>
                    <li><a>개인정보처리방침</a></li>
                    <li><a>법적고지</a></li>
                    <li><a>이메일주소무단수집거부</a></li>
                    <li><a>운리경영</a></li>
                    <li><a>사이버감사실</a></li>
                </ul>
            </div>
            <div className=' innerbtm'>
                <div className='btmleft'>
                    <span>(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)</span><br/>
                    <span>대표이사 : 허민회 사업자등록번호 : 104-81-45690 통신판매업신고번호 : 2017-서울용산-0662</span><br/>
                    <span>호스팅사업자 : CJ올리브네트웍스 개인정보 책임자 : 도형구 대표이메일 : cjcgvmaster@cj.net</span><br/>
                    <span>copyright <strong>CJ.CGV.All RIghts Reserved</strong></span>
                </div>
                <div className='btmright'>
                    <select>
                        <option>계열사 바로가기</option>
                        <optgroup label='엔터테인먼트 & 미디어'>
                            <option>CJ ENM 엔터테인먼트부문</option>
                            <option>CJ CGV</option>
                        </optgroup>
                        <optgroup label='생명공학'>
                            <option>CJ 제일제당</option>
                            <option>CJ FEED&CARD</option>
                        </optgroup>
                    </select>
                    <button type='submit'>GO</button>
                </div>
            </div>
        </div>
      </Footerwrap>
    </div>
  )
}

export default Footer;
