import React,{Component} from 'react'

class WantToRead extends Component{
    
    render(){
        return(
            <div>
                <h2>Want To Read</h2>
                <hr/>
                <div>
                    <figure>
                        <img src="data:image/jpeg;base64," />
                        <p>1776</p>
                        <p>David McCullough</p>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABA" />
                        <p>Harrypotter</p>
                        <p>J.K.Rowlling</p>
                    </figure>
                </div>
            </div>
        );
    }
}
export default WantToRead