import './style.css';

document.querySelector('#app').innerHTML = `
<div class="grid">
<header class="header">
    <i class="fas fa-bars header__menu"></i>
    <div class="header__search">
        <input class="header__input" placeholder="Search..." />
    </div>
    <div class="header__avatar">
        <div class="dropdown">
            <ul class="dropdown__list">
                <li class="dropdown__list-item">
                    <span class="dropdown__icon"><i class="far fa-user"></i></span>
                    <span class="dropdown__title">tuc profile</span>
                </li>
                <li class="dropdown__list-item">
                    <span class="dropdown__icon"><i class="fas fa-clipboard-list"></i></span>
                    <span class="dropdown__title">tuc account</span>
                </li>
                <li class="dropdown__list-item">
                    <span class="dropdown__icon"><i class="fas fa-sign-out-alt"></i></span>
                    <span class="dropdown__title">log out</span>
                </li>
            </ul>
        </div>
    </div>
</header>

<aside class="sidenav">
    <div class="sidenav__brand">
        <i class="fas fa-feather-alt sidenav__brand-icon"></i>
        <a class="sidenav__brand-link" href="#">TUC<span class="text-light">TRUMPET</span></a>
        <i class="fas fa-times sidenav__brand-close"></i>
    </div>
    <div class="sidenav__profile">
        <div class="sidenav__profile-avatar">
        </div>
        <div class="sidenav__profile-title text-light">TARAKA UC TRUMPET</div>
    </div>
    <div class="row row--align-v-center row--align-h-center">
        <ul class="navList">

            <li class="navList__heading">About Trumpet<i class="fas fa-chart-bar"></i></li>
            <li>
                <div class="navList__subheading row row--align-v-center">
                    <span class="navList__subheading-icon"><i class="fas fa-credit-card"></i></span>
                    <span class="navList__subheading-title">Executives</span>
                </div>
                <ul class="subList subList--hidden">
                        <li class="subList__item"><a data-target="#editorModal" data-toggle="modal">Editor of the Trumpet</a>
                        </li>
                    <li class="subList__item"><a data-target="#pastorModal" data-toggle="modal">Pastor's
                            Message</a>
                    </li>
                    <li class="subList__item"><a data-target="#chairmanModal" data-toggle="modal">Chairman's
                            Message</a></li>
                    <li class="subList__item"><a data-target="#leadersModal" data-toggle="modal">Leaders</a>
                    </li>
                </ul>
            </li>
            <li>
                <div class="navList__subheading row row--align-v-center">
                    <span class="navList__subheading-icon"><i class="fas fa-phone"></i></span>
                    <span class="navList__subheading-title">Statistics</span>
                </div>
                <ul class="subList subList--hidden">
                    <li class="subList__item">
                    </li>
                    <li class="subList__item">Gulf</li>
                    <li class="subList__item">Milne Bay</li>
                    <li class="subList__item">Mix</li>
                    <li class="subList__item">Sunday School</li>
                    <li class="subList__item">Youths</li>
                </ul>
            </li>


            <li class="navList__heading">Events<i class="fas fa-calendar-alt"></i></li>
            <!--<li>
                <div class="navList__subheading row row--align-v-center">
                    <span class="navList__subheading-icon"><i class="fas fa-wine-glass-alt"></i></span>
                    <span class="navList__subheading-title">Coming</span>
                </div>
                <ul class="subList subList--hidden">
                    <li class="subList__item">past</li>
                    <li class="subList__item">present</li>
                    <li class="subList__item">future</li>
                </ul>
            </li>
            <li>
                <div class="navList__subheading row row--align-v-center">
                    <span class="navList__subheading-icon"><i class="fas fa-school"></i></span>
                    <span class="navList__subheading-title">Planned</span>
                </div>
                <ul class="subList subList--hidden">
                    <li class="subList__item">Tithes and Offerings</li>
                    <li class="subList__item">Preaching Plan</li>
                    <li class="subList__item">Exceptions</li>
                </ul>
            </li>-->
            <li>
                <div class="navList__subheading row row--align-v-center">
                    <span class="navList__subheading-icon"><i class="fas fa-users"></i></span>
                    <span class="navList__subheading-title">Slide Show</span>
                </div>
                <ul class="subList subList--hidden">
                    <li class="subList__item">

                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal"
                            data-target="#slideshowModal">
                            Slides
                        </button>
                    </li>
                </ul>
            </li>
            <!-- Mens Corner -->
            <li>
                <div class="navList__subheading row row--align-v-center">
                    <span class="navList__subheading-icon"><i class="fas fa-users"></i></span>
                    <span class="navList__subheading-title">Men's Ministry Corner</span>
                </div>
                
                <ul class="subList subList--hidden">
                    <li class="subList__item">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal"
                            data-target="#slideshowModal">
                            <a class='btn btn-info btn-md' href="pdfs/mens_schedule.pdf">
                                <p class="overviewCard-subtitle">Schedule</p>
                            </a>
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</aside>

<main class="main">
    <div class="main-header">
        <div class="main-header__intro-wrapper">
            <div class="main-header__welcome">
                <div class="main-header__welcome-title text-light">Welcome, <strong>The Taraka Trumpet</strong>
                </div>
                <div class="main-header__welcome-subtitle text-light">Toktok Save Ikam lo Taraka Trumpet!
                </div>
            </div>
            <div class="quickview">
                <div class="quickview__item">
                    <div class="quickview__item-total">41</div>
                    <div class="quickview__item-description">
                        <i class="far fa-calendar-alt"></i>
                        <span class="text-light">Events</span>
                    </div>
                </div>
                <div class="quickview__item">
                    <div class="quickview__item-total">64</div>
                    <div class="quickview__item-description">
                        <i class="far fa-comment"></i>
                        <span class="text-light">Messages</span>
                    </div>
                </div>
                <div class="quickview__item">
                    <div class="quickview__item-total">27&deg;</div>
                    <div class="quickview__item-description">
                        <i class="fas fa-map-marker-alt"></i>
                        <span class="text-light">Papua New Guinea</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main-overview">
        <div class="overviewCard">
            <div class="overviewCard-icon overviewCard-icon--document">
                <i class="far fa-file-alt"></i>
            </div>
            <div class="overviewCard-description">
                <h3 class="overviewCard-title text-light"><strong><i>Current</i> Publication</strong></h3>
                <a class='btn btn-info btn-md' href="pdfs/trumpet-6.pdf">
                    <p class="overviewCard-subtitle">View It</p>
                </a>



            </div>
        </div>
        <div class="overviewCard">
        <div class="overviewCard-icon overviewCard-icon--calendar">
            <i class="far fa-calendar-check"></i>
        </div>
        <div class="overviewCard-description">
            <h3 class="overviewCard-title text-light">TUC Men's<strong> Ministry</strong></h3>
            <p class="overviewCard-subtitle">Download  CCT Meet & Combine Schedule</p>                     

            <a class='btn btn-info btn-md' href="pdfs/trumpet-6.pdf">
                <p class="overviewCard-subtitle">Schedule</p>
            </a>
        </div>
    </div>

        <div class="overviewCard">
            <div class="overviewCard-icon overviewCard-icon--photo">
                <i class="far fa-file-image"></i>
            </div>
            <div class="overviewCard-description">
                <h3 class="overviewCard-title text-light">General <strong>Toksave</strong></h3>
                <p class="overviewCard-subtitle">Needs updating</p>
            </div>
        </div>
    </div> <!-- /.main__overview -->
    <div class="main__cards">
        <div class="card">
            <div class="card__header">
                <div class="card__header-title text-light">Weekly <strong>Events</strong>
                    <a href="#" class="card__header-link text-bold">View All</a>
                </div>
                <div class="settings">
                    <div class="settings__block"><i class="fas fa-edit"></i></div>
                    <div class="settings__block"><i class="fas fa-cog"></i></div>
                </div>
            </div>
            <div class="card__main">
                <div class="card__row">
                    <div class="card__icon"><i class="fas fa-gift"></i></div>
                    <div class="card__time">
                        <div>Monday</div>
                    </div>
                    <div class="card__detail">
                        <div class="card__source text-bold">Fellowship</div>
                        <div class="card__description">At 8:30pm.</div>
                        <div class="card__note">Until 9pm</div>
                    </div>
                </div>
                <div class="card__row">
                    <div class="card__icon"><i class="fas fa-plane"></i></div>
                    <div class="card__time">
                        <div>Tuesday</div>
                    </div>
                    <div class="card__detail">
                        <div class="card__source text-bold">Male Fellowsip</div>
                        <div class="card__description">Starting 7:30pm</div>
                        <div class="card__note">Led by Mr Kaina</div>
                    </div>
                </div>
                <div class="card__row">
                    <div class="card__icon"><i class="fas fa-book"></i></div>
                    <div class="card__time">
                        <div>Thursday</div>
                    </div>
                    <div class="card__detail">
                        <div class="card__source text-bold">NGI Fellowship</div>
                        <div class="card__description">Fellowship starting at 7:30pm and finishing with choir
                            practice.
                            Hawking</div>
                        <div class="card__note">Drop off</div>
                    </div>
                </div>
                <div class="card__row">
                    <div class="card__icon"><i class="fas fa-heart"></i></div>
                    <div class="card__time">
                        <div>Friday</div>
                    </div>
                    <div class="card__detail">
                        <div class="card__source text-bold">Milne Bay Fellowship</div>
                        <div class="card__description">Join us.
                        </div>
                        <div class="card__note">6:45pm, Church grounds</div>
                    </div>
                </div>
                <div class="card__row">
                    <div class="card__icon"><i class="fas fa-heart"></i></div>
                    <div class="card__time">
                        <div>Saturday</div>
                    </div>
                    <div class="card__detail">
                        <div class="card__source text-bold">Clean up</div>
                        <div class="card__description">See rooster</div>
                        <div class="card__note">11:00pm</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card__header">
                <div class="card__header-title text-light">Past Trumpet <strong>Publications</strong>
                    <!--<a href="#" class="card__header-link text-bold">View All</a>-->

                </div>
                <div class="settings">
                    <div class="settings__block"><i class="fas fa-edit"></i></div>
                    <div class="settings__block"><i class="fas fa-cog"></i></div>
                </div>
            </div>
            <div class="card">
                <div class="documents">
                    <div class="document">
                        <div class="document__img"></div>
                        <div class="document__title"><a href="pdfs/trumpet-1.pdf"
                                class='btn btn-danger btn-sm'>Trumpet-1</a href="pdfs/trumpet-1.pdf"
                                class='btn btn-default btn-sm'></div>
                        <div class="document__date">07/16/2018</div>
                    </div>
                    <div class="document">
                        <div class="document__img"></div>
                        <div class="document__title"><a href="pdfs/trumpet-2.pdf"
                                class='btn btn-success btn-sm'>Trumpet-2</a href="pdfs/trumpet-1.pdf"
                                class='btn btn-default btn-sm'></div>
                        <div class="document__date">09/04/2018</div>
                    </div>
                    <div class="document">
                        <div class="document__img"></div>
                        <div class="document__title"><a href="pdfs/trumpet-3.pdf"
                                class='btn btn-info btn-sm'>Trumpet-3</a href="pdfs/trumpet-1.pdf"
                                class='btn btn-default btn-sm'></div>
                        <div class="document__date">10/10/2018</div>
                    </div>
                    <div class="document">
                        <div class="document__img"></div>
                        <div class="document__title"><a href="pdfs/trumpet-4.pdf"
                                class='btn btn-primary btn-sm'>Trumpet-4</a href="pdfs/trumpet-1.pdf"
                                class='btn btn-default btn-sm'></div>
                        <div class="document__date">11/01/2018</div>
                    </div>
                    <div class="document">
                        <div class="document__img"></div>
                        <div class="document__title"><a href="pdfs/trumpet-5.pdf"
                                class='btn btn-warning btn-sm'>Trumpet-5</a href="pdfs/trumpet-1.pdf"
                                class='btn btn-default btn-sm'></div>
                        <div class="document__date">11/01/2018</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card card--finance">
            <div class="card__header">
                <div class="card__header-title text-light">Church <strong>Tithes and Offerings</strong>
                    <a href="#" class="card__header-link text-bold">View All</a>
                </div>
                <div class="settings">
                    <div class="settings__block"><i class="fas fa-edit"></i></div>
                    <div class="settings__block"><i class="fas fa-cog"></i></div>
                </div>
            </div>
            <div id="chartdiv"></div>
        </div>
    </div> <!-- /.main-cards -->

</main>

<!-- Modal -->
<div class="modal fade" id="chairmanModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Elder Sailas Kopana</h4>
            </div>
            <div class="modal-body">
                <p>
                    <b>From the Chairman, appeal to all lead-
                    ers and members to stay focused as we
                    journey on towards the end of 2019.
                    During the Lay Preachers pulpit ex-
                    change we were not able to make it to
                    Ramu UC because I was down with ma-
                    laria. Be informed that this commitment
                    will still be made at a later date.
                    From the circuit, an appeal for continuing prayers for one of
                    our serving minister Rev. Puri Lama. He needs proper medi-
                    cal attention. He is now in the care of his immediate family
                    members. Pray for Lama and Bulolo UC. TUC Boubou in on
                    Sunday: 27th October 2019; so pray and prepare for our
                    up-coming annual boubou.</b>
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="editorModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">EDITOR’S SAY Sina Hanua Vetali</h4>
                </div>
                <div class="modal-body">
                        From the editor’s corner I wish to apolo-
                        gize to the leaders and members for
                        some delays we have encountered in the
                        months gone by, particularly by way of
                        releasing our monthly Taraka Trumpet
                        newsletter. Most often such setbacks are
                        caused by inks running out fast and not
                        able to reproduce enough copies for
                        everyone. However, it’s been a real fun and joy trying to
                        collect enough information for us to read, so we can be
                        more informed of what’s happening in the Congregation,
                        Circuit, Region and even at Assembly level. Please bear
                        with us, only two more months of 2019 before us. Let’s
                        keep praying and working together for God’s Glory.

                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

        </div>
    </div>

<div class="modal fade" id="pastorModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Reverend Rau Vetali's Message</h4>
            </div>
            <div class="modal-body">
                <p>
                    Listen! Wisdom is calling out In the streets and
                    market places, calling loudly at the city gates
                    and wherever people come together. <b>Prov. 1:20-21</b>
                    Streets, market places, city gates and other
                    avenues where people congregated together at
                    that time , this proverb was calling on people to listen. Most of
                    our traditional villages were oval shaped so every activity was
                    monitored in the main arena. Today we live in villages, small
                    stations, towns and cities. Every day people gather in shop
                    fronts, streets, market places, shopping malls, sporting venues,
                    airports, banks, hospitals etc... Wherever we may be in a day,
                    WISDOM still calls on everyone of us to LISTEN. If we listen
                    more and talk less, we will definitely hear wisdom speaking. We
                    are called to listen, so that when things get out of hand we can
                    be able to make the right decisions at any given situation or cir-
                    cumstance. Wisdom is doing the right thing, saying the right
                    things, turning in the right direction so that peace and harmony
                    can rule and reign. May we all take time to listen for God to
                    speak.
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="leadersModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Executives</h4>
            </div>
            <div class="modal-body">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-danger">CHAIRMAN MR. SAILAS KOPANA</a>
                    <a href="#" class="list-group-item list-group-item-info">V/CHAIRLADY MRS ELIZABETH NAMALU</a>
                    <a href="#" class="list-group-item list-group-item-info">SECRETARY MISS TRISHA </a>
                    <a href="#" class="list-group-item list-group-item-info">V/SECRETARY MR. ALOIS NAPITALAI</a>
                    <a href="#" class="list-group-item list-group-item-success">TREASURER MRS. DOROTHY ILIAS</a>
                    <a href="#" class="list-group-item list-group-item-info">V/TREASURER MS. NAOMI YANGI</a>

                </div>

            </div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

    </div>
</div>
</div>
</div>
<div class="modal fade" id="slideshowModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                    aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Slideshow</h4>
        </div>
        <div class="modal-body">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="imgs/prayer" alt="...">
                        <div class="carousel-caption">
                            <h1>A child reading the bible</h1>
                            <p>How wonderful it is for children to grow up in the word of GOD</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="imgs/trumpet" alt="...">
                        <div class="carousel-caption">
                            <h1>The Trumpet</h1>
                            <p>Come here to get toksaves</p>
                        </div>
                    </div>
                    <div class="item">
                            <img src="imgs/tuc2.png" alt="...">
                            <div class="carousel-caption">
                                <h1>The Trumpet</h1>
                                <p>Come here to get toksaves</p>
                            </div>
                        </div>
                        <div class="item">
                                <img src="imgs/tuc3.png" alt="...">
                                <div class="carousel-caption">
                                    <h1>The Trumpet</h1>
                                    <p>Come here to get toksaves</p>
                                </div>
                            </div>
                    ...
                </div>


                <!-- Controls -->
                <a class="left carousel-control" href="#carousel-example-generic" role="button"
                    data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button"
                    data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
    </div>
</div>
</div>

<footer class="footer">
<p><span class="footer__copyright">&copy;</span> www.raliku.com</p>
<p>Credit to <i class="fas fa-heart footer__icon"></i> by <a href="https://www.linkedin.com/in/matt-holland/"
        target="_blank" class="footer__signature">Matt
        H</a></p>
</footer>
</div>

`;

setupCounter(document.querySelector('#counter'));
