import React, { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeatmapCard = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateRandomData = (numDays: number) => {
    const data = [];
    for (let i = 0; i < numDays; i++) {
      data.push(Math.floor(Math.random() * 8));
    }
    return data;
  };

  const months = useMemo(() => {
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    const currentMonthName = monthNames[currentMonth];
    const prevMonthIndex = (currentMonth === 0 ? 11 : currentMonth - 1);
    const prevMonthName = monthNames[prevMonthIndex];
    return [prevMonthName, currentMonthName];
  }, [currentMonth]);

  const numDaysInCurrentMonth = currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()
    ? currentDate.getDate()
    : getDaysInMonth(currentMonth, currentYear);

  const numDaysInPrevMonth = currentMonth === 0
    ? getDaysInMonth(11, currentYear - 1)
    : getDaysInMonth(currentMonth - 1, currentYear);

  const userActivityData = useMemo(() => {
    const totalDays = 365; // simulate one year of data
    const activityData = generateRandomData(totalDays);
    return activityData;
  }, []);

  const calculateStreaks = (activityData: number[]) => {
    let currentStreak = 0;
    let maxStreak = 0;
    let globalMaxStreak = 0;

    let tempStreak = 0;
    for (let i = 0; i < activityData.length; i++) {
      if (activityData[i] > 0) {
        tempStreak++;
      } else {
        if (tempStreak > maxStreak) {
          maxStreak = tempStreak;
        }
        tempStreak = 0;
      }
    }
    globalMaxStreak = Math.max(maxStreak, tempStreak);

    const todayIndex = Math.floor(currentDate.getTime() / (1000 * 60 * 60 * 24)); // convert current date to index
    for (let i = todayIndex; i >= 0; i--) {
      if (activityData[i % activityData.length] > 0) {
        currentStreak++;
      } else {
        break;
      }
    }

    return { currentStreak, maxStreak, globalMaxStreak };
  };

  const currentMonthData = useMemo(() => {
    const daysOffset = currentDate.getTime() - new Date(currentYear, currentMonth).getTime();
    const startIndex = Math.floor(daysOffset / (1000 * 60 * 60 * 24));
    return userActivityData.slice(startIndex, startIndex + numDaysInCurrentMonth);
  }, [currentMonth, currentYear, userActivityData, numDaysInCurrentMonth]);

  const prevMonthData = useMemo(() => {
    const daysOffset = currentDate.getTime() - new Date(currentYear, currentMonth - 1).getTime();
    const startIndex = Math.floor(daysOffset / (1000 * 60 * 60 * 24)) - numDaysInCurrentMonth;
    return userActivityData.slice(startIndex, startIndex + numDaysInPrevMonth);
  }, [currentMonth, currentYear, userActivityData, numDaysInPrevMonth]);

  const getHeatmapColor = (value: number) => {
    if (value === 0) return 'bg-gray-200';
    if (value <= 2) return 'bg-green-200';
    if (value <= 4) return 'bg-green-400';
    if (value <= 6) return 'bg-green-500';
    return 'bg-green-600';
  };

  const [streaks, setStreaks] = useState(calculateStreaks(currentMonthData));

  useEffect(() => {
    setStreaks(calculateStreaks(currentMonthData));
  }, [currentMonthData]);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) return;
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-600">Practice</h3>
        <div className="flex items-center">
          <button onClick={handlePrevMonth} className="bg-gray-100 rounded-full p-2 mr-2">
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
          <span className="text-gray-600 mr-2">{months[0]} {currentMonth === 0 ? currentYear - 1 : currentYear} - {months[1]} {currentYear}</span>
          <button onClick={handleNextMonth} className="bg-gray-100 rounded-full p-2" disabled={currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()}>
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-1">
        <div className="grid grid-cols-6 gap-1">
          {prevMonthData.map((value, index) => (
            <div
              key={index}
              className={`h-6 w-6 rounded ${getHeatmapColor(value)}`}
            ></div>
          ))}
        </div>
        <div className="lg:w-2.5"></div> {/* 10px gap between months */}
        <div className="grid grid-cols-6 gap-1">
          {currentMonthData.map((value, index) => (
            <div
              key={index}
              className={`h-6 w-6 rounded ${getHeatmapColor(value)}`}
            ></div>
          ))}
        </div>
      </div>

      <div className='flex flex-col mt-8'>
        <div className='flex flex-row gap-1 items-center mb-4'>
            <div className='h-4 w-4 rounded bg-gray-200'></div>
            <div className='h-4 w-4 rounded bg-green-200'></div>
            <div className='h-4 w-4 rounded bg-green-400'></div>
            <div className='h-4 w-4 rounded bg-green-500'></div>
            <div className='h-4 w-4 rounded bg-green-600'></div>
            <p className='ml-2'>Questions</p>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between'>
            <p>Current Streak: {streaks.currentStreak}</p>
            <p>Max Streak: {streaks.maxStreak}</p>
            <p>Global Max Streak: {streaks.globalMaxStreak}</p>
        </div>
      </div>
    </div>
  );
};

export default HeatmapCard;
