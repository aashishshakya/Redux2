//const state = []
export const list = (state=[],action) =>{

  switch(action.type){
    case 'ADDLIST':
    return [
      ...state,
      {
        val : action.val
      }
    ]
    default :
    return state
  }

}

export const inVal = (state = 10, action) => {
  console.log(action)
  switch (action.type) {
    case "INC":
      return state + 1;
    default:
      return state;
  }
};