import { useState, useEffect } from 'react'

export default function useIframe(value, delay = 100) {
  const [iframe, setIframe] = useState(false)
  useEffect(() => {
    setIframe(window.location.pathname.includes('iframe'))
  }, [])

  return iframe
}
