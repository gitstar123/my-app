import React, {useState} from 'react'
export default function TextForm(props) {

        const [text, setText] = useState("Original Text");
        function handle(){
          let newtext = text.toUpperCase();
          setText(newtext);
          props.makeAlert('converted to Upper case','success');
        }
        function handlelow(){
          let newtext = text.toLowerCase();
          setText(newtext);
          props.makeAlert('converted to lower case','success');
        }
        function onchange(e){
          setText(e.target.value);
        }
        function clear(){
          setText('');
          props.makeAlert('cleared','success');
        }
        function copy(){
          navigator.clipboard.writeText(text);
          props.makeAlert('copied to clipboard','success');
        }
        const mystyles = {
          color : props.mode === 'light'? 'black' : 'white'
        };
        const areaStyle = {
          backgroundColor: props.mode === 'light'? 'white' : '#212529',
          color: props.mode ==='light'? 'black' : 'white'
        };
    return (
        <div>
            <div className="mb-3 container ">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={mystyles}>{props.title}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value = {text} onChange = {onchange} style = {areaStyle}></textarea>
            </div>
            <div className="container">
                <button className='mx-2 btn btn-dark' onClick = {handle}>Convert to Uppercase</button>
                <button className='mx-2 btn btn-dark' onClick = {handlelow}>Convert to Lowercase</button>
                <button className='mx-2 btn btn-dark' onClick = {clear}>Clear Text</button>
                <button className='mx-2 btn btn-dark' onClick = {copy}>Copy Text</button>
                </div>
                <div className="container" style={mystyles}>
                <h1>Word Count</h1>
                <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} Words and {text.length} Characters</p>
                <h2>Preview</h2>
                <p>{text === "" ? 'Enter something to preview' : text}</p>
                <h2>Read Time</h2>
                <p>{text.split(" ").filter((e)=>{return e.length!==0}).length*0.008} minutes</p>
            </div>
        </div>
    )
}
TextForm.defaultProps = {
    values : "Original Text NA"
};