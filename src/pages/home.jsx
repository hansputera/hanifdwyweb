function home() {
    const age = new Date().getFullYear() - 2007;
    return(
        <div className="mx-auto container text-center">
            <div className="p-6">
                <img className="h-100 rounded-full object-center mx-auto shadow-lg shadow-gray-700" src="https://avatars.githubusercontent.com/u/47862061?v=4" />
                <p className="font-sans text-4xl py-5">
                    Hanif Dwy Putra S
                </p>
                <p className="font-sans text-2xl italic">
                    Hello, let me introduce my self. My name is <strong>Hanif Dwy Putra S</strong>. I'm {age} years old. And, i from <strong>Central Sulawesi, Palu, Indonesia.</strong> I'm interested in science, astronomy, and geography. Not only that, I also like computer science (programming). 
                </p>
            </div>

            <div className="flex justify-between p-2 space-x-4 mx-auto">
                <a href="https://github.com/hansputera" className="bg-dark-400 w-32 duration-100 py-3 p-3 rounded text-white font-sans shadow-lg shadow-gray-900">
                    GitHub
                </a>
                <a href="https://t.me/hanifdwypoetra" className="bg-indigo-500 duration-100 w-32 py-3 p-3 rounded text-white font-sans shadow-lg shadow-gray-900">
                    Telegram
                </a>
            </div>
        </div>
    )
}


export default home;