import './App.css';

export default function App() {
  return (
    <div>

      <div className="absolute top-0 w-56">
        <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="hack club flag" className="top-0" href="https://hackclub.com" target="_blank" rel="noopenner noreferrer"/>
      </div>

      <div className="mt-32">
        <div className="flex flex-col justify-center text-center items-center">
          <img src="/logo.svg" alt="anchor logo" className="md:h-72"/>
          <p className="text-2xl mx-4">you ship a vtuber style logo for your project, we ship you custom stickers</p>
          <div className="flex flex-row gap-2 mt-4">
            <button href="#" className="bg-slate-300 px-6 py-2 rounded-lg text-xl">guide coming soon!</button>
          </div>

        </div>

      </div>

      <div className="mt-32 p-10">
        <div className="flex flex-col justify-center items-center bg-blue-400 py-10 rounded-xl">

          <div className="flex flex-wrap gap-4 justify-center items-center mt-16 ml-2">
            <div className="flex flex-wrap gap-4">
              <p className="text-6xl text-pink-200">1.</p>
              <p className="max-w-64 md:max-w-[17rem] text-lg">design a vtuber style logo in <a href="figma.com" className="link" target="_blank" rel="noopenner noreferrer">Figma</a> for your <a href="highseas.hackclub.com" className="link" target="_blank" rel="noopenner noreferrer">High Seas</a> project</p>
            </div>
            <img src="/arrows.svg" alt="arrows" className="w-16 mr-6 hidden md:block"/>
            <div className="flex flex-wrap gap-4">
              <p className="text-6xl text-pink-200">2.</p>
              <p className="max-w-64 md:max-w-56 text-lg">ship your project out to <a href="highseas.hackclub.com" className="link" target="_blank" rel="noopenner noreferrer">High Seas</a> with your art</p>
            </div>
            <img src="/arrows.svg" alt="arrows" className="w-16 mr-6 hidden md:block"/>
            <div className="flex flex-wrap gap-4">
              <p className="text-6xl text-pink-200">3.</p>
              <p className="max-w-64 text-lg">check your mailbox for your project logo as a sticker!</p>
            </div>
          </div>


          <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-24 mx-8 mb-16">
            <div className="border-4 border-white border-dashed p-6">
              <p className="text-2xl">Getting started:</p>
              <p className="mt-4">For this YSWS, we're using <a href="figma.com" className="link" target="_blank" rel="noopenner noreferrer">Figma</a>! It's used to design websites and vector art of all kind. <span className="opacity-50">it's also the main (and only) vector art app that i use {":')"}</span></p>
              <p className="mt-2">You can download Figma here: <a href="https://www.figma.com/downloads/" className="link" target="_blank" rel="noopenner noreferrer">https://www.figma.com/downloads/</a></p>
              <p className="mt-2"></p>
              <p className="mt-2">If you want to use the vtuber logo font, you'll also need to install that from <a href="https://www.freefontdownload.org/en/fot-yuruka-std.font" className="link" target="_blank" rel="noopenner noreferrer">here</a>.</p>
              <p className="mt-2">In order to actually use that font in Figma, you'll need to install the <a href="https://www.figma.com/downloads/" className="link" target="_blank" rel="noopenner noreferrer">Figma Font Installer</a>. You won't be able to use custom fonts on the web version.</p>
              <p className="mt-2">After you're done setting up, create a new design file in Figma and you're ready to go!</p>
            </div>
            <div className="border-4 border-white border-dashed p-6">
              <p className="text-2xl">Does it need to be for a High Seas project?</p>
              <p className="mt-4">For now, yes - but that might change in the future!</p>
              <p className="mt-2">In order to submit, you'll to make a High Seas account <a href="highseas.hackclub.com" className="link" target="_blank" rel="noopenner noreferrer">here</a>.</p>
              <p className="mt-2">After your project has recieved payout in High Seas, you'll need to submit just one more form to confirm shipping. More on that later!</p>
              <p className="mt-8">Any more questions? Ask in <a href="https://hackclub.slack.com/archives/C07V5401VMY" className="link" target="_blank" rel="noopenner noreferrer">#anchor</a> on the slack!</p>

            </div>
          </div>

        </div>
      </div>


      <div className="flex flex-col justify-center items-center text-center mt-10 m-2">
        <p>made with {":3"} by <a href="https://github.com/acornitum" target="_blank" rel="noopenner noreferrer" className="text-blue-600">acon</a></p>

      </div>

    </div>
  );
}
