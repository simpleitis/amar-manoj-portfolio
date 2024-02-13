import React from 'react'

const ProgressBars = () => {
  return (
    <>
      <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">
        Skills
      </h4>
      <div className="mb-7">
        <div className="flex justify-between py-1">
          <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
            Mechanical
          </span>
          <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
            85%
          </span>
        </div>
        <svg
          className="rc-progress-line"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path
            className="rc-progress-line-trail"
            d="M 0.5,0.5
   L 99.5,0.5"
            strokeLinecap="round"
            stroke="#D9D9D9"
            strokeWidth={1}
            fillOpacity={0}
          />
          <path
            className="rc-progress-line-path"
            d="M 0.5,0.5
   L 99.5,0.5"
            strokeLinecap="round"
            stroke="#FF6464"
            strokeWidth={1}
            fillOpacity={0}
            style={{
              strokeDasharray: '79.2px, 100px',
              strokeDashoffset: 0,
              transition:
                'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s',
            }}
          ></path>
        </svg>
      </div>
      <div className="mb-7">
        <div className="flex justify-between py-1">
          <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
            Electrical{' '}
          </span>
          <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
            95%
          </span>
        </div>
        <svg
          className="rc-progress-line"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path
            className="rc-progress-line-trail"
            d="M 0.5,0.5
   L 99.5,0.5"
            strokeLinecap="round"
            stroke="#D9D9D9"
            strokeWidth={1}
            fillOpacity={0}
          />
          <path
            className="rc-progress-line-path"
            d="M 0.5,0.5
   L 99.5,0.5"
            strokeLinecap="round"
            stroke="#9272D4"
            strokeWidth={1}
            fillOpacity={0}
            style={{
              strokeDasharray: '94.05px, 100px',
              strokeDashoffset: 0,
              transition:
                'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s',
            }}
          ></path>
        </svg>
      </div>
      <div className="mb-7">
        <div className="flex justify-between py-1">
          <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
            Problem Diagnosis
          </span>
          <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
            85%
          </span>
        </div>
        <svg
          className="rc-progress-line"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path
            className="rc-progress-line-trail"
            d="M 0.5,0.5
   L 99.5,0.5"
            strokeLinecap="round"
            stroke="#D9D9D9"
            strokeWidth={1}
            fillOpacity={0}
          />
          <path
            className="rc-progress-line-path"
            d="M 0.5,0.5
   L 99.5,0.5"
            strokeLinecap="round"
            stroke="#5185D4"
            strokeWidth={1}
            fillOpacity={0}
            style={{
              strokeDasharray: '79.2px, 100px',
              strokeDashoffset: 0,
              transition:
                'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s',
            }}
          ></path>
        </svg>
      </div>
      <div className="mb-7">
        <div className="flex justify-between py-1">
          <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
            Insurance Claims
          </span>
          <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
            90%
          </span>
        </div>
        <svg
          className="rc-progress-line"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path
            className="rc-progress-line-trail"
            d="M 0.5,0.5
   L 99.5,0.5"
            strokeLinecap="round"
            stroke="#D9D9D9"
            strokeWidth={1}
            fillOpacity={0}
          />
          <path
            className="rc-progress-line-path"
            d="M 0.5,0.5
   L 99.5,0.5"
            strokeLinecap="round"
            stroke="#CA56F2"
            strokeWidth={1}
            fillOpacity={0}
            style={{
              strokeDasharray: '88px, 100px',
              strokeDashoffset: 0,
              transition:
                'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s',
            }}
          ></path>
        </svg>
      </div>
    </>
  )
}

export default ProgressBars
