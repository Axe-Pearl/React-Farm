export const increase = () =>{
    console.log("increase");
    return{
        type:"INCREMENT"
    }
}

export const decrease = () =>{
    console.log("decrease");
    return{
        type:"DECREMENT"
    }
}