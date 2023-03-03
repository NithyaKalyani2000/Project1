import * as React from 'react';
import { TextField } from "@mui/material";
import { Card } from '@mui/material';
import { Button } from '@mui/material';
import {useHistory} from "react-router-dom";

const Reg_Mobilenumber = /^[6-9]{1}[0-9]{9}$/;
const Reg_OTP = /(^\d{4}$)/;

const Login = () => {
    var storedData = JSON.parse(localStorage.getItem('Mobile Numbers'));
    if (storedData === [] || storedData === "" || storedData === null) {
        localStorage.setItem('Mobile Numbers', JSON.stringify([]))
    }

    const History = useHistory()
    const [Mobnum, setMobnum] = React.useState("");
    const [OTP, setOTP] = React.useState("");
    const [error, setError] = React.useState("");
    const [isValid, setIsValid] = React.useState(false);

    const log_Mobilenumber = (value) => {
        setMobnum(value)
    }

    const log_OTP = (value) => {
        setOTP(value)
    }

    const Continue = () => {
        console.log(Mobnum);
        if (!Reg_Mobilenumber.test(Mobnum)) {
            setError("Enter a valid Mobile Number")
        }
        else {
            setError("")
            setIsValid(true)
        }
    }
    let list = storedData
    const Submit = () => {

        if (OTP === "") {
            alert("enter OTP")
        }
        else if (!Reg_OTP.test(OTP)) {
            alert("Incorrect OTP!")
        }
        else {
            list.push(Mobnum)
            localStorage.setItem("Mobile Numbers", JSON.stringify(list));
            History.push({pathname:"/PageOne",state: {
                state:storedData
            }})
        }
    }

    return (
        <div >
            <Card style={{ width: "40%", height: "550px", alignContent: "center", marginLeft: "auto", marginRight: "auto", marginTop: "20%" }}>
                {!isValid ? (
                    <div>
                        <div style={{ marginTop: "75px" }}>
                            <TextField label="Enter your Mobile Number" variant="filled" maxLength={10} type={"number"} style={{ width: "70%" }} value={Mobnum} onChange={(e) => { log_Mobilenumber(e.target.value) }} />
                            {error !== "" ? error : null}
                        </div>

                        <div style={{ marginTop: "70px" }}>
                            <Button variant="outlined" style={{ width: "50%" }} onClick={() => { Continue() }}>Continue</Button>
                        </div>
                    </div>
                )
                    : (
                        <div>
                            <div style={{ marginTop: "75px" }}>
                                <TextField label="Enter the OTP" variant="filled" type={"number"} style={{ width: "70%" }} value={OTP} onChange={(e) => { log_OTP(e.target.value) }} />
                            </div>

                            <div style={{ marginTop: "70px" }}>
                                <Button variant="outlined" style={{ width: "50%" }} onClick={() => { Submit() }}>Submit</Button>
                            </div>
                        </div>
                    )
                }

            </Card>
        </div>
    )
}

export default Login