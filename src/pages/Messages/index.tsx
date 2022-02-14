import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addMessages } from '../../features/messagesSlice';

import './style.css';

import { MessageCard } from '../../components/MessageCard/index';
import { FormMessages } from '../../components/FormMessages/index';
import { RootState } from '../../app/store';

export const Messages = () => {

  const messages = useSelector((state: RootState) => state.messages.value)

  const dispatch = useDispatch()

  React.useEffect(() => {

    const catchMessages = async () => {
      const res = await fetch("http://localhost:5000/message")
      const data = await res.json()
      const obj = await data.map((value: any) => {
        return({
          id: value.id,
          author: value.email,
          message: value.message
        })
      })

      await obj.map((value: any) => {
        dispatch(addMessages(value))
      })

    }

    catchMessages()

  }, [])

  return (
    <main className="messages-container">
      <h1>Mensagens: </h1>
      <FormMessages />
      {messages.map((value: any) => {
        return(
          <MessageCard key={value.id} author={value.author} message={value.message}/>
        )
      })}
    </main>
  )
}