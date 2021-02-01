import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoTemplate from "./component/TodoTemplate";
import Form from "./component/Form";
import TodoItemList from "./component/TodoItemList";

class App extends Component {
  render() {
    return (
        <TodoTemplate form={<Form/>}>
            <TodoItemList/>
        </TodoTemplate>
    )
  }
}

export default App;
