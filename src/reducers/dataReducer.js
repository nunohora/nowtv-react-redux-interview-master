const initialState = {
  members: [],
  messages: [],
  loading: true,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...state,
        messages: action.messages,
        members: action.members,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default dataReducer;
