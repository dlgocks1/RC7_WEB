import { useEffect, useState } from "react";
import styled from "styled-components"

function LoadingItem({delaytime}){

    const [backgound, setbackground] = useState({backgroundColor : "rgba(255,255,255,0.05)"});
    const [nowLoading, setnowLoading] = useState(0);

    useEffect(() => {
        let Loadingdelay;
        if(nowLoading===0){
            Loadingdelay = setTimeout(() => {
                    setbackground({backgroundColor : "rgba(255,255,255,0.15)",transition : "all 0.5s"});
                    setnowLoading(1);
            },400+delaytime);
        }

        if(nowLoading===1){
            Loadingdelay = setTimeout(() => {
                setbackground({backgroundColor : "rgba(255,255,255,0.05)",transition : "all 0.5s"});
                setnowLoading(0);
            },400+delaytime);
        }

        return() =>{ clearTimeout(Loadingdelay);}
        //clearTimeout 써야되나?
    },
    [nowLoading]);

    return(
        <LoadingItemStyle style={backgound}>
        </LoadingItemStyle>
    );
}

const LoadingItemStyle = styled.div`
    top: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    /* background-color:rgba(255,255,255,0.5); */
`;

export default LoadingItem;