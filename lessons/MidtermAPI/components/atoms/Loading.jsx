import React from 'react';

export default function Loading() {
    return (
        <>
            <div
                style={{
                    display:'flex',
                    flexDirection:'column'
                }}
            >
                <h4 className="loading">Loading...</h4>
                <img src="default-dance.gif"/>
            </div>

        </>
    )
}
