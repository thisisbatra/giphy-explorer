import styled from 'styled-components';

const Keywords = ({ Text}) => {
    return (
        <div>
            <BoldUnderlineWhiteText>{Text}</BoldUnderlineWhiteText> 
        </div>
    );
}

export default Keywords;

const BoldUnderlineWhiteText = styled.span`
font-weight: 300;
color: white;
position: relative;
  &:before {
    content: '';
    position: absolute;
    left: -10px; 
    right: -10px; 
    bottom: -3px; 
    height: 5px; 
    background-color: white;
  }
`;