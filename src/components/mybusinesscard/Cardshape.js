
export default function Cardshape({winner}) {

    const winner_info = winner ?? "추첨해주세요.";
    
    return(
        <h1>{
            winner_info.name
            }</h1>
    );
}