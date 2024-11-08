import './App.css';
import React from 'react'


export default function App() {
  
  return (
    <div>

      <div className="absolute top-0 w-56">
        <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="hack club flag" className="top-0" href="https://hackclub.com" target="_blank" rel="noopenner noreferrer"/>
      </div>

      <img src="/logos/arcade.svg" className="logo absolute -rotate-6 left-16 top-44 w-56 hidden md:block"/>
      <img src="/logos/boba.svg" className="logo absolute rotate-12 right-32 top-36 w-56 hidden md:block"/>
      <img src="/logos/sleep.svg" className="logo absolute left-80 top-16 w-56 hidden md:block"/>
      <img src="/logos/ligma.svg" className="logo absolute -rotate-[70deg] left-24 top-96 w-56 hidden md:block"/>
      <img src="/logos/acon.svg" className="logo absolute rotate-[50deg] right-16 top-96 w-56 hidden md:block"/>

      

      <div className="mt-32">
        <div className="flex flex-col justify-center text-center items-center">
          <img src="/logo.svg" alt="anchor logo" className="md:h-56 mb-8 mt-8"/>
          <div className="-rotate-2">
            <p className="text-2xl mx-4">you ship a <span className="bg-[#B0E298] px-1 pb-1">vtuber style logo</span> for your project, we ship you <span className="bg-pink-300 px-1 pb-1">custom stickers</span></p>
          </div>
          <div className="flex flex-row gap-2 mt-8">
            <p className="bg-blue-300 px-6 py-2 rounded-lg text-xl">workshop call happening friday (nov 8th) 2pm est!</p>
            <a href="https://forms.hackclub.com/t/rvyw8wbChSus" className="bg-[#B0E298] px-6 py-2 rounded-lg text-xl submit pop" target="_blank" rel="noopenner noreferrer">submit here!</a>
          </div>

        </div>

      </div>

      <div className="mt-16 md:mt-32 p-10">
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-blue-400 to-[#2FBCFD] md:py-10 shadow-xl rounded-xl text-[#011627]">

          <div className="flex flex-wrap gap-4 justify-center items-center mt-16 ml-2">
            <div className="flex flex-wrap gap-4">
              <p className="text-6xl text-pink-200">1.</p>
              <p className="max-w-64 md:max-w-[17rem] text-lg">design a vtuber style logo in <a href="https://figma.com" className="link" target="_blank" rel="noopenner noreferrer">Figma</a> for your <a href="https://highseas.hackclub.com" className="link" target="_blank" rel="noopenner noreferrer">High Seas</a> project</p>
            </div>
            <img src="/arrows.svg" alt="arrows" className="w-16 mr-6 hidden md:block"/>
            <div className="flex flex-wrap gap-4">
              <p className="text-6xl text-pink-200">2.</p>
              <p className="max-w-64 md:max-w-56 text-lg">ship your project out to <a href="https://highseas.hackclub.com" className="link" target="_blank" rel="noopenner noreferrer">High Seas</a> with your art</p>
            </div>
            <img src="/arrows.svg" alt="arrows" className="w-16 mr-6 hidden md:block"/>
            <div className="flex flex-wrap gap-4">
              <p className="text-6xl text-pink-200">3.</p>
              <p className="max-w-64 text-lg">check your mailbox for your project logo as a sticker!</p>
            </div>
          </div>


          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-24 mx-8 mb-16">
            <div className="border-4 border-[#B0E298] border-dashed p-6">
              <p className="text-2xl">Getting started:</p>
              <p className="mt-4">For this YSWS, we're using <a href="https://figma.com" className="link" target="_blank" rel="noopenner noreferrer">Figma</a>! It's used to design websites and vector art of all kind. <span className="opacity-50">it's also the main (and only) vector art app that i use {":')"}</span></p>
              <p className="mt-2">You can download Figma here: <a href="https://www.figma.com/downloads/" className="link break-all" target="_blank" rel="noopenner noreferrer">https://www.figma.com/downloads/</a></p>
              <p className="mt-2"></p>
              <p className="mt-2">If you want to use the vtuber logo font, you'll also need to install that from <a href="https://www.freefontdownload.org/en/fot-yuruka-std.font" className="link" target="_blank" rel="noopenner noreferrer">here</a> or <a href="https://archive.org/details/Fontworks" className="link">here</a>.</p>
              <p className="mt-2">In order to actually use that font in Figma, you'll need to install the <a href="https://www.figma.com/downloads/" className="link" target="_blank" rel="noopenner noreferrer">Figma Font Installer</a>. You won't be able to use custom fonts on the web version.</p>
              <p className="mt-2">After you're done downloading everything you need, create a new design file in Figma and you're ready to go!</p>
            </div>
            <div className="border-4 border-[#B0E298] border-dashed p-6">
              <p className="text-2xl">Does it need to be for a High Seas project?</p>
              <p className="mt-4">For now, yes - but that might change in the future!</p>
              <p className="mt-2">In order to submit, make a High Seas account <a href="https://highseas.hackclub.com" className="link" target="_blank" rel="noopenner noreferrer">here</a>. When you submit the project you made the logo for, set the cover image as the art!</p>
              <p className="mt-2">After your project has recieved payout in High Seas, you'll need to submit just one more form (the one below) to confirm shipping.</p>
              <div className="mt-8">
                <a href="https://forms.hackclub.com/t/rvyw8wbChSus" className="px-6 py-2 bg-blue-300 rounded-md submit" target="_blank" rel="noopenner noreferrer">Submit your design here!</a>   
              </div>
              <p className="mt-8">Any more questions? Ask in <a href="https://hackclub.slack.com/archives/C07PZMBUNDS" className="link" target="_blank" rel="noopenner noreferrer">#high-seas</a> on the slack!</p>
              <p className="text-xs opacity-50">ping @acon when you ask because things easily get lost at sea!</p>

            </div>
          </div>

        </div>
      </div>


      <div className="flex flex-col justify-center items-center text-center mt-10 m-2 mb-4">
        <p>made with {":3"} by <a href="https://github.com/acornitum" target="_blank" rel="noopenner noreferrer" className="text-blue-600">acon</a></p>

      </div>

    </div>
  );
}
