import * as React from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux';

import { addMessages } from '../../features/messagesSlice';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const FormMessages = () => {

  const [authorValue, setAuthorValue] = React.useState("");
  const [messageValue, setMessageValue] = React.useState("")

  const dispatch = useDispatch()

  const handleAddMessage =  async () => {
    if(!authorValue || !messageValue) return alert("Erro: Input iválido");

    const obj = {
      id: uuidv4(),
      author: authorValue,
      message: messageValue
    }
 
    await dispatch(addMessages(obj))

    await fetch("http://localhost:5000/message", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email: authorValue,
        message: messageValue
      })
    })

    setAuthorValue("")
    setMessageValue("")
  }

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mb: 10
      }}
      noValidate
      autoComplete="off"
    >
      <h3>Nova Messagem:</h3>
      <TextField id="outlined-basic" label="Autor" variant="outlined" value={authorValue} onChange={e => setAuthorValue(e.target.value)}/>
      <TextField id="outlined-basic" label="Mensagem" variant="outlined" value={messageValue} onChange={e => setMessageValue(e.target.value)}/>
      <Button variant="contained" sx={{alignSelf: "flex-end"}} onClick={handleAddMessage}>Enviar</Button>
    </Box>
  )
}