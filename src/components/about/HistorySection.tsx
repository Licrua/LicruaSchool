import React from 'react';

interface HistoryItem {
  year: string;
  event: string;
}

const HistorySection = ({ history }: { history: HistoryItem[] }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6 text-center text-secondary">
      Our Journey
    </h2>
    <ul className="timeline timeline-vertical">
      {history.map((item, index: number) => (
        <li key={index}>
          <div className="timeline-start flex gap-3 font-bold text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            {item.year}
          </div>
          <div className="timeline-middle">
            <div className="timeline-dot bg-accent" />
          </div>
          <div className="timeline-end text-gray-700">{item.event}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default HistorySection;
