import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const FormMessages = () => {

  const [authorValue, setAuthorValue] = React.useState("");
  const [messagesValue, setMessagesValue] = React.useState("");

  const handleAuthorInput = (e: string) => {
    setAuthorValue(e)
    console.log(authorValue)
  }
  const handleMessagesInput = (e: string) => {
    setMessagesValue(e)
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
      <TextField id="outlined-basic" label="Autor" variant="outlined" onChange={e => handleAuthorInput(e.target.value)}/>
      <TextField id="outlined-basic" label="Mensagem" variant="outlined" onChange={e => handleMessagesInput(e.target.value)}/>
      <Button variant="contained" sx={{alignSelf: "flex-end"}}>Enviar</Button>
    </Box>
  )
}