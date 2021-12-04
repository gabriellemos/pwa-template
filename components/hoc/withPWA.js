import React, { useState, useEffect } from 'react'

const withPWA = (Component) => {
  return (props) => {
    const [evt, setEvt] = useState(undefined)

    useEffect(() => {
      console.log("TESTE")
    }, [])

    useEffect(() => {
      window.addEventListener('beforeinstallprompt', (evt) => {
        console.log('beforeinstallprompt', evt)
        evt.preventDefault()
        setEvt(evt)
      })
    }, [])

    return (
      <React.Fragment>
        {evt && <button onClick={() => evt.prompt()}>add to home</button>}
        <Component {...props} />
      </React.Fragment>
    )
  }
}

export default withPWA
