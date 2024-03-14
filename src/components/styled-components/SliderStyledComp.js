import styled from 'styled-components';
// __________________________________________________________________________________

const Img1 = styled.img`
display: ${(props) => props.status == props.x ? 'block' : 'none'}
`

export { Img1 }