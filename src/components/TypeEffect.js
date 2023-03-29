import React, { useState, useEffect, useRef } from 'react'

const Writing = ({ txt }) => {
  const [currentText, setCurrentText] = useState('')
  const index = useRef(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentText((value) => value + txt.charAt(index.current))
      index.current += 1
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [currentText, txt])
  return <h3 className="primary-typo">{currentText}</h3>
}

export default Writing
