
import {INCREMENT,DECREMENT} from '../const/const';



const stateDefault={
    count:0
};



export const rootReducer=(state=stateDefault, action)=>{

    switch(action.type){
        case INCREMENT:
        return {count:state.count + 1};
        case DECREMENT:
        return {count:state.count - 1};
        default:
        return state;
    }

}