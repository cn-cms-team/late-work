import { memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MONTHS } from '../data/employees';

interface MonthSelectorProps {
  currentMonth: number;
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export const MonthSelector = memo(
  ({ currentMonth, canGoPrev, canGoNext, onPrev, onNext }: MonthSelectorProps) => {
    return (
      <div className="flex items-center justify-center gap-4 mt-4 bg-white/10 backdrop-blur-md rounded-full p-1 w-fit mx-auto ring-1 ring-white/10">
        <button
          onClick={onPrev}
          disabled={!canGoPrev}
          className={`p-2 rounded-full hover:bg-white/20 transition-all cursor-pointer ${
            !canGoPrev ? 'opacity-30 cursor-not-allowed' : 'text-white'
          }`}
          aria-label="Previous month"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="text-lg font-medium text-white w-28 tracking-wide text-center">
          {MONTHS[currentMonth]}
        </span>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`p-2 rounded-full hover:bg-white/20 transition-all cursor-pointer ${
            !canGoNext ? 'opacity-30 cursor-not-allowed' : 'text-white'
          }`}
          aria-label="Next month"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    );
  }
);

MonthSelector.displayName = 'MonthSelector';
