import React from "react";

const LetterFrequencyBar = ({ letter, count, total, percent }) => {
  return (
    <li className="flex items-center justify-between mt-5">
      <span className="text-xl text-gray-600 dark:text-gray-400 w-7">{letter}</span>
      <div className="w-220 rounded-xl h-4 bg-gray-300 dark:bg-gray-700 relative flex-1">
        <div
          className="h-4 bg-purple-500 dark:bg-purple-400 rounded-xl transition-all duration-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <span className="text-xl text-gray-600 dark:text-gray-400 w-30 text-end">
        {count} ({percent.toFixed(2)}%)
      </span>
    </li>
  );
};

export default LetterFrequencyBar;
