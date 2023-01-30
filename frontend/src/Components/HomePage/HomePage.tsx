import {  Box, Button, Modal, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";

import React from "react";


function HomePage(): JSX.Element {
    const[flights, setFlights]=useState<any[]>([]);
    console.log(flights)
    // let detailsArray: myDetails[]=[];

 
    useEffect(()=>{
        axios.get("https://api.spacexdata.com/v3/launches")
        .then(res=>{
            setFlights(res.data)
            console.log(res.data[0].flight_number);

        })
        // flights.map(item=>{
        //     detailsArray.push(makeObject(item))
        // })
    },[]);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'rgba(255,255,255)',
        border: '2px solid #000',
        // boxShadow: 24,
        p: 4,
      };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="HomePage">
            {/* <div>{modalUp()}</div> */}
            <div className="displayCard">
                <div className="card">
                {flights.map((item)=>
                    <div className="card-container" key={item.flight_number} style={{ height: 360, width:250 }}>
                        <p ><label className="dest">mission name:</label> <span style={{fontSize: 10}}>{item.mission_name}</span></p>
                        <p><label className="dest">flight number:</label> {item.flight_number}</p>             
                        <img className="image" src={item.mission_patch_small} style={{height:150}}/><br/>
                        <label className="dest">launch date:</label>
                        <p className="special">{new Date(item.launch_date_local).getDate()}/{new Date(item.launch_date_local).toISOString().slice(5,7)}/{new Date(item.launch_date_local).toISOString().slice(0,4)}<p className="special">{new Date(item.launch_date_local).toISOString().slice(11,19)}</p> </p>
                        <div>
                        <Button onClick={handleOpen}>More Details</Button>
 
                        
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Details
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                <div>
                                   <p><label className="dest">flight number</label> {item.flight_number}</p>
                                   <p><label className="dest">mission name</label> {item.mission_name}</p>
                                   <p><label className="dest">launch year</label> {item.launch_year}</p>
                                   <p><label className="dest">rocket id</label> {item.rocket.rocket_id}</p>
                                   <p><label className="dest">rocket name</label> {item.rocket.rocket_name}</p>
                                   <p><label className="dest">rocket type</label> {item.rocket.rocket_type}</p>
                                   {/* <p><label className="dest">nationality</label> {item.nationality}</p> */}
                                   <p><label className="dest">launch site</label> {item.launch_site.site_name}</p> 
                                   <p><label className="dest">article link</label> <a style={{fontSize:10}} href={item.links.article_link}>{item.links.article_link}</a></p> 
                                   <p><label className="dest">video link</label><a style={{fontSize:10}} href={item.links.video_link}>{item.links.video_link}</a></p>
                               </div>                                
                               </Typography>
                            </Box>
                        </Modal>

                        </div>



                    </div>
                    )}
                </div>
            </div>


        </div>

    );
}

export default HomePage;
