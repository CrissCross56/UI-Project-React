
import { useState } from "react";
import './maindisplay.css'
function MainDisplay(props){

    const [index, setIndex] = useState(0);
    console.log(props.imgSrc)

    function increment(){
        if(index >= props.imgSrc.length - 1){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
      
    }

    function decrement(){
        if(index <= 0){
            setIndex(props.imgSrc.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }

    return(
        <div id="grid">
            <button onClick={decrement}>{`<`}</button>
            <div style={{backgroundImage: `url(${props.imgSrc[index].image})`, width: 500, height: 500, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <h1 id="name">{props.imgSrc[index].name}</h1>
                
                <ul>
                    <li>Status:<span>{props.imgSrc[index].status}</span></li>
                    <li>Species:<span>{props.imgSrc[index].species}</span></li>
                    <li>Gender:<span>{props.imgSrc[index].gender}</span></li>
                    <li>Origin:<span>{props.imgSrc[index].origin.name}</span></li>
                </ul>
            </div>
            <button onClick={increment}>{`>`}</button>
        </div>
    );
}

export default MainDisplay;