import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import LetterFrequencyBar from "./LetterFrequencyBar"; // Import component

const CharacterAnalyzer = ({ text }) => {
    // State for toggling "See More"
    const [showAll, setShowAll] = useState(false);

    // Function to calculate letter frequencies
    const getLetterFrequencies = (text) => {
        const frequencies = {};
        const totalLetters = text.replace(/\s/g, "").length; // Ignore spaces

        for (let char of text) {
            if (char.match(/[a-zA-Z]/)) { // Only count letters
                char = char.toUpperCase(); // Normalize to uppercase
                frequencies[char] = (frequencies[char] || 0) + 1;
            }
        }

        return { frequencies, totalLetters };
    };

    const { frequencies, totalLetters } = getLetterFrequencies(text || "");
    const hasLetters = totalLetters > 0;

    // Sort letters by frequency (highest first)
    const sortedEntries = Object.entries(frequencies).sort((a, b) => b[1] - a[1]);

    // Only show top 5 initially
    const topFive = sortedEntries.slice(0, 5);
    const remaining = sortedEntries.slice(5);

    return (
        <div className="p-5">
            {/* Letter Density Section */}
            <div className="mt-10">
                <h2 className="text-xl lg:text-2xl font-bold dark:font-normal">Letter Density</h2>

                {!hasLetters ? (
                    <p className="text-sm text-gray-400 mt-3">
                        No characters found. Start typing to see letter density.
                    </p>
                ) : (
                    <>
                        <ul>
                            {topFive.map(([letter, count]) => {
                                const percent = (count / totalLetters) * 100;
                                return (
                                    <LetterFrequencyBar
                                        key={letter}
                                        letter={letter}
                                        count={count}
                                        total={totalLetters}
                                        percent={percent}
                                    />
                                );
                            })}

                            {/* Show remaining letters only if "See More" is clicked */}
                            {showAll &&
                                remaining.map(([letter, count]) => {
                                    const percent = (count / totalLetters) * 100;
                                    return (
                                        <LetterFrequencyBar
                                            key={letter}
                                            letter={letter}
                                            count={count}
                                            total={totalLetters}
                                            percent={percent}
                                        />
                                    );
                                })}
                        </ul>

                        {/* See More / See Less Button */}
                        {remaining.length > 0 && (
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="mt-5 text-black dark:text-white cursor-pointer hover:text-gray-500 text-lg flex items-center"
                            >
                                {showAll ? (
                                    <>
                                        See less <ChevronUp className="w-5 h-5 inline text-sm" />
                                    </>
                                ) : (
                                    <>
                                        See more <ChevronDown className="w-5 h-5 inline text-sm" />
                                    </>)}
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default CharacterAnalyzer;
