export default function tasksReducer(state, action){
    console.log(state);
    switch(action.type){
        case 'added':{
            return([
                ...state, action.payload
            ])
        }
        case 'deleted':{
            return(state.filter(item => item.id !== action.payload))
        }
        default:{
            console.log('unknown type');
        }
    }
}