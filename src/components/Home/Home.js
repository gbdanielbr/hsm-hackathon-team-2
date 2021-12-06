import axios from "axios"
import { useState, useEffect } from 'react'
import { Container } from './style'

const Home = () => {
  const [resource, setResource] = useState()
  const [items, setItems] = useState([])
  const [idCurso, setIdCurso] = useState()
  const [onlyItems, setOnlyItems] = useState({})
  
  useEffect(() => {
    axios.get(`https://test.godigibee.io/pipeline/gama/v1/gama?query=2`,
        { headers: {
          'apikey' : 'DDuHO8yqVyyUx4J1nQpNUHAFK7pUJRw3',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
		    	'Content-Type': 'application/json'
        }}
      ).then(res => {
        console.log(res.data.data)
        setItems(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [resource])


  useEffect(() => {
    let url;
    if(idCurso){
      url = `https://test.godigibee.io/pipeline/gama/v1/gama?query=5;id=${idCurso}`
    }else{
      url = `https://test.godigibee.io/pipeline/gama/v1/gama?query=2`;
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
  }, [idCurso])

  const handlePesquisa = (e) => {
    e.preventDefault()
    setIdCurso(e.target.value)
  }

  return (
    <Container>
     <h1>Escolha a opção desejada</h1>
     <form onSubmit={handlePesquisa}>
          <input 
          value={idCurso}
          onChange={(e)=>setIdCurso(e.target.value)}
          placeholder="Id do curso"></input>
      </form>

      <div>
         <li className="onlyPost" key={onlyItems.id}>{JSON.stringify(onlyItems.title)}</li>
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

export default Home
