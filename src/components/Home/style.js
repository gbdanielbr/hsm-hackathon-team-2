import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background: rgb(81,45,168);
background: linear-gradient(180deg, rgba(81,45,168,1) 1%, rgba(238,238,238,1) 22%);

  h1 {
    font-weight: 300;
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 25px;
  }
  .button {
    display: flex;
    justify-content: center;
    width: 25%;
    margin: auto;
  }

  form {
    display: flex;
    justify-content: center;
    width: 25%;
    margin: auto;
    margin-bottom:1rem;
  
  }

  .onlyPost {
    text-align:center;
    margin:1rem 0;
    list-style:none;
  }

table {
  color: #673AB7;
  width: 100%;
  margin:auto;
  display:flex;
  
}

table tr {
  text-align:left;
}

table tbody{
  margin-left: 2rem;
}

  form input {
      border-radius:15px;
      
      padding:10px 15px;
      outline:none;
      text-align:center;
    }
  button {
    font-weight: bold;
    font-size: .8rem;
    cursor: pointer;
    color: #673AB7;
    background-color: #D1C4E9;
    font-style: none;
    border-radius: .8rem;
    padding: .7rem;
    transition: .3s;
    border-style: none;

    &:hover{
      color: #673AB7  ;
      background-color: #512DA8;
    }
  }
`
