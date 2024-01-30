export default function tasksReducer(tasks, action){
  
    switch(action.type){
        case 'added':{
            console.log(action.payload);
            return([
                ...tasks, action.payload
            ])
        }
        case 'deleted':{
            return(tasks.filter(item => item.id !== action.payload))
        }
        default:{
            console.log('unknown type');
        }
    }
}