# 제로베이스 4기 리액트 중간 미션

1. (1) 명함(각 명함은 Object) 리스트(Array) 초기화  
    MyBusinessCard 내가 만드는 중간 미션 /   
    card.js를 component/mybusiness/ 폴더에 넣어서 import해 초기화하였다.

2.  (2) BusinessCard 컴포넌트 안에 버튼 컴포넌트 넣을 생각.  
    MyBusinessCard 내가 만드는 중간 미션 /   
    Business.js를 부모 컴포넌트로 두고 Cardshape.js Recommand,js 를 자식 컴포넌트로 정하였다.

3. (2 - 1) 동일한 사람은 추첨되지 않도록,
```javascript
while(true){
    //난수로 card 인덱스 값 추출
    const rand = Math.floor(Math.random() * cards.length);
    if(!winners.includes(rand)){
        setWinners([...winners, rand]);
        break;
    }
}
```

4. (2 - 2) 별도로 추첨자 명단 저장
```javascript
//setState로 BusinessCard에 winners라는 배열 state 관리
const [winners, setWinners] = useState([]);
```

4. (2 - 3) 초기화 후 렌더링 할 수 있게 loading state와 useEffect(componentDidMount 동작) 활용
```javascript
const [loading, setLoading] = useState(true);
    
useEffect(()=>{
    setLoading(false);
},[]);

return 값
loading ? "LOADING" : 
<>
    <Cardshape winner={cards[winners[winners.length-1]]} />
    <Recommand recommandClicked={recommandClicked} />
</>
```