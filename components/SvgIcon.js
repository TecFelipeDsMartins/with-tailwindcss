import React, { Fragment } from 'react'


const SvgIcon = (props) => {
    return (
        <Fragment>
            <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg className="w-6 h-6 align-middle" 
                          width="24" height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">{props.descr}</span>
                      </li>
        </Fragment>
    )
}

export default SvgIcon