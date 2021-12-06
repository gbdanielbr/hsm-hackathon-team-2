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
      .get(`https://test.godigibee.io/pipeline/gama/v1/gama?query=1`,  { 
        headers: {
        'apikey' : 'DDuHO8yqVyyUx4J1nQpNUHAFK7pUJRw3',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
      .then(res => {
        console.log(res)
        setItems(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [resource])
  
  useEffect(() => {
    let url;
    if(idPost){
      url = `https://test.godigibee.io/pipeline/gama/v1/gama?query=4;id=${idPost}`
      
    }else{
      url = `https://test.godigibee.io/pipeline/gama/v1/gama?query=1`;
    }
    axios
    .get(url,
      
      { headers: {
        'apikey' : 'DDuHO8yqVyyUx4J1nQpNUHAFK7pUJRw3',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})

      .then(res => {
        console.log(res)
        setOnlyItems(res.data.data);
        setItems(res.data.data)
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


      <div>
        {items.map(item => {
          return (
            <table key={item.id}>
              <thead>
                <th>
                  <tr>Id</tr>
                  <tr>Title</tr>
                  <tr className='last'>Description</tr>
                </th>
              </thead>
              
              <tbody>
              <tr>
                  <td>{JSON.stringify(item.id)}</td>
                </tr>
                <tr>
                  <td>{JSON.stringify(item.title)}</td>
                </tr>
                <tr>
                  <td>{JSON.stringify(item.description)}</td>
                </tr>
              </tbody>
            </table>
          )
          
        })}
      </div>
    </Container>
  )
}

export default Post