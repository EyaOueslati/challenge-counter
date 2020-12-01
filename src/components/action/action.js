import{INCREMENT,DECREMENT} from '../const/const';


export  const incrementAction=()=>{
    return {
        type:INCREMENT
    };
}
export const decrementAction=()=>{
    return {
        type:DECREMENT
    };
}