import styled from 'styled-components';

const Keywords = ({ Text,gradient,clr}) => {
    return (
        <div>
            <BoldUnderlineWhiteText clr={clr} gradient={gradient}>{Text}</BoldUnderlineWhiteText>
        </div>
    );
}

export default Keywords;

const BoldUnderlineWhiteText = styled.span`
font-weight: 300;
color: white;
position: relative;
&:hover {
        background-color: ${props => props.clr};
        cursor: pointer;  
    }

  &:before {
    content: '';
    position: absolute;
    left: -8px; 
    right: -8px; 
    bottom: -5px; 
    height: 5px; 
    background: ${props => props.gradient}; 
  }
`;