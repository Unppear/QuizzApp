import '../Quizz - 01/css/quizz.css';
import '../Quizz - 01/Stepper css/Stepper.css';
import Aside from '../Quizz - 01/Aside/Aside';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Quizz06() {
    const steps = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const [currentStep, setCurrentStep] = useState(1);
    let [questionActual, setQuestionActual] = useState(0);
    let [questionNext, setQuestionNext] = useState(1);
    let [questionPrev_actual, setquestionPrev_actual] = useState(1);
    let [questionPrev, setquestionPrev] = useState(0);
    const [complete, setComplete] = useState(false);
    
    function start() {
        let quizzMain = document.querySelectorAll('section.quizz_change');
        let frontQuizz = document.getElementById('quizzFront');

        frontQuizz.classList.add('animate-out');
        
        setTimeout(() => {
            frontQuizz.classList.remove('animate-out');
            frontQuizz.classList.remove('isShowing');
            quizzMain[0].classList.add('animate-in');
        }, 600)

        setTimeout(() => {
            quizzMain[0].classList.remove('animate-in');
            quizzMain[0].classList.add('isShowing');
        }, 1200)
    }
    function remake() {
        let quizzEnd = document.querySelector('section.end_quizz');
        let frontQuizz = document.getElementById('quizzFront');
        let option = document.getElementsByName('option')

        quizzEnd.classList.add('remake-in');

        setTimeout(() => {
            quizzEnd.classList.remove('isShowing');
            quizzEnd.classList.remove('remake-in');
            frontQuizz.classList.add('isShowing');
            frontQuizz.classList.add('remake-out');
        }, 1500);
        
        setInterval(() => {
            frontQuizz.classList.remove('remake-out');
        }, 3500)
        
        setQuestionActual(0);
        setQuestionNext(1);
        setquestionPrev_actual(1);
        setquestionPrev(0);
        setCurrentStep(1);
        
        for(let i = 0; i < option.length; i++) {
            option[i].checked = false;
        }
    }
    function next() {
        let quizzMain = document.querySelectorAll('section.quizz_change');

        quizzMain[questionActual].classList.add('animate-out');

        setTimeout(() => {
            quizzMain[questionActual].classList.remove('animate-out');
            quizzMain[questionActual].classList.remove('isShowing');
            quizzMain[questionNext].classList.add('animate-in');
        }, 600)

        setTimeout(() => {
            quizzMain[questionNext].classList.remove('animate-in');
            quizzMain[questionNext].classList.add('isShowing');
        }, 1200)    
    }

    function beforeStep() {
        let testAnima = document.querySelectorAll('section.testAnima');

        testAnima[questionPrev_actual].classList.add('animate-in-out');

        setTimeout(() => {
            testAnima[questionPrev_actual].classList.remove('isShowing');
            testAnima[questionPrev_actual].classList.remove('animate-in-out');
            testAnima[questionPrev].classList.add('animate-out-in');
        }, 600)

        setTimeout(() => {
            testAnima[questionPrev].classList.remove('animate-out-in');
            testAnima[questionPrev].classList.add('isShowing');
        }, 1200)
    }

    return (
        <div className='Quizz01'>
            <Aside />
            <main className='quizz_frontMain'>
                    <section id='quizzFront' className='quizz_frontContent isShowing testAnima'>
                        <div className='quizzTitle_cont'>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className='title_cont'>
                                <h2>Titulo do Quizz 6</h2>
                            </div>
                        </div>
                        <div className='quizzContentDetails_cont'>
                            <div className='quizzDescription_cont'>
                                <p>
                                    Descrição do quizz descrição do quizz descrição do quizz
                                    descrição do quizz descrição do quizz descrição do quizz
                                    descrição do quizz descrição do quizz descrição do quizz
                                    descrição do quizz descrição do quizz descrição do quizz
                                    descrição do quizz descrição do quizz descrição do quizz
                                    descrição do quizz descrição do quizz descrição do quizz
                                    descrição do quizz descrição do quizz descrição do quizz
                                </p>
                            </div>
                            <div className='quizzBtnStart_cont'>
                                <button id='btnStart' className='quizzBtn_start' onClick={start} type='button'>começar o quizz</button>
                            </div>
                        </div>
                    </section>
                    <section className='quizz_mainContent quizz_change testAnima'>
                        <div className='quizz_mainContent_title'>
                            <div className='stepBar_cont'>
                                {steps?.map((step, i) => (
                                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                                        <div className="stepBar"></div>
                                        <div className="stepBar_complete"></div>
                                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                                    </div>    
                                ))}
                            </div>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className='ask_cont'>
                                <h2>Pergunta do Quizz 1</h2>
                            </div>
                        </div>
                        <div className='quizz_mainContent_options'>
                            <form>
                                <div className='input_content'>
                                    <input type="radio" id='option1' name='option' />
                                    <label htmlFor='option1'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 1</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option2' name='option' />
                                    <label htmlFor='option2'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 2</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option3' name='option' />
                                    <label htmlFor='option3'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 3</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option4' name='option' />
                                    <label htmlFor='option4'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 4</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option5' name='option' />
                                    <label htmlFor='option5'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 5</span>
                                </div>
                            </form>
                        </div>
                        <div className='quizz_mainContent_button'>
                            {
                                !complete && <button id='progress_prev' className='btn_prev' onClick={() => {
                                    beforeStep();
                                }}>Voltar</button>
                            }
                            {
                                !complete && <button className="btn_next" id='btn_next1' onClick={() => {
                                    currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                                    next();
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext + 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev + 1; 
                                        })
                                    }, 600);
                                }}>Próximo</button>
                            }
                        </div>
                    </section>
                    <section className='quizz_mainContent quizz_change testAnima'>
                        <div className='quizz_mainContent_title'>
                            <div className='stepBar_cont'>
                                {steps?.map((step, i) => (
                                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                                        <div className="stepBar"></div>
                                        <div className="stepBar_complete"></div>
                                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                                    </div>    
                                ))}
                            </div>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className="ask_cont">
                                <h2>Pergunta do Quizz 2</h2>
                            </div>
                        </div>
                        <div className='quizz_mainContent_options'>
                            <form>
                                <div className='input_content'>
                                    <input type="radio" id='option6' name='option' />
                                    <label htmlFor='option6'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 1</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option7' name='option' />
                                    <label htmlFor='option7'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 2</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option8' name='option' />
                                    <label htmlFor='option8'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 3</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option9' name='option' />
                                    <label htmlFor='option9'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 4</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option10' name='option' />
                                    <label htmlFor='option10'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 5</span>
                                </div>
                            </form>
                        </div>
                        <div className='quizz_mainContent_button'>
                            {
                                !complete && <button id='progress_prev' className='btn_prev' onClick={() => {
                                    setCurrentStep((prev) => prev - 1);
                                    beforeStep();
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev - 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext - 1; 
                                        })
                                    }, 600);
                                }}>Voltar</button>
                            }
                            {
                                !complete && <button id='btn_next2' className="btn_next" onClick={() => {
                                    currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                                    next();
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext + 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev + 1; 
                                        })
                                    }, 600);
                                }}>Próximo</button>
                            }
                        </div>
                    </section>
                    <section className='quizz_mainContent quizz_change testAnima'>
                        <div className='quizz_mainContent_title'>
                            <div className='stepBar_cont'>
                                {steps?.map((step, i) => (
                                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                                        <div className="stepBar"></div>
                                        <div className="stepBar_complete"></div>
                                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                                    </div>    
                                ))}
                            </div>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className="ask_cont">
                                <h2>Pergunta do Quizz 3</h2>
                            </div>
                        </div>
                        <div className='quizz_mainContent_options'>
                            <form>
                                <div className='input_content'>
                                    <input type="radio" id='option11' name='option' />
                                    <label htmlFor='option11'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 1</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option12' name='option' />
                                    <label htmlFor='option12'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 2</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option13' name='option' />
                                    <label htmlFor='option13'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 3</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option14' name='option' />
                                    <label htmlFor='option14'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 4</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option15' name='option' />
                                    <label htmlFor='option15'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 5</span>
                                </div>
                            </form>
                        </div>
                        <div className='quizz_mainContent_button'>
                            {
                                !complete && <button id='progress_prev' className='btn_prev' onClick={() => {
                                    setCurrentStep((prev) => prev - 1);
                                    beforeStep();
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev - 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext - 1; 
                                        })
                                    }, 600);
                                }}>Voltar</button>
                            }
                            {
                                !complete && <button id='btn_next3' className="btn_next" onClick={() => {
                                    currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                                    next();
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext + 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev + 1; 
                                        })
                                    }, 600);
                                }}>Próximo</button>
                            }
                        </div>
                    </section>
                    <section className='quizz_mainContent quizz_change testAnima'>
                        <div className='quizz_mainContent_title'>
                            <div className='stepBar_cont'>
                                {steps?.map((step, i) => (
                                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                                        <div className="stepBar"></div>
                                        <div className="stepBar_complete"></div>
                                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                                    </div>    
                                ))}
                            </div>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className="ask_cont">
                                <h2>Pergunta do Quizz 4</h2>
                            </div>
                        </div>
                        <div className='quizz_mainContent_options'>
                            <form>
                                <div className='input_content'>
                                    <input type="radio" id='option16' name='option' />
                                    <label htmlFor='option16'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 1</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option17' name='option' />
                                    <label htmlFor='option17'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 2</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option18' name='option' />
                                    <label htmlFor='option18'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 3</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option19' name='option' />
                                    <label htmlFor='option19'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 4</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option20' name='option' />
                                    <label htmlFor='option20'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 5</span>
                                </div>
                            </form>
                        </div>
                        <div className='quizz_mainContent_button'>
                            {
                                !complete && <button id='progress_prev' className='btn_prev' onClick={() => {
                                    setCurrentStep((prev) => prev - 1);
                                    beforeStep();
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev - 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext - 1; 
                                        })
                                    }, 600);
                                }}>Voltar</button>
                            }
                            {
                                !complete && <button id='btn_next4' className="btn_next" onClick={() => {
                                    currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                                    next();
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext + 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev + 1; 
                                        })
                                    }, 600);
                                }}>Próximo</button>
                            }
                        </div>
                    </section>
                    <section className='quizz_mainContent quizz_change testAnima'>
                        <div className='quizz_mainContent_title'>
                            <div className='stepBar_cont'>
                                {steps?.map((step, i) => (
                                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                                        <div className="stepBar"></div>
                                        <div className="stepBar_complete"></div>
                                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                                    </div>    
                                ))}
                            </div>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className="ask_cont">
                                <h2>Pergunta do Quizz 5</h2>
                            </div>
                        </div>
                        <div className='quizz_mainContent_options'>
                            <form>
                                <div className='input_content'>
                                    <input type="radio" id='option21' name='option' />
                                    <label htmlFor='option21'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 1</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option22' name='option' />
                                    <label htmlFor='option22'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 2</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option23' name='option' />
                                    <label htmlFor='option23'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 3</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option24' name='option' />
                                    <label htmlFor='option24'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 4</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option25' name='option' />
                                    <label htmlFor='option25'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 5</span>
                                </div>
                            </form>
                        </div>
                        <div className='quizz_mainContent_button'>
                            {
                                !complete && <button id='progress_prev' className='btn_prev' onClick={() => {
                                    setCurrentStep((prev) => prev - 1);
                                    beforeStep();
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev - 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext - 1; 
                                        })
                                    }, 600);
                                }}>Voltar</button>
                            }
                            {
                                !complete && <button id='btn_next5' className="btn_next" onClick={() => {
                                    currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                                    next();
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext + 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev + 1; 
                                        })
                                    }, 600);
                                }}>Próximo</button>
                            }
                        </div>
                    </section>
                    <section className='quizz_mainContent quizz_change testAnima'>
                        <div className='quizz_mainContent_title'>
                            <div className='stepBar_cont'>
                                {steps?.map((step, i) => (
                                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                                        <div className="stepBar"></div>
                                        <div className="stepBar_complete"></div>
                                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                                    </div>    
                                ))}
                            </div>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className="ask_cont">
                                <h2>Pergunta do Quizz 6</h2>
                            </div>
                        </div>
                        <div className='quizz_mainContent_options'>
                            <form>
                                <div className='input_content'>
                                    <input type="radio" id='option26' name='option' />
                                    <label htmlFor='option26'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 1</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option27' name='option' />
                                    <label htmlFor='option27'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 2</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option28' name='option' />
                                    <label htmlFor='option28'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 3</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option29' name='option' />
                                    <label htmlFor='option29'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 4</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option30' name='option' />
                                    <label htmlFor='option30'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 5</span>
                                </div>
                            </form>
                        </div>
                        <div className='quizz_mainContent_button'>
                            {
                                !complete && <button id='progress_prev' className='btn_prev' onClick={() => {
                                    setCurrentStep((prev) => prev - 1);
                                    beforeStep();
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev - 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext - 1; 
                                        })
                                    }, 600);
                                }}>Voltar</button>
                            }
                            {
                                !complete && <button id='btn_next6' className="btn_next" onClick={() => {
                                    currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                                    next();
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext + 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev + 1; 
                                        })
                                    }, 600);
                                }}>Próximo</button>
                            }
                        </div>
                    </section>
                    <section className='quizz_mainContent quizz_change testAnima'>
                        <div className='quizz_mainContent_title'>
                            <div className='stepBar_cont'>
                                {steps?.map((step, i) => (
                                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                                        <div className="stepBar"></div>
                                        <div className="stepBar_complete"></div>
                                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                                    </div>    
                                ))}
                            </div>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className="ask_cont">
                                <h2>Pergunta do Quizz 7</h2>
                            </div>
                        </div>
                        <div className='quizz_mainContent_options'>
                            <form>
                                <div className='input_content'>
                                    <input type="radio" id='option31' name='option' />
                                    <label htmlFor='option31'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 1</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option32' name='option' />
                                    <label htmlFor='option32'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 2</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option33' name='option' />
                                    <label htmlFor='option33'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 3</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option34' name='option' />
                                    <label htmlFor='option34'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 4</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option35' name='option' />
                                    <label htmlFor='option35'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 5</span>
                                </div>
                            </form>
                        </div>
                        <div className='quizz_mainContent_button'>
                            {
                                !complete && <button id='progress_prev' className='btn_prev' onClick={() => {
                                    setCurrentStep((prev) => prev - 1);
                                    beforeStep();
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev - 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext - 1; 
                                        })
                                    }, 600);
                                }}>Voltar</button>
                            }
                            {
                                !complete && <button id='btn_next7' className="btn_next" onClick={() => {
                                    currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                                    next();
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext + 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev + 1; 
                                        })
                                    }, 600);
                                }}>Próximo</button>
                            }
                        </div>
                    </section>
                    <section className='quizz_mainContent quizz_change testAnima'>
                        <div className='quizz_mainContent_title'>
                            <div className='stepBar_cont'>
                                {steps?.map((step, i) => (
                                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                                        <div className="stepBar"></div>
                                        <div className="stepBar_complete"></div>
                                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                                    </div>    
                                ))}
                            </div>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className="ask_cont">
                                <h2>Pergunta do Quizz 8</h2>
                            </div>
                        </div>
                        <div className='quizz_mainContent_options'>
                            <form>
                                <div className='input_content'>
                                    <input type="radio" id='option36' name='option' />
                                    <label htmlFor='option36'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 1</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option37' name='option' />
                                    <label htmlFor='option37'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 2</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option38' name='option' />
                                    <label htmlFor='option38'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 3</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option39' name='option' />
                                    <label htmlFor='option39'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 4</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option40' name='option' />
                                    <label htmlFor='option40'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 5</span>
                                </div>
                            </form>
                        </div>
                        <div className='quizz_mainContent_button'>
                            {
                                !complete && <button id='progress_prev' className='btn_prev' onClick={() => {
                                    setCurrentStep((prev) => prev - 1);
                                    beforeStep();
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev - 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext - 1; 
                                        })
                                    }, 600);
                                }}>Voltar</button>
                            }
                            {
                                !complete && <button id='btn_next8' className="btn_next" onClick={() => {
                                    currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                                    next();
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext + 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev + 1; 
                                        })
                                    }, 600)
                                }}>Próximo</button>
                            }
                        </div>
                    </section>
                    <section className='quizz_mainContent quizz_change testAnima'>
                        <div className='quizz_mainContent_title'>
                            <div className='stepBar_cont'>
                                {steps?.map((step, i) => (
                                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                                        <div className="stepBar"></div>
                                        <div className="stepBar_complete"></div>
                                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                                    </div>    
                                ))}
                            </div>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className="ask_cont">
                                <h2>Pergunta do Quizz 9</h2>
                            </div>
                        </div>
                        <div className='quizz_mainContent_options'>
                            <form>
                                <div className='input_content'>
                                    <input type="radio" id='option41' name='option' />
                                    <label htmlFor='option41'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 1</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option42' name='option' />
                                    <label htmlFor='option42'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 2</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option43' name='option' />
                                    <label htmlFor='option43'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 3</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option44' name='option' />
                                    <label htmlFor='option44'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 4</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option45' name='option' />
                                    <label htmlFor='option45'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 5</span>
                                </div>
                            </form>
                        </div>
                        <div className='quizz_mainContent_button'>
                            {
                                !complete && <button id='progress_prev' className='btn_prev' onClick={() => {
                                    setCurrentStep((prev) => prev - 1);
                                    beforeStep();
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev - 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext - 1; 
                                        })
                                    }, 600);
                                }}>Voltar</button>
                            }
                            {
                                !complete && <button id='btn_next9' className="btn_next" onClick={() => {
                                    currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                                    next();
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext + 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev + 1; 
                                        })
                                    }, 600);
                                }}>Próximo</button>
                            }
                        </div>
                    </section>
                    <section className='quizz_mainContent quizz_change testAnima'>
                        <div className='quizz_mainContent_title'>
                            <div className='stepBar_cont'>
                                {steps?.map((step, i) => (
                                    <div key={i} className={`step_item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}>
                                        <div className="stepBar"></div>
                                        <div className="stepBar_complete"></div>
                                        <div className="step">{(i + 1 < currentStep || complete) ? <FontAwesomeIcon icon={faCheck} className='faCheck' size="lg" /> : i + 1}</div>
                                    </div>    
                                ))}
                            </div>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <div className="ask_cont">
                                <h2>Pergunta do Quizz 10</h2>
                            </div>
                        </div>
                        <div className='quizz_mainContent_options'>
                            <form>
                                <div className='input_content'>
                                    <input type="radio" id='option46' name='option' />
                                    <label htmlFor='option46'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 1</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option47' name='option' />
                                    <label htmlFor='option47'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 2</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option48' name='option' />
                                    <label htmlFor='option48'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 3</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option49' name='option' />
                                    <label htmlFor='option49'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 4</span>
                                </div>
                                <div className='input_content'>
                                    <input type="radio" id='option50' name='option' />
                                    <label htmlFor='option50'><FontAwesomeIcon icon={faCheck} className='faCheck' /></label>
                                    <span>Opção 5</span>
                                </div>
                            </form>
                        </div>
                        <div className='quizz_mainContent_button'>
                            {
                                !complete && <button id='progress_prev' className='btn_prev' onClick={() => {
                                    setCurrentStep((prev) => prev - 1);
                                    beforeStep();
                                    setTimeout(() => {
                                        setquestionPrev_actual(() => {
                                            return questionPrev_actual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setquestionPrev(() => {
                                            return questionPrev - 1; 
                                        })
                                    }, 600);
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual - 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext - 1; 
                                        })
                                    }, 600);
                                }}>Voltar</button>
                            }
                            {
                                !complete && <button className="btn_next" onClick={() => {
                                    currentStep === steps.length ? setComplete(false) : setCurrentStep((prev) => prev + 1);
                                    next();
                                    setTimeout(() => {
                                        setQuestionActual(() => {
                                            return questionActual + 1; 
                                        })
                                    }, 500);
                                    setTimeout(() => {
                                        setQuestionNext(() => {
                                            return questionNext + 1; 
                                        })
                                    }, 600);
                                }}>{currentStep === steps.length ? 'Enviar' : 'Próximo'}</button>
                            }
                        </div>
                    </section>
                    <section className="end_quizz quizz_change testAnima">
                        <div className="header">
                            <img src="https://images8.alphacoders.com/479/479393.jpg" alt="imagem do quizz" />
                            <div className="title">
                                <h2>Resultado do Quizz</h2>
                            </div>
                        </div>
                        <div className="desc_cont">
                            <p>
                                descrição do resultado descrição do resultado descrição do resultado descrição do resultado descrição do resultado
                                descrição do resultado descrição do resultado descrição do resultado descrição do resultado descrição do resultado
                                descrição do resultado descrição do resultado descrição do resultado descrição do resultado descrição do resultado
                                descrição do resultado descrição do resultado descrição do resultado descrição do resultado descrição do resultado
                                descrição do resultado descrição do resultado descrição do resultado descrição do resultado descrição do resultado
                            </p>
                        </div>
                        <div className="actions">
                            <button type='button' onClick={remake} className='btn_return'><FontAwesomeIcon icon={faArrowRotateRight} rotation={270} spin size="xl" className='faRotate' /><p>Refazer</p></button>
                            <div className="animation_rate"></div>
                            <a className='btn_go' href='/Home'>Voltar</a>
                        </div>
                    </section>
            </main>
            <Aside />
        </div>
    )
}

export default Quizz06;