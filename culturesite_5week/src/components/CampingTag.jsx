import React from 'react';
import styled from 'styled-components';

function CampingTag({tags}) {
    
    // const tagsArr = tags.split(',');
    // console.log(tags);
    return (
        <>
            {/* <div 
                style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                {tagsArr.map((tag) => {
                    return(
                    <Tag>
                        {tag}
                    </Tag> )
                })}
                
            </div> */}
            
        </>
    );
}
const Tag = styled.div`
    border : 1px solid gray;
    line-height: 1.6rem;
    font-size: 0.8rem;
    padding: 0px 5px;
    margin: 0.5rem 0.5rem 0 0;
    border-radius: 10px;

`

export default CampingTag;