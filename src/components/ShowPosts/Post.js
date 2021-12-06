import axios from "axios"
import { useState, useEffect } from 'react'
import { Container } from './style'

const Post = () => {
  const [resource, setResource] = useState()
  const [items, setItems] = useState([])
  const [idPost, setIdPost] = useState()
  const [onlyItems, setOnlyItems] = useState({})

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(res => {
        console.log(res)
        setItems(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [resource])
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${idPost}`)
      .then(res => {
        console.log(res)
        setIdPost(res.data.id)
        setOnlyItems(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [idPost])

  const handlePesquisa = (e) => {
    e.preventDefault()
    setIdPost(e.target.value)
  }

  return (
    <Container>
      <h1>Escolha a opção desejada</h1>

      <form onSubmit={handlePesquisa}>
          <input 
          value={idPost}
          onChange={(e)=>setIdPost(e.target.value)}
          placeholder="Id do post"></input>
      </form>

      <div>
         <li className="onlyPost" key={onlyItems.id}>{JSON.stringify(onlyItems.name)}</li>
      </div>

      <div className="button">
        <button onClick={() => setResource('comments')}>MOSTRAR TODOS OS POST</button>
      </div>
      <h1>{resource}</h1>
      <div>
        {items.map(item => {
          return <li key={item.id}>{JSON.stringify(item.name)}</li>
        })}
      </div>
    </Container>
  )
}

export default Post