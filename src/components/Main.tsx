import React from 'react'

const Main = () => {
    return (
        <div className="h-screen bg-gray-200 pt-24 px-6 flex flex-wrap flex-col items-start">

			{/* Left */}
			<div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
				<h1 className="my-4 text-3xl md:text-5xl text-gray-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Landing Page Practice</h1>
				<p className="leading-normal text-base md:text-xl mb-8 text-center md:text-left slide-in-bottom-subtitle">랜딩페이지 설명</p>
				<p className="text-gray-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Download our app</p>
				<div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                </div>
			</div>

			{/* Right */}
			<div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
				<img className="" src=""/>
			</div>

		</div>
    )
}

export default Main;