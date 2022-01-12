import React, {useState} from 'react'

export default function About() {
    const [mystyle, setmystyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    });
    const [text, setText] = useState('Enable Light Mode');
    function code(){
        if(mystyle.color === 'white'){
            setmystyle({
            color: 'black',
            backgroundColor: 'white'
            });
            setText('Enable Dark Mode');
            
        }
        else
        {
            setmystyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setText('Enable Light Mode');
            document.style.backgroundColor = "black";
        }
    }
    return (
        <div className='container'>
            <div className="card" style = {mystyle}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="card-link">Card link</a>
                <a href="/" className="card-link">Another link</a>
            </div>
            </div>
            <button className = "btn" onClick = {code}>{text}</button>
        </div>
    )
}
