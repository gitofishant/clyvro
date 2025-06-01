import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  icon,
  title,
  description,
  className = '',
  iconClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  onClick,
  children,
  ...props
}) => {
  return (
    <div 
      className={`bg-white rounded-lg p-6 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && (
        <div className={`mb-4 ${iconClassName}`}>
          {icon}
        </div>
      )}
      
      {title && (
        <h3 className={`text-xl font-semibold mb-2 ${titleClassName}`}>{title}</h3>
      )}
      
      {description && (
        <p className={`text-gray-600 ${descriptionClassName}`}>{description}</p>
      )}
      
      {children}
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Card;