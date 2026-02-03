import { useState, useRef, useEffect } from 'react';

const Slider = ({
  min = 0,
  max = 100,
  value,
  onChange,
  step = 1,
  dual = false,
  formatValue = (val) => val
}) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingHandle, setDraggingHandle] = useState(null);

  const getValueFromPosition = (clientX) => {
    if (!sliderRef.current) return min;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const rawValue = min + percentage * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;

    return Math.max(min, Math.min(max, steppedValue));
  };

  const handleMouseDown = (e, handle) => {
    e.preventDefault();
    setIsDragging(true);
    setDraggingHandle(handle);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newValue = getValueFromPosition(e.clientX);

    if (dual) {
      const [minVal, maxVal] = value;
      if (draggingHandle === 'min') {
        onChange([Math.min(newValue, maxVal), maxVal]);
      } else {
        onChange([minVal, Math.max(newValue, minVal)]);
      }
    } else {
      onChange(newValue);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggingHandle(null);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleMouseMove);
      document.addEventListener('touchend', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleMouseMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging, draggingHandle, value]);

  const getPercentage = (val) => {
    return ((val - min) / (max - min)) * 100;
  };

  if (dual) {
    const [minVal, maxVal] = value;
    const minPercent = getPercentage(minVal);
    const maxPercent = getPercentage(maxVal);

    return (
      <div className="w-full">
        <div
          ref={sliderRef}
          className="relative h-2 bg-gray-200 rounded-full cursor-pointer"
        >
          {/* Active range */}
          <div
            className="absolute h-full bg-vivino-burgundy rounded-full"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`
            }}
          />

          {/* Min handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border-2 border-vivino-burgundy rounded-full cursor-pointer shadow-md hover:scale-110 transition-transform"
            style={{ left: `${minPercent}%` }}
            onMouseDown={(e) => handleMouseDown(e, 'min')}
            onTouchStart={(e) => handleMouseDown(e.touches[0], 'min')}
          />

          {/* Max handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-vivino-burgundy border-2 border-vivino-burgundy rounded-full cursor-pointer shadow-md hover:scale-110 transition-transform"
            style={{ left: `${maxPercent}%` }}
            onMouseDown={(e) => handleMouseDown(e, 'max')}
            onTouchStart={(e) => handleMouseDown(e.touches[0], 'max')}
          />
        </div>
      </div>
    );
  }

  // Single handle slider
  const percentage = getPercentage(value);

  return (
    <div className="w-full">
      <div
        ref={sliderRef}
        className="relative h-2 bg-gray-200 rounded-full cursor-pointer"
      >
        {/* Active part */}
        <div
          className="absolute h-full bg-vivino-burgundy rounded-full"
          style={{ width: `${percentage}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-vivino-burgundy border-2 border-vivino-burgundy rounded-full cursor-pointer shadow-md hover:scale-110 transition-transform"
          style={{ left: `${percentage}%` }}
          onMouseDown={(e) => handleMouseDown(e, 'single')}
          onTouchStart={(e) => handleMouseDown(e.touches[0], 'single')}
        />
      </div>
    </div>
  );
};

export default Slider;
