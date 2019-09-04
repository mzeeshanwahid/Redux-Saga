import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA, RECIEVE_API_DATA } from "../actions/types";
import Axios from "axios";

async function getTodosFromAPI() {
    let data = await Axios.get("https://jsonplaceholder.typicode.com/todos?userId=1");
    console.log("API Data", { ...data });
    return data;
}

function* getTodos() {
    try {
        console.log("Request");
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
    yield takeLatest(REQUEST_API_DATA, getTodos);
}