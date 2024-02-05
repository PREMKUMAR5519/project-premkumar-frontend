import React from "react";
import ReactLoading from "react-loading";

 
export default function Loading() {
    return (
        <div>
            <h2><ReactLoading type="bars" color="rgb(127, 205, 177)"
                height={100} width={50} /></h2>
        </div>
    );
}