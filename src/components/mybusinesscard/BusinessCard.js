import {useEffect, useState} from "react";
// 명함 리스트 초기화
import cards from "./card";
import Recommand from "./Recommand";
import Cardshape from "./Cardshape"

export default function BusinessCard() {

    const [winners, setWinners] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        setLoading(false);
    },[]);

    const isDone = () => {
        const len = winners.length;
        if(len < 3 && len >= 0){
            return false;
        }else{
            return true;
        }
    }
    const recommandClicked = () => {
        if(!isDone()){

            while(true){
                const rand = Math.floor(Math.random() * cards.length);
                if(!winners.includes(rand)){
                    setWinners([...winners, rand]);
                    break;
                }
            }

        }else{
            let msg = "이미 3명의 당첨자 | ";
            for(let rand of winners){
               msg+=cards[rand].name + " "; 
            }
            msg+="| 이(가) 있습니다.";
            window.alert(msg);
        }
    }

    return(
        <div>
            {
                loading ? "LOADING" : 
                <>
                    <Cardshape winner={cards[winners[winners.length-1]]} />
                    <Recommand recommandClicked={recommandClicked} />
                </>
            }
            
        </div>
    );
};