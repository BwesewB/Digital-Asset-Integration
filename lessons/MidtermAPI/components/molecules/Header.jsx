import React from 'react';
import Button from '../atoms/Button';

export default function Header({ fetchData, clearData }) {
    return (
        <header className="header">
            <h1>Welcome to my Midterm</h1>
            <div className="button-group">
                <Button onClick={fetchData}>Fetch Stuff!</Button>
                <Button onClick={clearData}>Clear</Button>
            </div>
        </header>
    );
}