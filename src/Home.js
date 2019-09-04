import React, { Component } from 'react';
import { connect } from "react-redux";

//import { requestAPIData } from "./actions/todoActions";
import { REQUEST_API_DATA } from "./actions/types";

class Home extends Component {
    componentDidMount(){
        //this.props.requestAPIData();
        console.log("Todos", this.props.todos);
        this.props.fetchAPIData();
      }

    state = {  }
    render() { 
        return ( <div>
            <h1>Todo's ({this.props.todos.length})</h1>
            {this.props.todos.length>0 ? this.props.todos.map(todo => {
                return <p key={todo.id}>{todo.title}</p>
            }): <span>No Todo's</span>}
        </div> );
    }
}
 
const mapStateToProps = state => ({
    todos: state.todo
  });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ requestAPIData }, dispatch);

const mapDispatchToProps = dispatch => {
    return {
        fetchAPIData: () => dispatch({ type: REQUEST_API_DATA })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);