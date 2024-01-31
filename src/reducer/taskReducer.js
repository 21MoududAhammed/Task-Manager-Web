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
        case 'makeFav':{
            const nextTasks = tasks.map(task =>{
                if(task.id === action.payload){
                    return({...task, isFavorite: !task.isFavorite})
                }else{
                    return task;
                }
            })
            return nextTasks;
        }
        default:{
            console.log('unknown type');
        }
    }
}