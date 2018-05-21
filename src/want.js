import React,{Component} from 'react'

class WantToRead extends Component{
    constructor(props){
        super(props);
        this.state={
            
            imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlSwaDrzmNCbg8-izaninusodsNJuhRrWzq4JYjx1wBgbW7CM",
            title : '1776',
            author: 'David McCullough'
            
           
        }
    }
    render(){
        return(
            <div>
                <h2>Want To Read</h2>
                <hr/>
                <div>
                    <img src={this.state.imgurl} />
                    <h2>{this.state.title}</h2>
                    <p>{this.state.author}</p>
                </div>
            </div>
        );
    }
}
export default WantToRead