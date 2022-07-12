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
            {cards.length > 0 && <button onClick={draw}>추첨하기_라이브코딩</button>}
            {pickedCards.length > 0 && <div>{pickedCards[pickedCards.length-1].name}</div>}
        </div>
    )
}