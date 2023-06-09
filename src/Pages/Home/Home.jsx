import './Home.css';
import Slider from 'react-slick';
import Aside from '../Quizz - 01/Aside/Aside';
import '/node_modules/slick-carousel/slick/slick.css';
import '/node_modules/slick-carousel/slick/slick-theme.css';

function Home() {
    const settings = {
        className: 'Slider',
        arrows: false,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }
    return (
        <div className='Home'>
            <Slider {...settings}>
                <div className='bannerSlider__content'>
                    <h1 className='title_homeBanner'>Em Breve...</h1>
                    <p className='desc_home'>em breve...</p>
                </div>
                <div className='bannerSlider__content'>
                    <h1 className='title_homeBanner'>Em Breve...</h1>
                    <p className='desc_home'>em breve...</p>
                </div>
                <div className='bannerSlider__content'>
                    <h1 className='title_homeBanner'>Em Breve...</h1>
                    <p className='desc_home'>em breve...</p>
                </div>
            </Slider>
            <div className='content__cont'>
                <Aside />
                <main id='main'>
                    <h2 className='title_home'>Quizzes</h2>
                    <div className='quizz__cont'>
                        <div className='quizz__content'>
                            <h3>Nome do Quizz</h3>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <p className='desc_home'>
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                            </p>
                            <a href='/quizz01'>link do quiz</a>
                        </div>
                        <div className='quizz__content'>
                            <h3>Nome do Quizz</h3>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <p className='desc_home'>
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                            </p>
                            <a href='/quizz02'>link do quiz</a>
                        </div>
                        <div className='quizz__content'>
                            <h3>Nome do Quizz</h3>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <p className='desc_home'>
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                            </p>
                            <a href='/quizz03'>link do quiz</a>
                        </div>
                        <div className='quizz__content'>
                            <h3>Nome do Quizz</h3>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <p className='desc_home'>
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                            </p>
                            <a href='/quizz04'>link do quiz</a>
                        </div>
                        <div className='quizz__content'>
                            <h3>Nome do Quizz</h3>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <p className='desc_home'>
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                            </p>
                            <a href='/quizz05'>link do quiz</a>
                        </div>
                        <div className='quizz__content'>
                            <h3>Nome do Quizz</h3>
                            <img src='https://images8.alphacoders.com/479/479393.jpg' alt='wallpaper minecraft' />
                            <p className='desc_home'>
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                                descrição do quiz descrição do quiz descrição do quiz descrição do quiz
                            </p>
                            <a href='/quizz06'>link do quiz</a>
                        </div>
                    </div>
                </main>
                <Aside />
            </div>
        </div>
    )
}

export default Home;