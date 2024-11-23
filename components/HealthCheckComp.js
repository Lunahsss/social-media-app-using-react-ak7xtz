// src/components/HealthCheckComp.js
import React, { useState } from "react";
import { Button } from "react-materialize";
import { classifyHRV, checkHeartRate, checkOxygen, checkBodyTemperature } from "../utils/healthChecks";

export default function HealthCheckComp() {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [isWellTrained, setIsWellTrained] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [hrv, setHrv] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [oxygen, setOxygen] = useState(0);
  const [temperature, setTemperature] = useState(0);

  const performHealthChecks = () => {
    console.log(classifyHRV(age, gender, hrv));
    console.log(checkHeartRate(age, heartRate, isWellTrained, isActive));
    console.log(checkOxygen(oxygen));
    console.log(checkBodyTemperature(temperature));
  };

  return (
    <div className="healthChecks">
      <input type="number" placeholder="Age" value={age} onChange={event => setAge(parseInt(event.target.value))} />
      <input type="text" placeholder="Gender" value={gender} onChange={event => setGender(event.target.value)} />
      <input type="checkbox" checked={isWellTrained} onChange={event => setIsWellTrained(event.target.checked)} />
      Well-trained
      <input type="checkbox" checked={isActive} onChange={event => setIsActive(event.target.checked)} />
      Active
      <input type="number" placeholder="HRV" value={hrv} onChange={event => setHrv(parseInt(event.target.value))} />
      <input type="number" placeholder="Heart Rate" value={heartRate} onChange={event => setHeartRate(parseInt(event.target.value))} />
      <input type="number" placeholder="Oxygen Level" value={oxygen} onChange={event => setOxygen(parseFloat(event.target.value))} />
      <input type="number" placeholder="Temperature (F)" value={temperature} onChange={event => setTemperature(parseFloat(event.target.value))} />
      <Button
        small
        waves="light"
        style={{ background: "royalblue" }}
        onClick={performHealthChecks}
      >
        Check Health
      </Button>
    </div>
  );
}
