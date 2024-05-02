import styled from 'styled-components';

const Keywords = ({ Text,gradient,clr}) => {
    return (
            <BoldUnderlineWhiteText clr={clr} gradient={gradient}>
              {Text}
            </BoldUnderlineWhiteText>
    );
}

export default Keywords;

const BoldUnderlineWhiteText = styled.span`
font-weight: 300;
color: white;
position: relative;
border-bottom: white 0.3rem solid;
border-bottom-color: ${props => props.$gradient};
padding: 0.5rem 1rem 0 1rem;
&:hover {
        background-color: ${props => props.$clr};
        cursor: pointer;  
    }

  /* &:before {
    content: '';
    position: absolute;
    left: -8px; 
    right: -8px; 
    bottom: -5px; 
    height: 5px; 
    background: ${props => props.gradient}; 
  } */
`;