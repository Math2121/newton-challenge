import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from './styles'

function SliderNextButton(props:any) {
      const { className, style, onClick } = props;
  return (
    <Button onClick={onClick}>
        <FaArrowRight/>
    </Button>
  )
}

export default SliderNextButton