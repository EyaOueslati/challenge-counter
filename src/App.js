

import {useSelector,useDispatch}from 'react-redux'
import { incrementAction,decrementAction } from './components/action/action';

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  
  return (
    <div style={{ textAlign:'center',
      padding:'auto'}}>
      
          <button onClick={()=>dispatch(incrementAction())}>+</button>
          <span>{count}</span>
          <button onClick={()=>dispatch(decrementAction())}>-</button>
        </div>
      
   
  );
};




export default App;