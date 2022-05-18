export const initialState = {
	user: null,
	employee: null
};

export const actionTypes = {
	SET_USER: 'SET_USER',
	SET_EMPLOYEE: 'SET_EMPLOYEE'
};

const reducer = (state, action) => {
	// console.log(action);
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.user
			};
		case actionTypes.SET_EMPLOYEE:
			return {
				...state,
				employee: action.employee
			};
		default:
			return state;
	}
};

export default reducer;
