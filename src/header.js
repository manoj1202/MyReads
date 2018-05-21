import React,{Component} from 'react'

class Header extends Component{
     render() {
        return (
            <div className="App">
                <header style={{ backgroundColor: "green" }}>
                    <h1 style={{ color: 'white' }}>MyReads</h1>
                </header>
            </div>    
        );
    }      
}
export default Header