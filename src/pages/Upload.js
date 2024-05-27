import React, { useState,useRef } from 'react';
import { NavBar } from "../components/NavBar";
import { Skills } from '../components/Skills';
import { MdCloudUpload, MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import {Link} from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';


function Upload() {
    const scrollRef = useRef(null);
    const handleScroll = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' }); // Optional: Add smooth scrolling
      };
    const [selectedFile, setSelectedFile] = useState(null);
    const [answer, setAnswer] = useState(null);


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setFileName(event.target.files[0].name)
        if(event.target.files){
            setImage(URL.createObjectURL(event.target.files[0]))
        }
    };

    const handleUpload = () => {
        if (!selectedFile) {
            alert('Please select a file.');
            return;
        }

        const url = 'http://localhost:5000/gettext';
        const formData = new FormData();
        formData.append('file', selectedFile);

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(result => {
            setAnswer(JSON.parse(result).word);
            console.log('Upload successful:', result);
            handleScroll()
            // Handle success response here
        })
        .catch(error => {
            console.error('There was a problem with the upload:', error.message);
            // Handle error here
        });
    };

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      

    return (
        <div>
            <NavBar/>
        <section className='banner-upload'>
            <div className='upload'>
            <h2 style={{marginBottom: '30px', marginTop: '-150px', textShadow: 'initial'}}>Upload Handwritten Text Image for Dyslexia Analysis</h2>
                <div className="skill-bx-upload">
                    <div className='skill-bx-upload-inner'>
                        <form action='' onClick={() => document.querySelector(".input-field").click()}>
                            <input type="file" className='input-field' onChange={handleFileChange} hidden/>
                            {image ? 
                            <img src={image} alt={fileName}/>
                            :
                            <div className='browse'>
                            <MdCloudUpload color='#fff' size={60}/>
                            <p>Browse Files to upload</p>
                            </div>
                            }
                        </form>
                        
                        <section className='upload-row'>
                            <AiFillFileImage color='#fff'/>
                            <span className='upload-content'>
                                {fileName} - 
                                <MdDelete
                                onClick={() => {
                                    setFileName("No selected File")
                                    setImage(null)
                                }}/>
                            </span>
                        </section>
                    </div>
                </div>
                <button onClick={handleUpload} >Upload</button>
            </div>
        </section>
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" ref={scrollRef}>
                        <h2 style={{fontWeight: '500'}}>Dyslexic Correction</h2>
                        <p>The incorrectly written alphabet(s) is/are given below</p>
                        {answer ? <h1 className='upload-result'>{answer}</h1> : <h1 className='upload-result'>?</h1>}
                        <a href='/tracer.html' style={{'textDecoration':'none', 'alignItems':'center', display:'flex', justifyContent:'center'}}><button className='practice-button' onClick={() => console.log('connect')}>Let’s Practice Tracing <ArrowRightCircle size={25} /></button></a>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
        </div>
    );
}

export default Upload;