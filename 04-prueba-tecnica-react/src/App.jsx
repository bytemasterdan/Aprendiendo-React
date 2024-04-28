import { useEffect, useState } from 'react'
import './App.css' 
const CAT_RANDOM_FACT = 'https://catfact.ninja/fact'
function App() {
  const [fact, setFact] = useState()
  const [url , setUrl] = useState()
  useEffect(()=>{
    fetch(CAT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact( fact )
        const firtsWord = fact.split(' ',1).join(' ');

          const URL_API_CATS = `https://cataas.com/cat`

          fetch(`${ URL_API_CATS }/says/${ firtsWord }?json=true`)
          .then(res => res.json())
          .then (resp => {
            const { _id: id} = resp 
            setUrl(
              `${ URL_API_CATS }?id=${ id }&width=500&height=500`
            )
          })
      })
  },[])
  return (
    <main>
      <h1>Cat's and More Cat's</h1>
      {fact && <span>{ fact }</span>}
      {url && <img className='img' src={ url } alt=''/>}
    </main>
  )
}

export default App
