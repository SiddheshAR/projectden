import React from 'react'
import { ThreeDCard } from '../home-page/ThreeDCards'

function ProjectGrid() {
    return (
        <div className='max-w-7xl mx-auto px-4 py-4'>
            <h2>Trendy Project</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3'>
{            [
                {'id':1,'title':'Project 1','desc':'Project made on xyz'},
                {'id':2,'title':'Project 2','desc':'Project made on Abc'},
                {'id':3,'title':'Project 3','desc':'Project made on JKL'}
            ].map((item,index) => (<ThreeDCard key={index} />))}
            </div>
        </div>
    )
}

export default ProjectGrid