import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({
  items,
  allowMultiple = false,
  className = '',
  itemClassName = '',
  titleClassName = '',
  contentClassName = '',
  ...props
}) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(index)
          ? prevOpenItems.filter((item) => item !== index)
          : [...prevOpenItems, index]
      );
    } else {
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(index) ? [] : [index]
      );
    }
  };

  const isItemOpen = (index) => openItems.includes(index);

  return (
    <div className={`w-full ${className}`} {...props}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-b border-gray-200 ${itemClassName}`}
        >
          <button
            className={`w-full flex items-center justify-between py-4 px-4 text-left focus:outline-none ${titleClassName}`}
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center">
              {item.icon && <span className="mr-3">{item.icon}</span>}
              <span className="font-semibold">{item.title}</span>
            </div>
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${
                isItemOpen(index) ? 'transform rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isItemOpen(index) ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className={`p-4 ${contentClassName}`}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
  allowMultiple: PropTypes.bool,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  contentClassName: PropTypes.string,
};

export default Accordion;