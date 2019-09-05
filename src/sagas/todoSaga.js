import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA, RECIEVE_API_DATA } from "../actions/types";
import Axios from "axios";

async function getTodosFromAPI() {
    console.log("Waiting for Axios ....");
    let data = await Axios.get("https://jsonplaceholder.typicode.com/todos?userId=1");
    console.log("API Data", { ...data });
    return data;
}

function* getTodos() {
    try {
        console.log("API Request Done");
        let data = yield call(getTodosFromAPI);
        yield put({
            type: RECIEVE_API_DATA,
            payload: data.data
        });
    } catch (error) {
        console.log("Error", error);
    }
}

export default function* todosSaga() {
    console.log("Inside My Saga to Make API Request");
    yield takeLatest(REQUEST_API_DATA, getTodos);
}