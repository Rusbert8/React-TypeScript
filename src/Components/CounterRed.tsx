import { useReducer } from 'react';

const initialState = {
    counter: 10,
}

type ActionType = 
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number };



const counterReducer = ( state: typeof initialState, action: ActionType ) => {

    switch ( action.type ) {
        case 'incrementar':
            return {
                ...state,
                contador: state.counter + 1
            }


        case 'decrementar':
            return {
                ...state,
                contador: state.counter - 1
            }

        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
            
    
        default:
            return state;
    }
}

export const CounterRed = () => {

    const [ { counter: contador }, dispatch] = useReducer(counterReducer, initialState);


    return (
        <>
         <h2>Contador: { contador }</h2> 
         <button className="btn btn-outline-primary"
                onClick={ () => dispatch({ type: 'incrementar' }) }>
            +1
         </button>
         <button className="btn btn-outline-primary"
                onClick={ () => dispatch({ type: 'decrementar' }) }>
            -1
         </button>

         <button className="btn btn-outline-danger"
                onClick={ () => dispatch({ type: 'custom', payload: 100 }) }>
            100
         </button>
        </>
    )
}