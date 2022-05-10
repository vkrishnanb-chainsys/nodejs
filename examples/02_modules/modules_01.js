//private/local
const secretGroup = "SECURE GROUP";


//shared
const myGroup = "Group";

const firstModule = (name) =>{

    console.log(name);
}

//exported only few not all (secretGroup not exported)
module.exports={firstModule,myGroup};