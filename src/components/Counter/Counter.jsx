import React, {useState} from "react";


const Counter = () => {
    
  const [like, setLike] = useState(0)

  function incriment() {
    setLike(like + 1)
  }

  function dicrement() {
    setLike(like - 1)
  }

  return (
      <div>
          <h1>{like}</h1>
          <button onClick={incriment}>like</button>
          <button onClick={dicrement}>dislike</button>
      </div>
  )
}

export default Counter;