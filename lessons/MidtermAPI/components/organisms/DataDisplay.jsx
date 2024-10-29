import React from 'react';
import Loading from '../atoms/Loading';
import EmptyState from '../atoms/EmptyState';

export default function DataDisplay({ loading, data }) {
    if (loading) return <Loading />;

    if (data) {
        return (
            <section className="data-display">
                {data.map((entry, i) => (
                    <article key={i} className="data-item">
                        <img src={entry.url} alt={entry.title} className="data-image" />
                        <h3 className="data-title">{entry.title}</h3>
                    </article>
                ))}
            </section>
        );
    }

    return <EmptyState />;
}