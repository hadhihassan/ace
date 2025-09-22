import React from 'react'
import Holders from './Holders'
import HoldersForum from './HoldersForum'

function HoldersIndex() {
  return (
    <section className="flex flex-col gap-16">
        <Holders/>
        <HoldersForum/>
    </section>
  )
}

export default HoldersIndex