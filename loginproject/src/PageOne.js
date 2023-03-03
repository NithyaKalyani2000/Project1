import * as React from 'react';


const PageOne = () => {
    const storedData = localStorage.getItem('Mobile Numbers');
    console.log(storedData, "numberlist")
    return (
        <div>
            hello world
        </div>
    )
}

export default PageOne;