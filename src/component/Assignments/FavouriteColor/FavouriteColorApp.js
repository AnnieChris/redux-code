
import {useSelector, useDispatch} from 'react-redux';

import {red} from './action/ChooseColorAction';
import {blue} from './action/ChooseColorAction';
import {green} from './action/ChooseColorAction';
import {yellow} from './action/ChooseColorAction';

function FavouriteColorApp() {
  console.log("Inside App");
  const color = useSelector((state)=>{return state});
  const dispatch = useDispatch();

  var bg = {
    "red" : "#FF0000",
    "blue" : "#0000FF",
    "green" : "#008000",
    "yellow" : "#FFFF00"
  }
  window.onload=function(){
    var bgcolr = document.getElementsByName('colr');
    for(var i=0;i<bgcolr.length;i++)
    {
      bgcolr[i].onclick=function(){
        var col = bg[this.value];
        document.body.style.backgroundColor=col;
      }
    }

  }


  return (
    <div className="App">

      <h1>Choose any Colors from Below</h1>
      
      <input type='radio' name='colr' value='red' id='red' onClick={()=>dispatch(red())} /> 
      <label htmlFor='red'>Red</label>

      <input type='radio' name='colr' value='blue' id='blue' onClick={()=>dispatch(blue())} /> 
      <label htmlFor='blue'>Blue</label>

      <input type='radio' name='colr' value='green' id='green' onClick={()=>dispatch(green())} />  
      <label htmlFor='green'>Green</label>

      <input type='radio' name='colr' value='yellow' id='yellow' onClick={()=>dispatch(yellow())} />  
      <label htmlFor='yellow'>Yellow</label>

      <h2>Selected color is : {color}</h2>

    </div>
  );
}

export default FavouriteColorApp;
