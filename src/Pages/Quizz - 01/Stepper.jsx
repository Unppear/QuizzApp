import React from "react";
import { useState } from "react";
import './Stepper css/Stepper.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Stepper() {
    const steps = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    return (
        <>
            <div className="flex_cont">
                {steps?.map((step, i) => (
                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                        <div className="stepBar"></div>
                        <div className="stepBar_complete"></div>
                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                    </div>    
                ))}
            </div>
            {
                !complete && <button className="btn_next" onClick={() => {
                currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                }}>{currentStep === steps.length ? 'Finish' : 'Next'}</button>
            }
            
        </>
    )
}

export default Stepper;