import React, { useState, useEffect } from 'react';
import Favorites from './Steps/Favorites';
import Identity from './Steps/Identity';
import Summary from './Steps/Summary';
import Details from './Steps/Details';
import './Survey.css';

const surveyFields = {
  'name': '',
  'email': '',
  'age': '',
  'gender': '',
  'fav_book': '',
  'fav_colors': {},
}

const favColorsArr = new Set();

const Survey = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [step, setStep] = useState(1);
  const [fieldsValue, setFieldsValue] = useState(surveyFields);
  const [showError, setShowError] = useState(false);
  const { age, gender, fav_book, fav_colors } = fieldsValue;

  useEffect(() =>{
    setTimeout(() =>{
      setShowSurvey(true)
    }, 2000)
  }, [])

  const checkValuesByStep = (step) => {

    switch (step) {
      case 2: 
        age !== '' && gender !== '' ? nextStep() : setShowError(true)
        break;
      case 3: 
        fav_book !== '' && fav_colors.size > 0 ? nextStep() : setShowError(true)
        break;
      default: 
        nextStep()
    }
  }

  const updateFieldValue = (key) => e => {
    if(key === 'fav_colors') {
      e.target.checked ? favColorsArr.add(e.target.name) : favColorsArr.delete(e.target.name);
      setFieldsValue(prevState => ({ ...prevState, [key]: favColorsArr}))
    } else {
      setFieldsValue(prevState => ({ ...prevState, [key]: e.target.value}))
    }
  }

  const renderStep = (step) => {

    switch (step) {
      case 2: 
        return <Details onFieldChange={updateFieldValue} fieldsValues={fieldsValue} />
      case 3: 
        return <Favorites onFieldChange={updateFieldValue} fieldsValues={fieldsValue} />
      case 4: 
        return <Summary content={fieldsValue} />
      default: 
        return <Identity onFieldChange={updateFieldValue} fieldsValues={fieldsValue} />
    }
  }

  const nextStep = () => {
    setShowError(false)
    setStep(step+1)
  }

  const submitSurvey = () => {
      setShowSurvey(false)
  }
  
  return (
    <div className={`survey-overlay ${showSurvey ? "show" : "hide"}`}>
      <div className="survey">
      <header><h1>Yieldstreet Survey</h1></header>
      {showError && <span className="error">All fields are required</span>}
      {renderStep(step)}
      <footer>
        {step > 1 && step < 4 && <button type="button" className="btn btn-secondary" onClick={() => setStep(step-1)}>Back</button>}
        {step < 4 && <button type="button" className="btn" onClick={() => checkValuesByStep(step)}>Next</button>}
        {step === 4 && <button type="submit" className="btn" onClick={() => submitSurvey()}>Submit</button>}
      </footer>
    </div>
    </div>
  );
}

export default Survey;