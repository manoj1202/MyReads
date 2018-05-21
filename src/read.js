import React,{Component} from 'react'

class Read extends Component{
    render(){
        return(
            <div>
                <h2>Read</h2>
                <hr/>
                <div>
                    <figure>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51JRmquoBWL._SX311_BO1,204,203,200_.jpg" width='200px' height='250px' />
                        <figcaption>The Hobbit</figcaption>
                        <figcaption>J.R.R. Tolkien</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/81eWB5rwCpL.jpg" width='200px' height='250px'/>
                        <figcaption>Oh, the Places You'll Go!</figcaption>
                        <figcaption>Seuss</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51Yn6ZsdZ4L._SX363_BO1,204,203,200_.jpg" width='200px' height='250px'/>
                        <figcaption>The Adventures of Tom Sawyer</figcaption>
                        <figcaption>Mark Twain</figcaption>
                    </figure>
                </div>
            </div>
        );
    }
}
export default Read