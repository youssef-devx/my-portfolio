import Logo from '@/icons/Logo'
import { motion } from 'framer-motion'
import React from 'react'

export default function Preloader() {
  return (
    <motion.div className='preloader'>
      <Logo dark={true} />
    </motion.div>
  )
}
