import React from 'react';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
        <div className="loading__container">
            <div className="loading__spinner"></div>
            <p className="loading__message">Loading, please wait...</p>
        </div>
    </div>
  )
}

export default Loading;