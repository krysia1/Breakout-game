import React from 'react'

import { LEVELS } from '../game/levels'
import { getGameStateFromLevel } from '../game/core'

import Ball from './ball'
import Block from './block'
import Level from './level'
import Lives from './lives'
import Paddle from './paddle'

const getInitialLevel = () => {
  const inState = localStorage.getItem('level')
  return inState ? parseInt(inState, 10) : 0
}

export default (containerSize) => {
  console.log(`${containerSize.width} x ${containerSize.height}`)
  return <svg />
}