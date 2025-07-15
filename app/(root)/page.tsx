import HomeSearch from '@/components/home-page/HomeSearch'
import ProjectGrid from '@/components/project-cards/ProjectGrid'
import { Boxes } from '@/components/ui/background-boxes'
import { cn } from '@/lib/utils'
import React from 'react'

function page() {
  return (
    <div>
      <div className="h-[65vh] md:h-[70vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl font-extrabold text-3xl text-white relative z-20 bg-slate-950 p-4 rounded-lg")}>
          Tailwind is Awesome
        </h1>
        <p className="text-lg text-center mt-2 text-white relative z-20">
          Framer motion is the best animation library ngl
        </p>
        <HomeSearch />

      </div>
      <ProjectGrid />
    </div>
  )
}

export default page