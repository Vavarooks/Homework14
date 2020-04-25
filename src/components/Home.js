import React from "react";
function Home() {
    return (<div className="container">
        <h1>Home</h1>
        <br />
        <h3>Welcome to my porfolio!</h3>
        <img src={require("../assets/me.jpg")} width="300" hight="300"></img>
    </div>
    )
}
export default Home;