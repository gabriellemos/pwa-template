import React, { useState, useEffect } from 'react'

const withPWA = (Component) => {
  return (props) => {
    const [evt, setEvt] = useState(undefined)

    useEffect(() => {
      window.addEventListener('beforeinstallprompt', (evt) => {
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
