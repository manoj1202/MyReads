import React,{Component} from 'react'

class WantToRead extends Component{
    
    render(){
        return(
            <div>
                <h2>Want To Read</h2>
                <hr/>
                <div>
                    <figure>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51ctyoISRHL._SY291_BO1,204,203,200_QL40_.jpg" />
                        <figcaption>1776</figcaption>
                        <figcaption>David McCullough</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src="https://i.pinimg.com/736x/5f/84/d0/5f84d040be5b825d151db173f02336cd---years-new-books.jpg"  width='200px' height='250px' />
                        <figcaption>Harrypotter</figcaption>
                        <figcaption>J.K.Rowlling</figcaption>
                    </figure>
                </div>
            </div>
        );
    }
}
export default WantToRead