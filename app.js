import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => 
{
    return (
        <h1>
            React is happening
        </h1>
    )
}
const temp = <h2>hello </h2>

const HeadingComponent = ()=>
{
    return  (<div id ="container">
       <Title/>
       {Title()} 
       {temp}
    <h1 className ="heading">
        hi this the H1 
    </h1>

</div>);
    
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);


