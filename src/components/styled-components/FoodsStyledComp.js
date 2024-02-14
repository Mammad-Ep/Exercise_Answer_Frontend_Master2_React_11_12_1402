import StyledFoods from 'styled-components';

const Img = StyledFoods.img`
width: 17px;
transition: all 0.3s;
${props=>props.x ? 'transform: rotate(180deg)':'transform: rotate(0deg)'}
`
const DivAccordion = StyledFoods.div`
margin:0 auto;
display: flex;
justify-content: space-between;
padding: 7px 10px;
height: 20px;
transition: all 0.3s;
background-color: ${(props)=>props.x ? 'rgb(75, 141, 222)' : '#ccc'};
border-radius: ${(props)=>props.x ? '5px 5px 0 0' : '5px'};
cursor: pointer;
`

const DivContent=StyledFoods.div`
width: 99%;
margin:0 auto;
height: ${(props)=>props.x ?  '400px':'0' };
border:${(props)=>props.x ?  '1px solid #ccc':'1px solid transparent' };
display:${(props)=>props.x ?  'block':'none' };
border-top: none;
border-radius:0 0 5px 5px ;
margin-top: 0px;
transition: all 0.3s;
display: flex;
justify-content: center;
align-items: center;
`
// display:${(props)=>props.x ? 'none' : 'block'};

export {Img,DivAccordion,DivContent}