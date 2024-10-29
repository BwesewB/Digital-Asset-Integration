//TODO
// - add button
// - function to fetch data
// - function to add data to state
// - responsiveness
// - display the data
// - function to clear data
// - component for empty state
// - component for data state
// - error handling (Bonus)


"use client";
import React, { useState } from 'react';
import Header from '../../components/molecules/Header';
import DataDisplay from '../../components/organisms/DataDisplay';
import './styles.css';

export default function Home() {
    const DATA_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=6";

    const [astronomyData, setAstronomyData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchAstronomyData() {
        try {
            setLoading(true);
            const response = await fetch(DATA_URL);
            const data = await response.json();
            setAstronomyData(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }

    function clearAstronomyData() {
        setAstronomyData(null);
    }

    return (
        <div className="home-container">
            <Header fetchData={fetchAstronomyData} clearData={clearAstronomyData} />
            <DataDisplay loading={loading} data={astronomyData} />
        </div>
    );
}



// import { useState } from "react";

// export default function Home() {

//   //https://api.waifu.pics
//   const DATA_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";

//   // if useState !null, probaby fetching or loading data or has data
//   // if useState === data, we can display our data
//   const [astronomyData, setAstronomyData] = useState(null); 
//   const [loading, setLoading] = useState(null);

//   async function fetchAstronomyData(){
//     try {
//       setLoading(true)
//       const response = await fetch(DATA_URL);
//       //waiting for the data to come back
//       console.log(response);
//       const data = await response.json(); 
//       //wait a while when the data comes back
//       console.log(data)
//       setAstronomyData(data);
//       //store the data as ^^
//       setLoading(false)
//       //no longer loading
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
// }

// const DisplayData = () => {
//   // display if we have data
//   // loading state (maybe data?)
//   // fufilled state (data exists)
//   // wipe it to an empty state

//   if (loading) return <div>Loading!</div>;

//   if (astronomyData) {
//     const formatData = [];
//     //grab something out of the array (key), iterate through.
//     astronomyData.forEach((entry, i)=>{
//       formatData.push(
//         <article key={i}
//           style={{
//             // border: "1px solid red",
//             display:"flex",
//             marginBottom:"6rem"
//           }}
//         >
//           <img 
//             src={entry.url}
//             style={{
//               width:"50%"
//             }}
//           />
//           <h3>{entry.title}</h3>
//         </article>
//       );
//     });

//     return <section>{formatData}</section>;
//   }

//   return <div>No data yet, click the button</div>;
// };

//   const Header = () => {
//     //build the UI that grabs the data
//     return(
//       <header
//         style={{
//           gap:"3rem",
//           display:"flex",
//           flexDirection:"column",
//           marginTop:"3rem",
//           marginBottom:"3rem"
//         }}
//       >
//         Welcome to my Midterm
//         <div>
//           <button 
//             onClick={fetchAstronomyData}
//             style={{
//               border: "1px solid white",
//               padding: "0.5rem"
//             }}
//           >Fetch Stuff! 
//           </button>
//           <button
//             onClick={""}
//             style={{
//               border: "1px solid white",
//               padding: "0.5rem"
//             }}
//           >
//             Clear
//           </button>
//         </div>

//       </header>
//     )
//   }


//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       width:"100%",
//       height:"100%",
//       border:"1px solid red",
//       display:"flex",
//       flexDirection:"column",
//     }}>
//       <Header />
//       <DisplayData/>
//     </div>
//   );
// }
