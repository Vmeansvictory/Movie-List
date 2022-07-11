import { Component } from "react";
import recaps from "./Recaps.jpg";

export class MovieList extends Component {
    state = {
        userInput: "",
        movieList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === "") {
            alert("Please enter an item!")
        }
        else {
        let listArray = this.state.movieList;
        listArray.push(input)
        this.setState({movieList: listArray, userInput: ""})
        }
    }

    deleteItem() {
        let listArray = this.state.movieList;
        listArray = [];
        this.setState({movieList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle("crossed");
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
        <div>   
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                    placeholder="What do you plan to watch today?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                    value={this.state.userInput} />
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.movieList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                    <img src={recaps} width="40px" alt="bag"/> {item}</li>
                ))
                }
            </ul>
            <div className="container">
            <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
        </div>  
        )
    }
}