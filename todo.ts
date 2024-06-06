import inquirer from "inquirer";

//create a variable
let todo=[];
while(true){
    let input=await inquirer.prompt([{
        name:"todoitems",
        type:"input",
        message:'addtodo items',
    },
    {
    name:"addmore",
    type:"list",
    choices:['yes or no']
    },
])
    //output
    const{todoitems,addmore}=input;
    todo.push(todoitems);
    if(addmore=="no"){
        console.log("todolist");
        //add more
        for(let i=0;i<=todo.length;i++)
            console.log(todo[i])};
    
    break;
}

    



