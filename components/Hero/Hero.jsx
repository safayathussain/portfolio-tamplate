import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Button from '../Button/Button.jsx'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='relative'>
            <Sidebar />
            <div>
                <div className='ml-20'>
                    <h1 className='text-4xl font-bold'>Hi, I'am Zahed Hasan</h1>
                    <p className='text-primary mt-3'>Backend developer</p>
                    <br />
                    <p className='text-textColor max-w-[500px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident recusandae placeat incidunt animi eius, atque perspiciatis. Non, officiis nostrum.
                    </p>
                    <div className='mt-5'>
                        <Button type={'primary'} className={''}>Contact Me</Button>
                    </div>
                </div>
                {/* <div>
                    <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            <image href='/heroImage.png' />
                        </g>
                    </svg>

                </div> */}
            </div>
        </div>
    )
}

export default Hero