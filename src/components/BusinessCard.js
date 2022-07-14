import React, {useEffect, useState} from "react";
import datas from "./mybusinesscard/card";

export default function BusinessCard() {

    const [cards, setCards] = useState([]);
    const [pickedCards, setPickedCards] = useState([]);

    function draw() {
        //조건 추가 3명 이상
        if(pickedCards.length > 2){
            const names = pickedCards.reduce((acc, cur)=>{
                return acc = acc.concat(`${cur.name}, `)
            }, "");
            return alert(`당첨자는 ${names} 입니다.`);
        }
        const randomIdx = Math.floor(Math.random() * cards.length);
        const randomItem = cards[randomIdx];

        //중복 제거
        setCards(cards.filter(c=>c.phoneNumber !== randomItem.phoneNumber));
        //당첨자 관리
        setPickedCards([...pickedCards, randomItem]);
    }

    useEffect(()=>{
        // cards
        //API로 datas를 얻었다 생각하고
        setCards(datas);
    },[])

    return(
        <div>
            
            {/* {pickedCards.length > 0 && <div>{pickedCards[pickedCards.length-1].name}</div>} */}
            {
                pickedCards.length > 0 ? pickedCards.map((picked)=>{
                    return (<div key={picked.phoneNumber}>{picked.name}</div>);
                }) : "추첨해주세요"
            }
            {cards.length > 0 && <button onClick={draw}>추첨하기_라이브코딩</button>}
            
        </div>
    )
}

/* 
    key는 왜 필요한가?
    map을 사용해서 100개의 컴포넌트를 렌더링한다고 가정할 때
    key값이 어떤 Element가 변경되었는지 도와준다.

    map의 index로 key값은 최후의 수단 권장하지 않는다.
    왜냐 스테이트가 엉망이 되거나 할 수 있다.

*/