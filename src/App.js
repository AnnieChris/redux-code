import './App.css';
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import {useSelector} from 'react-redux';
import {increment} from './action/CounterAction';
import {decrement} from './action/CounterAction'; 
import  { useDispatch } from 'react-redux';
function App(props) {

 
  const [color,setColor] = useState("pink");
   //const [color,setColor] = useState(null);

  /* console.log('Inside UI');
  const counter = useSelector(state=>state);
  const decrecounter = useSelector(state=>state+2);
  const dispatch = useDispatch(); */

  let dispatch = useDispatch();
  const colVal = useSelector(state => state.color);

  useEffect(()=> {
    console.log(props);
  })

  const handleChange = (e)=>{
    //setColor(e.target.value);
    
    dispatch({
      type : "CHANGE_COLOR",
      payload:e.target.value
    })

  }

  return (
    <div className="App">
      <h1>My fav color is : {colVal}</h1>
      <input type ="radio" name="color" value="red" onClick={handleChange}/>Red
      <input type ="radio" name="color" value="blue" onClick={handleChange}/>Blue
      <input type ="radio" name="color" value="green" onClick={handleChange}/>Green
      <input type ="radio" name="color" value="yellow" onClick={handleChange}/>Yellow


      {/* <h1>Incrementing the value : {counter}</h1>
      <button onClick={()=>dispatch(increment())}>increment + </button>

      <h1>Decrementing the value : {decrecounter}</h1>
      <button onClick={()=>dispatch(decrement())}>decrement - </button> */}


    </div>
  );
}


const mapStateToProps = state =>{
  return {
    data : state
  }
}

const mapDispatchToProps = dispatch => {
  return{
    changeColor : (color) => dispatch({
      type : "CHANGE_COLOR", payload:color
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
