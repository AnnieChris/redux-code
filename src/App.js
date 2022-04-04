import './App.css';
import { useState } from 'react';
import ReactDOM from "react-dom";
//import {useSelector, useDispatch, connect} from 'react-redux';
//import {red,blue,green,yellow} from ColorAction;
//import ColorReducer from './reducer/ColorReducer';


function App() {

  const[checked,setChecked] = useState([]);
  const checkList = ["Pink", "Orange", "Grey", "Coral"]
  console.log(checked);

  const handleCheck = (event) =>{
    var updateList = [...checked];
    
    if(event.target.checked){
      updateList = [...checked, event.target.value];
      
    }
    else{
      updateList.splice(checked.indexOf(event.target.value), 1);
      
    }
    setChecked(updateList);
  };

  const checkedItems = checked.length
  ?checked.reduce((total, item) => {
    return total + ","+item;
  })
  :"";

  var isChecked = (item) =>
  checked.includes(item) ? "checked-item" : "not-checked-item";
  


  /*  change background color
  console.log("Inside App");
  const color = useSelector((state)=>{return state});
  const dispatch = useDispatch(); */

  /* var bg = {
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

  } */



//previous code
/* 
  let dispatch = useDispatch();
  const colVal = useSelector(state => state.color);
  useEffect (() => {
    console.log(props);
  })

  const handleChange = (e) =>{
    //setColor(e.target.value);
    //console.log('Value : ', target.value);
    //console.log('Color : ', color);

    dispatch({
      type : "CHANGE_COLOR",
      type : "DELETE_COLOR",
      payload:e.target.value
    })
  }
 */
  

  return (
    <div className="App">      
      <h1>Choose Colors from the List : </h1>

      <div className="list-container">
        {checkList.map((item, index) => (
          <div key={index}>
            <input value={item} type="checkbox" onChange={handleCheck}/>
            <span className={isChecked(item)}> {item}</span>
          </div>
        ))}
      </div>

      <div>
        {`Item checked are : ${checkedItems}`}
      </div>
   </div>
  );
}


/* const mapStateToProps = state =>{
  return {
    data : state
  }
}

//if store is updated anytime, this will be called
const mapDispatchToProps = dispatch => {
  return{
    changecolor: (color) => dispatch({
      type : "CHANGE_COLOR", payload:color
    })
  }
}
 */
//This will connect react component to redux store
//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
