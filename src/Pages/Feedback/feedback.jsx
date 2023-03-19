import './Css/feedback.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';
import {useForm, ValidationError} from '@formspree/react';
import Select from 'react-select';
import Aside from '../Quizz - 01/Aside/Aside';
import Main from '../Main/Main';

function Feedback() {
    const [state, handleSubmit] = useForm('xeqwkaqp');
    if(state.succeeded) {
        return (
            <div className='send_cont'>
                <h1>Obrigado por compartilhar!</h1>
                <FontAwesomeIcon icon={faFaceLaughBeam} className='face_laugh' />
            </div>
        )
    }
    const assunto = [
        {value: 'Bugs', label: 'Bugs'},
        {value: 'Como podemos melhorar', label: 'Como podemos melhorar'},
        {value: 'Elogios', label: 'Elogios'},
    ];
    const day = [
        {value: '01', label: '01'},
        {value: '02', label: '02'},
        {value: '03', label: '03'},
        {value: '04', label: '04'},
        {value: '05', label: '05'},
        {value: '06', label: '06'},
        {value: '07', label: '07'},
        {value: '08', label: '08'},
        {value: '09', label: '09'},
        {value: '10', label: '10'},
        {value: '11', label: '11'},
        {value: '12', label: '12'},
        {value: '13', label: '13'},
        {value: '14', label: '14'},
        {value: '15', label: '15'},
        {value: '16', label: '16'},
        {value: '17', label: '17'},
        {value: '18', label: '18'},
        {value: '19', label: '19'},
        {value: '20', label: '20'},
        {value: '21', label: '21'},
        {value: '22', label: '22'},
        {value: '23', label: '23'},
        {value: '24', label: '24'},
        {value: '25', label: '25'},
        {value: '26', label: '26'},
        {value: '27', label: '27'},
        {value: '28', label: '28'},
        {value: '29', label: '29'},
        {value: '30', label: '30'},
        {value: '31', label: '31'},
    ];
    const month = [
        {value: 'Janeiro', label: 'Janeiro'},
        {value: 'Fevereiro', label: 'Fevereiro'},
        {value: 'Março', label: 'Março'},
        {value: 'Abril', label: 'Abril'},
        {value: 'Maio', label: 'Maio'},
        {value: 'Junho', label: 'Junho'},
        {value: 'Julho', label: 'Julho'},
        {value: 'Agosto', label: 'Agosto'},
        {value: 'Setembro', label: 'Setembro'},
        {value: 'Outubro', label: 'Outubro'},
        {value: 'Novembro', label: 'Novembro'},
        {value: 'Dezembro', label: 'Dezembro'},
    ];
    const year = [
        {value: '1999', label: '1999'},
        {value: '2000', label: '2000'},
        {value: '2001', label: '2001'},
        {value: '2002', label: '2002'},
        {value: '2003', label: '2003'},
        {value: '2004', label: '2004'},
        {value: '2005', label: '2005'},
        {value: '2006', label: '2006'},
        {value: '2007', label: '2007'},
        {value: '2008', label: '2008'},
        {value: '2009', label: '2009'},
        {value: '2010', label: '2010'},
        {value: '2011', label: '2011'},
        {value: '2012', label: '2012'},
        {value: '2013', label: '2013'},
        {value: '2014', label: '2014'},
        {value: '2015', label: '2015'},
        {value: '2016', label: '2016'},
        {value: '2017', label: '2017'},
        {value: '2018', label: '2018'},
        {value: '2019', label: '2019'},
        {value: '2020', label: '2020'},
        {value: '2021', label: '2021'},
        {value: '2022', label: '2022'},
        {value: '2023', label: '2023'},
    ]
    return (
        <div className='Feedback'>
            <Aside />
            <Main>
                <div className='feedback_content'>
                    <h1>Conte-nos a sua opinião!</h1>
                    <form onSubmit={handleSubmit} className='form_cont'>
                        <div className='form_name'>
                            <input type='text' name='Nome' id='nome' placeholder='Nome...' />
                            <ValidationError prefix='Nome' field='nome' errors={state.errors} />
                            <input type='text' name='Sobrenome' id='sobrenome' placeholder='Sobrenome...' />
                            <ValidationError prefix='Sobrenome' field='sobrenome' errors={state.errors} />
                        </div>{/* form_name */}
                        <div className='form_info'>
                            <input type='email' name='E-mail' id='email' placeholder='Seu email...' />
                            <ValidationError prefix='Email' field='email' errors={state.errors} />
                                <Select
                                    id='assunto'
                                    name='Assunto'
                                    options={assunto}
                                    menuPlacement= 'auto'
                                    menuPosition='fixed'
                                    className='select_01'
                                    classNamePrefix={'assuntoSelect'}
                                    placeholder={'Escolha uma opção...'}
                                />
                                <ValidationError prefix='Assunto' field='assunto' errors={state.errors} />    
                            <textarea id='menssagem' name='Menssagem' placeholder='Menssagem...'></textarea>
                            <ValidationError prefix='Menssagem' field='menssagem' errors={state.errors} />
                        </div>{/* form_info */}
                        <div className='form_gender'>
                            <p>Como você se identifica?</p>
                            <div className='form_gender_inputCont'>
                                <input id='masculino' type='radio' name='Gênero' value={'Masculino'} />
                                <ValidationError prefix='Masculino' field='genero' errors={state.errors} />
                                <label htmlFor='masculino'></label>
                                <span>Masculino</span>
                            </div>{/* form_gender_inputCont */}
                            <div className='form_gender_inputCont'>
                                <input id='feminino' type='radio' name='Gênero' value={'Feminino'} />
                                <ValidationError prefix='Feminino' field='genero' errors={state.errors} />
                                <label htmlFor='feminino'></label>
                                <span>Feminino</span>
                            </div>{/* form_gender_inputCont */}
                            <div className='form_gender_inputCont'>
                                <input id='nenhum' type='radio' name='Gênero' value={'Nenhum'} />
                                <ValidationError prefix='Nenhum' field='genero' errors={state.errors} />
                                <label htmlFor='nenhum'></label>
                                <span>Nenhum</span>
                            </div>{/* form_gender_inputCont */}
                        </div>{/* form_gender */}
                        <div className="form_birthday">
                            <p>Quando você nasceu?</p>
                            <div className='form_birthday_inputCont'>
                                <Select
                                    id='day'
                                    name='Dia do nascimento'
                                    options={day}
                                    placeholder={'Dia...'}
                                    menuPlacement= 'auto'
                                    menuPosition='fixed'
                                    className='select_01'
                                    classNamePrefix={'selectContent'}
                                />
                            <ValidationError prefix='Day' field='day' errors={state.errors} />
                            </div>{/* form_birthday_inputCont */}
                            <div className='form_birthday_inputCont'>
                                <Select
                                    placeholder={'Mês...'}
                                    options={month}
                                    name='Mês de nascimento'
                                    id='month'
                                    menuPlacement= 'auto'
                                    menuPosition='fixed'
                                    className='select_01'
                                    classNamePrefix={'selectContent'}
                                />
                            <ValidationError prefix='Month' field='month' errors={state.errors} />
                            </div>{/* form_birthday_inputCont */}
                            <div className='form_birthday_inputCont'>
                                <Select
                                    placeholder={'Ano...'}
                                    options={year}
                                    name='Ano de nascimento'
                                    id='year'
                                    menuPlacement= 'auto'
                                    menuPosition='fixed'
                                    className='select_01'
                                    classNamePrefix={'selectContent'}
                                />
                            <ValidationError prefix='Year' field='year' errors={state.errors} />
                            </div>{/* form_birthday_inputCont */}
                        </div>{/* form_birthday */}
                        <div className='button_submit_cont'>
                            <input type='submit' disabled={state.submitting} value={'Enviar'} />
                        </div>{/* button_submit_cont */}
                    </form>{/* form_cont */}
                </div>{/* feedback_content */}
            </Main>
            <Aside />
        </div>
    )
}

export default Feedback;