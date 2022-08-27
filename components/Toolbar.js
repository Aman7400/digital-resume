import { Icon } from "@iconify/react"
import React from "react"

export default function Toolbar() {

  
    return (
      <div className="fixed right-8 top-8">
        <section >
          <Icon  icon={'ci:file-pdf'} className="text-4xl text-heading drop-shadow-lg hover:text-subHeading hover:scale-110 cursor-pointer my-2" />
          <Icon  icon={'el:share-alt'} className="text-4xl text-heading drop-shadow-lg hover:text-subHeading hover:scale-110 cursor-pointer my-2" />
        </section>
      </div>
    )
  }