import { useState } from 'react'
import Header from './Header'
import PlaylistSelect from './PlaylistSelect'
import PlaylistInterface from './PlaylistInterface'

function App() {
  return (
    <div>
      <Header/>
      <PlaylistSelect />
      <PlaylistInterface />
    
    </div>
  )
}

export default App
