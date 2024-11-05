import React from 'react';
import Loading from '../atoms/Loading';
import EmptyState from '../atoms/EmptyState';

export default function DataDisplay({ loading, data }) {
    if (loading) return <Loading />;

    if (data && data.length > 0) {
        return (
            <section className="data-display">
                {data.map((entry, i) => (
                    <article key={i} className="data-item">
                        <img src={entry.image} alt={entry.name} className="data-image" />
                        <div className="text">
                            <h3 className="data-title">{entry.name}</h3>
                            <p><span className="data-explanation">Alternate Names:</span> {entry.alternate_names.join(", ")}</p>
                            <p><span className="data-explanation">Patronus:</span> {entry.patronus}</p>
                            <p><span className="data-explanation">House:</span> {entry.house}</p>
                        </div>
                    </article>
                ))}
            </section>
        );
    }

    return <EmptyState />;
}


// import React from 'react';
// import Loading from '../atoms/Loading';
// import EmptyState from '../atoms/EmptyState';

// export default function DataDisplay({ loading, data }) {
//     if (loading) return <Loading />;

//     if (data) {
//         return (
//             <section className="data-display">
//                 {data.map((entry, i) => (
//                     <article key={i} className="data-item">
//                         <img src={entry.url} alt={entry.name} className="data-image" />
//                         <div  className="text">
//                             <h3 className="data-title">{entry.name}</h3>
//                             <p className="data-explanation">{entry.population}</p>
//                         </div>

//                     </article>
//                 ))}
//             </section>
//         );
//     }

//     return <EmptyState />;
// }