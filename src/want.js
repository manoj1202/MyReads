import React,{Component} from 'react'

class WantToRead extends Component{
    constructor(props){
        super(props);
        this.state=[{
            imgurl:'"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlSwaDrzmNCbg8-izaninusodsNJuhRrWzq4JYjx1wBgbW7CM"/>',
            title : '1776',
            author: 'David McCullough'
            },
            {
            imgurl:'"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlSwaDrzmNCbg8-izaninusodsNJuhRrWzq4JYjx1wBgbW7CM"/>',
            title : "Harry Potter and the Sorcerer's Stone",
            author: 'J.K. Rowling'
            }
        ]
    }
    render(){
        return(
            <div>
                <h2>Want To Read</h2>
                <hr/>
                <div>

                </div>
            </div>
        );
    }
}
export default WantToRead