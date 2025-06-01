import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({
  value = 0,
  max = 100,
  height = 'h-2',
  color = 'bg-blue-500',
  backgroundColor = 'bg-gray-200',
  showLabel = false,
  labelPosition = 'right',
  className = '',
  ...props
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const renderLabel = () => {
    return <span className="text-sm font-medium text-gray-700">{percentage.toFixed(0)}%</span>;
  };

  return (
    <div className={`w-full ${className}`} {...props}>
      <div className="flex items-center">
        {showLabel && labelPosition === 'left' && (
          <div className="mr-2">{renderLabel()}</div>
        )}
        
        <div className={`w-full ${backgroundColor} rounded-full overflow-hidden ${height}`}>
          <div
            className={`${color} rounded-full transition-all duration-300 ease-in-out`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        {showLabel && labelPosition === 'right' && (
          <div className="ml-2">{renderLabel()}</div>
        )}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  showLabel: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
};

export default ProgressBar;