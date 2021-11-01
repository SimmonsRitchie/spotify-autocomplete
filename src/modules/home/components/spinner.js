import React from 'react'

const Spinner = () => {

  let outerCircleColor = 'border-gray-50' // use tailwind class
  let semiCircleColor = 'rgb(109, 114, 113, 0.2)' // use hex
  const classNameSize = 'w-24 h-24'
  const borderThickness = 'border-8'
  return (
    <div className="w-48 h-48 flex justify-center items-center">
      <div className={`${classNameSize} relative `}>
        <div
          className={`absolute animate-spin h-full w-full ${borderThickness} border-transparent`}
          style={{ borderRadius: '50%', borderTopColor: semiCircleColor }}
        />
        <div
          className={`h-full w-full ${borderThickness} ${outerCircleColor} border-opacity-25`}
          style={{ borderRadius: '50%' }}
        />
      </div>
    </div>
  )
}


export default Spinner
