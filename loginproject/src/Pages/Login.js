import * as React from 'react';
import { TextField } from "@mui/material";
import { Card } from '@mui/material';
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import toast from 'react-simple-toasts';
import '../App.css'

const Reg_Mobilenumber = /^[6-9]{1}[0-9]{9}$/;
const Reg_OTP = /(^\d{4}$)/;

const Login = () => {

    // Declarations
    var storedData = JSON.parse(localStorage.getItem('Mobile Numbers'));
    if (storedData === [] || storedData === "" || storedData === null) {
        localStorage.setItem('Mobile Numbers', JSON.stringify([]))
    }

    const History = useHistory()
    const [Mobnum, setMobnum] = React.useState("");
    const [OTP, setOTP] = React.useState("");
    const [error, setError] = React.useState("");
    const [isValid, setIsValid] = React.useState(false);
    const [OTP_four, setOTP_four] = React.useState(0);

    const log_Mobilenumber = (value) => {
        setMobnum(value)
    }

    const log_OTP = (value) => {
        setOTP(value)
    }

    // Generation of OTP
    function sendOTP() {

        var digits = '0123456789';
        let OTP_4 = '';
        for (let i = 0; i < 4; i++) {
            OTP_4 += digits[Math.floor(Math.random() * 10)];
        }
        console.log(OTP_4, "Enter this OTP")
        setOTP_four(OTP_4)
        toast(OTP_4, {
            time: 15000,
            position: 'top-right',
            clickable: true,
            clickClosable: true,
            className: 'custom-toast',
            width: '200px',
        })
        return OTP_4;
    }

    // Mobile number validation
    const Continue = () => {
        if (!Reg_Mobilenumber.test(Mobnum)) {
            setError("Enter a valid Mobile Number")
        }
        else {
            setError("")
            setIsValid(true)
            sendOTP()
        }
    }

    let list = storedData

    // submit OTP and route
    const Submit = () => {

        if (OTP === "") {
            alert("enter OTP")
        }
        else if (!Reg_OTP.test(OTP)) {
            alert("Incorrect OTP!")
        }
        else if (OTP_four === OTP) {
            list.push(Mobnum)
            localStorage.setItem("Mobile Numbers", JSON.stringify(list));
            History.push({
                pathname: "/PageOne", state: {
                    state: storedData
                }
            })
        }
    }

    return (
        <div className='gradient' style={{ height: "710px" }}>
            <div style={{ paddingTop: "30px" }}>
                <div style={{ margin: "30px", fontSize: 34, fontWeight: "bold" }}>
                    Welcome !
                </div>
                <Card style={{ width: "85%", height: "500px", justifyContent: "center", alignContent: "center", marginLeft: "auto", marginRight: "auto", paddingTop: "60px" }}>
                    {!isValid ? (
                        <div style={{ justifyContent: "center", alignContent: "center" }}>
                            <div>
                                <p style={{ fontSize: 26, fontWeight: "bold" }}> Get started </p>
                            </div>
                            <div>
                                <div>
                                    <TextField label="Enter your Mobile Number" variant="filled" type={"number"} value={Mobnum} onChange={(e) => { log_Mobilenumber(e.target.value) }} style={{ width: "300px" }} />
                                </div>
                                <div style={{ marginleft: "100px" }}>
                                    <p style={{ marginTop: "5px", color: "red", fontSize: 14, fontWeight: "bold" }}>
                                        {error !== "" ? error : null}
                                    </p>
                                </div>
                            </div>

                            <div style={{ marginTop: "50px" }}>
                                <Button variant="outlined" style={{ width: "300px" }} onClick={() => { Continue() }}>Continue</Button>
                            </div>
                            <div style={{ marginTop: "60px" }}>
                                Or continue With
                            </div>
                            <div style={{ flexDirection: 'row', display: "flex", marginTop: "30px", justifyContent: "center", gap: "20px" }}>
                                <div>
                                    <Button variant="outlined" color="success" style={{ borderRadius: 7 }}>
                                        <img src={require('../Assets/icons8-whatsapp-50.png')} width={"20px"} />
                                        <a style={{ textTransform: "capitalize", paddingLeft: "3px" }}>Whatsapp</a>
                                    </Button>
                                </div>

                                <div>
                                    <Button variant="outlined" color="info" style={{ borderRadius: 7 }}>
                                        <img src={require('../Assets/icons8-google-48.png')} width={"20px"} />
                                        <a style={{ textTransform: "capitalize", paddingLeft: "3px" }}>Google</a>
                                    </Button>
                                </div>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                                By continuing, you agree to our {' '}
                                <span style={{ color: "#0091ea", cursor: "pointer" }}>
                                    terms {' '}
                                </span>
                                and {' '}
                                <span style={{ color: "#0091ea", cursor: "pointer" }}>
                                    policies
                                </span>
                            </div>
                        </div>
                    )
                        : (
                            <div style={{ flexDirection: "column", display: 'flex' }}>
                                <div style={{ paddingLeft: "60px", marginTop: "-50px" }} onClick={() => History.push('/')}>
                                    <img style={{ float: "left" }} src={require('../Assets/icons8-back-arrow-24.png')} width="40px" height="40px" />
                                </div>
                                <div>
                                    <p style={{ fontSize: 26, fontWeight: "bold" }}> Enter OTP </p>
                                </div>
                                <div>
                                    <p style={{ fontSize: 16 }}>We have sent a one time password (OTP) to ****{Mobnum.substring(6)}</p>
                                </div>
                                <div style={{ marginTop: "45px" }}>
                                    <TextField variant="filled" type={"number"} style={{ width: "300px" }} value={OTP} onChange={(e) => { log_OTP(e.target.value) }} />
                                </div>

                                <div style={{ marginTop: "70px" }}>
                                    <Button variant="outlined" style={{ width: "300px" }} onClick={() => { Submit() }}>Submit</Button>
                                </div>
                            </div>
                        )
                    }
                </Card>
            </div>
        </div>
    )
}

export default Login