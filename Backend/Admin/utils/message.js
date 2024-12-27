import React, { useEffect, useState } from 'react';

const Message = ({ variant = "blue", message, isContact=false }) => {
  // the alert is displayed by default
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    if (message) {
      setAlert(true);
      const timer = setTimeout(() => {
        setAlert(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);    
    
  return (
    <>
        {alert && (
            <div className={`flex items-center ${!isContact ? 'lg:w-6/12' : ''} p-4 mb-4 text-sm text-${variant}-800 border border-${variant}-300 rounded-lg bg-${variant}-50 dark:bg-gray-800 dark:text-${variant}-400 dark:border-${variant}-800`} role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    {message}
                </div>
            </div>
            )
        }
    </>
  )
}

export default Message;