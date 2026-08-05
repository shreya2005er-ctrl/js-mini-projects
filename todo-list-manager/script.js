let tasks = [];

function addTask(task){
    let lastTask = tasks.push(task);
    if(lastTask){
        return `Added: ${task}`;
    }
}

function showTask(){
    tasks.forEach((task, index) => {
        console.log(`${index+1}. ${task}`);
    });
}

function removeTask(index){
    return tasks.splice(index, 1);
}

function completeTask(index){
    return tasks[index]=`✅ ${tasks[index]}`;
}

function findTask(search){
    return tasks.filter(task => task.includes(search))
}

function countTasks(){
    let count = 0;
    let noCount = 0;
    tasks.forEach((task) => {
        if(task.startsWith("✅")){
            count++;
        }else{
            noCount++;
        }
    });
    console.log(`${count} task completed.`)
    console.log(`${noCount} task not completed.`)
}

while(true){
    let action = prompt("Chose an action --> add, remove, complete, show, search, count, or quit");

    if(action=="add"){
        let task = prompt("Give a task");
        if(task){
            addTask(task);
        }
    }else if(action=="remove"){
        let indexNum = Number(prompt("Give index"));
        if(isNaN(indexNum)){
            console.log("Inter a valide input");
        }else{
            removeTask(indexNum);
        }
    }else if(action=="complete"){
        let index = Number(prompt("Give index"));
        if(isNaN(index)){
            console.log("Inter a valide input");
        }
        else{
            completeTask(index);
        }
    }else if(action=="search"){
        let search = prompt("Give input for search");
        if(search){
            console.log(findTask(search));
        }
    }else if(action=="show"){
        showTask();
    }else if(action=="count"){
        countTasks();
    }else if(action=="quit"){
        break;
    }else{
        console.log("Chose right action.")
    }
}