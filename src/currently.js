import React,{Component} from 'react'

class Currently extends Component{
    render(){
        return(
            <div >
              <h2>Currently Reading</h2>
              <hr />
              <div style={{display:'inline'}}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlSwaDrzmNCbg8-izaninusodsNJuhRrWzq4JYjx1wBgbW7CM"/>
                    <figcaption>To Kill a Mokingbird</figcaption>
                    <figcaption>Harper Lee</figcaption> 
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROF_ntluFvB8juQD9utEJ6LG3JAXSQWeWCMc1tuJlxzC-eH0Fs"/>
                    <figcaption> Ender Games</figcaption>
                    <figcaption>Orson Scott Card</figcaption>
                </div>
              </div>
            </div>
        );
    }
}

export default Currently

  
