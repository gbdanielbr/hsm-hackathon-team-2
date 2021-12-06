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
		    	'Content-Type': 'application/json',
        }}
      ).then(res => {
        console.log(res)
        setItems(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [resource])


  useEffect(() => {
    axios
      .get(`https://test.godigibee.io/pipeline/gama/v1/gama?query=5;id=${idCurso}/`)
      .then(res => {
        console.log(res)
        setIdCurso(res.data.id)
        setOnlyItems(res.data)
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
         <li className="onlyPost" key={onlyItems.id}>{JSON.stringify(onlyItems.name)}</li>
      </div>

      <div className="button">
        <button onClick={() => setResource('users')}>MOSTRAR TODOS OS CURSOS</button>
      
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

export default Home
