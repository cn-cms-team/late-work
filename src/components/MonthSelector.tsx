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
      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={onPrev}
          disabled={!canGoPrev}
          className={`p-2 rounded border transition-all cursor-pointer ${
            !canGoPrev
              ? 'border-white/5 text-white/20 cursor-not-allowed'
              : 'border-arcane/40 text-arcane-light hover:bg-arcane/10 hover:border-arcane'
          }`}
          aria-label="Previous month"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="px-4 py-1.5 border border-white/10 rounded bg-deep-void/60">
          <span className="font-pixel text-[10px] text-white/70 tracking-wider">
            {MONTHS[currentMonth]}
          </span>
        </div>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`p-2 rounded border transition-all cursor-pointer ${
            !canGoNext
              ? 'border-white/5 text-white/20 cursor-not-allowed'
              : 'border-arcane/40 text-arcane-light hover:bg-arcane/10 hover:border-arcane'
          }`}
          aria-label="Next month"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    );
  }
);

MonthSelector.displayName = 'MonthSelector';
