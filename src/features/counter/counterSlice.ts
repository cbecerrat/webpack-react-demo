import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, { payload }: PayloadAction<number>) => {
            state.value += payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount: number) => (dispatch: Dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

export const selectCount = (state: { counter: CounterState }) => state.counter.value
export default counterSlice.reducer
