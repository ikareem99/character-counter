import React, { useState } from 'react'
import DarkModeToggle from "./components/DarkModeToggle";
import CharAnnalyzer from "./components/CharAnnalyzer";

const App = () => {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [timeCount, setTimeCount] = useState(0);

    const [char, setChar] = useState(0);
    const [isChecked, setIsChecked] = useState(false);

    

    const handleCheckboxChange = (event) => {
        const checked = event.target.checked;
        setIsChecked(checked);

        setChar((prevChar) => {
            if (checked) {
                return text.replace(/\s/g, "").length; // Count characters without spaces
            } else {
                return text.length; // Count all characters including spaces
            }
        });
    };

    const characterCounter = (input) => {
        const newText = input.target.value;
        setText(newText);

        // Word Count
        const words = newText.trim().length > 0 ? newText.trim().split(/\s+/).length : 0;

        // Sentence Count
        const sentences = (newText.match(/[.!?]+/g) || []).length;

        // Estimated reading time
        const time = Math.ceil(words / 100);
        setTimeCount(time);

        setWordCount(words);
        setSentenceCount(sentences);

        // Update character count when the checkbox is checked
        setChar((prevChar) => (isChecked ? newText.replace(/\s/g, "").length : newText.length));
    };
    

    return (
        <div className='w-[100vw] px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-52 bg-white text-black dark:bg-black dark:text-white h-[100vh] font-roboto overflow-x-hidden'>
            <div className='w-[100%] h-[100px] flex items-center justify-between'>
                <div className='flex justify-center items-center'>
                    <img
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
                        src="https://lh3.googleusercontent.com/pw/AP1GczNuOZFguZ1dHjWa9_fp2Vtmp4cd5U6ifqtzZ9KJn-vedufzj5yatMFlQjd8RvObO4CDffugFviIjPwGZ2eyof1zcgJhWMUWdsxGSe9JozxnZIOS0wwbW4nO5HQL3XnmNHH0tIlVxw1advwYlU4xr822=w379-h283-s-no-gm?authuser=0"
                        alt="Character Counter Logo"
                    />
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                        Character Counter
                    </p>
                </div>

                <DarkModeToggle />
            </div>

            <div className='w-[100%] flex justify-center flex-col'>
                <div className='w-[100%] flex justify-center'>
                    <h1 className='text-center text-4xl sm:text-5xl md:text-6xl font-bold w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[45%] mt-15'>Analyze your text in real-time.</h1>
                </div>

                <textarea
                    value={text}
                    onChange={characterCounter}
                    // onChange={(e) => setText(e.target.value)}
                    className='mt-10 bg:-gray-400 dark:bg-gray-900 border-2 border-gray-500 rounded-lg p-5 text-1xl outline-none placeholder-gray-600 dark:placeholder-gray-300 h-60' name="" id="" placeholder='Start typing here... (or paste your text)'></textarea>

                <div className='flex justify-between items-center h-[50px]'>
                    <div className='flex px-1 items-center'>
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-600" />
                        <p className="px-0 sm:px-2 md:px-2 lg:px-2 text-sm sm:text-base md:text-lg lg:text-lg text-gray-500 dark:text-gray-400">
                            Exclude Spaces
                        </p>
                    </div>
                    <p className="pr-0 m:pr-2 md:pr-2 lg:pr-2 text-sm sm:text-base md:text-lg lg:text-lg text-gray-500 dark:text-gray-400">
                        Approx. reading time: {timeCount} minute
                    </p>

                </div>

                <div className='flex justify-center flex-wrap gap-5 mt-10'>


                <div className="relative w-87 h-40 p-5 bg-purple-500 dark:bg-purple-700 rounded-xl flex justify-center text-black dark:text-white flex-col overflow-hidden">

                        <div className="absolute right-0 top-0 w-full h-full flex justify-end">
                            <div className="absolute w-10 h-10 bg-white/20 rounded-full top-5 right-5"></div>
                            <div className="absolute w-14 h-14 bg-blue-300/30 rounded-lg top-14 right-10 rotate-12"></div>
                            <div className="absolute w-8 h-8 bg-yellow-300/40 rounded-full bottom-5 right-5"></div>
                        </div>
                        <h3 className="text-5xl font-bold font-liter relative z-10">{char}</h3>
                        <p className="text-1xl mt-3 font-semibold relative z-10">Total Characters</p>
                    </div>
                    <div className="relative w-87 h-40 p-5 bg-blue-300 dark:bg-[#FF8159] rounded-xl flex justify-center text-black dark:text-white flex-col overflow-hidden">
                        <div className="absolute right-0 top-0 w-full h-full flex justify-end">
                            <div className="absolute w-12 h-12 bg-white/20 rounded-full top-3 right-6"></div>
                            <div className="absolute w-16 h-16 bg-green-300/30 skew-x-12 top-12 right-8"></div>
                            <div className="absolute w-6 h-6 bg-red-400/40 rounded-tr-lg bottom-3 right-4"></div>
                        </div>
                        <h3 className="text-5xl font-bold font-liter relative z-10">{wordCount}</h3>
                        <p className="text-1xl mt-3 font-semibold relative z-10">Total Words</p>
                    </div>
                    <div className="relative w-87 h-40 p-5 bg-green-400 dark:bg-[#FF9F00] rounded-xl flex justify-center text-black dark:text-white flex-col overflow-hidden">
                        <div className="absolute right-0 top-0 w-full h-full flex justify-end">
                            <div className="absolute w-14 h-14 bg-white/20 rounded-full top-2 right-4"></div>
                            <div className="absolute w-10 h-10 bg-orange-300/40 rotate-45 top-10 right-8"></div>
                            <div className="absolute w-12 h-12 bg-purple-400/50 rounded-br-lg bottom-3 right-5"></div>
                        </div>
                        <h3 className="text-5xl font-bold font-liter relative z-10">{sentenceCount}</h3>
                        <p className="text-1xl mt-3 font-semibold relative z-10">Total Sentences</p>
                    </div>


                </div>

                {/* <div className='mt-10'>
                    <h2 className='text-xl lg:text-2xl font-bold dark:font-normal'>Letter Density</h2>
                    <p className='text-sm text-gray-400 mt-3'>No characters found. Start typing to see letter density.</p>
                    <ul>
                        <li className='flex items-center justify-between mt-5'>
                            <span className='text-xl text-gray-300'>E</span>
                            <div className='w-240 rounded-xl h-4 bg-gray-700'>
                                <div className='w-[16%] h-4 bg-purple-400 rounded-xl'>

                                </div>
                            </div>
                            <span className='text-xl text-gray-300'>40(16.06%)</span>
                        </li>
                    </ul>
                </div> */}

                <CharAnnalyzer text={text} />

                <div className='w-[100%] h-[100px] flex items-center justify-center mt-10'>
                    <p>Made With ❤️ By <a href='https://www.linkedin.com/in/ikareem99' className='hover:text-sky-500' target='_blank'>Hanzala Kareem</a></p>
                </div>
            </div>
        </div>
    )
}

export default App