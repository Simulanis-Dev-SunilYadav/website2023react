import React, {useState} from 'react'
import thumbnail from '../../assets/video/thumbnail/firesafety.jpg'
import ReactPlayer from 'react-player'
import videooverview from '../../assets/video/Simulanis-Team Overview.mp4'
import Modal from 'react-bootstrap/Modal';

function HomeBannner() {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div class="progression-studios-slider-dashboard-image-background">
            <div class="progression-studios-slider-display-table">
                <div class="progression-studios-slider-vertical-align">
                    <div class="container">
                        <div className="row align-tems-center">
                            <div className="col-md-7">
                                <div class="progression-studios-slider-dashboard-caption-width">
                                    <div class="progression-studios-slider-caption-align">
                                        <h2 class="light-fonts-pro"><a href="#">Simulanis Team Overview</a></h2>
                                        <p class="progression-studios-slider-description light-fonts-pro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <a class="progression-studios-slider-play-btn afterglow" onClick={handleShow} href="#"><i class="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal className='videplayerpopup' centered={true} size='lg' show={show} onHide={handleClose}>
            <Modal.Body className='p-0'>
                <ReactPlayer
                    className='react-player fixed-bottom'
                    url= {videooverview}
                    width='100%'
                    height='100%'
                    controls = {true}
                    playing	= {true}
                />
            </Modal.Body>
        </Modal>
    </>
  )
}

export default HomeBannner