import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillFormatPainter, AiOutlineRise } from 'react-icons/ai'
import { Button } from "@web3uikit/core";

function Upload() {
    const nav = useNavigate()
    return (
      <Button size="large" onClick={() => nav('/upload')} theme="primary" className="tag upload" text="upload"/>
    )
  }
  
  function Mission() {
    const nav = useNavigate()
    return (
      <Button size="large" onClick={() => nav('/mission')} className="tag" theme="primary" text="Our Mission"/>
    )
  }
  
  function TagBar() {
    return (
      <div className="tags" style={{
        display: "flex",
        justifyContent: "space-evenly"
      }}>
            <Button size="large" theme="primary" className="tag" text="trending">
                <AiOutlineRise /> 
            </Button>
            <Button size="large" theme="primary" className="tag" text="ethereum">
                <AiFillFormatPainter /> 
            </Button>
            <Upload/>
            <Mission/>
      </div>
    )
  }

function Navbar() {
    return(
        <div>
            <TagBar/>
        </div>
    )
}

export default Navbar