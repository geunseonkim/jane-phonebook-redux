import { composeWithDevTools } from '@redux-devtools/extension'
import {createStore} from "redux"
import reducer from "./reducer/reducer"

let store = createStore(reducer)


export default store;