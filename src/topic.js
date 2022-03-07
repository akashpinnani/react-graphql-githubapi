import React from 'react';
import styled from 'styled-components';
import StarGazer  from './starGazer';

const TopicWrapper = styled.div`
padding: 16px 32px;
border: 2px solid whitesmoke;
display: flex;
justifyContent: space-around;
margin: 20px 0;
cursor: pointer;
borderRadius: 4px;
&:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}
`;

const EqualFlex = styled.div`
flex: 1
`;

export const BoldPara = styled.p`
font-weight: 600;
font-size: 24px;
`;

const Topic = ({ name, stargazerCount, updateTopic }) => {
    return (
        <>
            <TopicWrapper onClick={() => updateTopic(name)}>
                <EqualFlex>
                    <p>Topic </p>
                    <BoldPara>
                        {name} </BoldPara></EqualFlex>
                <EqualFlex>
                    <StarGazer stargazerCount={stargazerCount}></StarGazer>
                   </EqualFlex>
            </TopicWrapper>
        </>
    )
}

export default Topic;