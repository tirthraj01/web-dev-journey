import { useState } from 'react'

function App(){
  return <div style={{display:'flex', background:"gray"}}>
    <Card >
      Hi there
    </Card>

    <Card>
      <div style={{color:'gray',}}>
        What to do you want to post <br></br> <br></br>
        <input type={"text"}/>
      </div>
    </Card>

    <Card>
      <div style={{color:'gray',justifyContent:'center',
        alignContent:'center'}}>
          Click here
          <br></br>
     <button style={{ padding: '10px 20px', fontSize: '15px' }}>
          Post
     </button>
     </div>
    </Card>
  </div>
}

function Card({children}){
  return <div style={{background: "black", borderRadius:10,color:'white',
  padding:10, margin:10}}>
    {children}

  </div>
}


export default App
