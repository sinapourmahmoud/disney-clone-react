export default function Reducer(state,{type,payload}){

    switch(type){
        case 'ADD_USER' :
           return {
            user:payload,
            ...state
                } 
                case 'REMOVE_USER':
                console.log(state.user)

                    return{
                        user:null,
                        ...state
                    }
    }

}