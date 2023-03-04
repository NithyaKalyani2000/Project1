import * as React from 'react';
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";

const PageOne = () => {
    const History = useHistory()
    const storedData = JSON.parse(localStorage.getItem('Mobile Numbers'));
    var orderList = storedData.reverse()

    return (
        <div style={{ flexDirection: 'column', display: "flex", margin: "10px" }}>
            <div style={{ marginRight: 0, marginLeft: "auto" }}>
                <Button variant="contained" onClick={() => History.push('/')}>Go to Home</Button>
            </div>
            <div>
                <p style={{ fontSize: 26, fontWeight: "bold" }}>Mobile Numbers List</p>
            </div>
            {
                orderList.map((el, i) => {
                    return (
                        <div style={{ padding: "10px" }}>
                            <Button variant="outlined" style={{ width: "190px" }} key={i}>
                                {el}
                            </Button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PageOne;