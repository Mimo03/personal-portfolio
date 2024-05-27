import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import React, { useState } from 'react';
import { NavBar } from '../components/NavBar'

const Test = () => {
    const [responseText, setResponseText] = useState('');
    // useEffect(() => {
    //     console.log('Component re-rendered with responseText:', responseText);
    // }, [responseText]);

    const [responses, setResponses] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        // Add state for other questions
    });

    const handleResponseChange = (question, value) => {
        setResponses({ ...responses, [question]: value });
    };

    var marks = 0;
    var mone,mtwo,mthree,mfour,mfive,msix,mseven,meight,mnine,mten = 0;


    const handleSubmit = () => {
        // Logic to submit responses

    if (responses.q1 && responses.q1 === 'Yes') {
        mone = 4;
    }

    if (responses.q2 && responses.q2 === 'Grapes') {
        mtwo = 4;
    }

    if (responses.q3 && responses.q3 === 'No') {
      mthree = 4;
    }

    if (responses.q4 && responses.q4 === 'The First Letter') {
      mfour = 4;
    }

    if (responses.q5 && responses.q5 === 'C') {
      mfive = 4;
    }

    if (responses.q6 && responses.q6 === 'b') {
      msix = 4;
    }

    if (responses.q7 && responses.q7 === 'ED') {
      mseven = 4;
    }

    if (responses.q8 && responses.q8 === 'DOG') {
      meight = 4;
    }

    if (responses.q9 && responses.q9 === 'First one is left and next one is right') {
      mnine = 4;
    }

    if (responses.q10 && responses.q10 === 'cake') {
      mten = 4;
    }

    
    var language_vocab = (mone+mtwo+mthree+mfour+mfive+msix+meight)/24 ? (mone+mtwo+mthree+mfour+mfive+msix+meight)/24 : 0
    var visual_discrimination = (mone + mthree + mfour + msix)/16 ? (mone + mthree + mfour + msix)/16 : 0
    var memory = (mtwo + mnine)/8 ? (mtwo + mnine)/8 : 0
    var audio_Discrimination = (mseven + mten)/8 ? (mseven + mten)/8 : 0

    const url = 'http://127.0.0.1:5000/getdyslexic'; // Replace 'https://example.com/api/data' with your API endpoint

const dataone = {
    data: {
      "language_vocab":language_vocab,
      "visual_discrimination":visual_discrimination,
      "memory":memory,
      "audio_Discrimination":audio_Discrimination
    }
}; 

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // Specify the content type
    },
    body: JSON.stringify(dataone),
    mode: 'cors', // Ensure that the request is made using CORS

};

fetch(url, options)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
        // Handle response data here
        
        // Example: Update the text based on the response data
        if (data.result === 2) {
          setResponseText('There is low chance that the person is dyslexic');
          console.log('There is low chance that the person is dyslexic');
      } else if (data.result === 0) {
          setResponseText('There is high chance that the person is dyslexic');
          console.log('There is low chance that the person is dyslexic');
      } else if (data.result === 1) {
          setResponseText('There is moderate chance that the person is dyslexic');
          console.log('There is moderate chance that the person is dyslexic');
      }

    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        // Handle errors here
    });

    
        
    };

// export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
            <section className="banner-test" id="skills">
            <div className="container">
                <div className="row">
                    <div className="test-container">
                        <div className="skill-bx-test">
                            <h2 style={{marginTop: '-30px'}}>Take Test</h2>
                            <form>
                                <div className="question-container" style={{marginTop: '30px'}}>
                                    <div className="question-box">
                                        <label htmlFor="q1" className="info">Question I</label>
                                        <br></br>
                                        <div className="info">Check whether these two alphabets are same or not?</div>
                                        <br></br>
                                        <div className="question-images">
                                            <img className="question-image" src="https://github.com/dyslexiaworkin/artgallery/blob/master/O.png?raw=true" alt="Letter O" />
                                            <img className="question-image" src="https://github.com/dyslexiaworkin/artgallery/blob/master/o.png?raw=true" alt="Letter o" />
                                        </div>
                                        <br></br>
                                        <div className="answers">
                                            <input type="radio" id="q1-yes" name="q1" value="Yes" onChange={() => handleResponseChange('q1', 'Yes')} />
                                            <label htmlFor="q1-yes" className="info" style={{ marginRight: '50px' }}>Yes</label>
                                            <input type="radio" id="q1-no" name="q1" value="No" onChange={() => handleResponseChange('q1', 'No')} />
                                            <label htmlFor="q1-no" className="info">No</label>
                                        </div>
                                    </div>
                                    <div className="question-box">
        <label htmlFor="q2"className="info">Question II</label>
        <br></br>
        <div className="info">Guess the fruit in the picture.</div>
        <br></br>
        <div className="question-images">
        <img className="question-image" src="https://github.com/dyslexiaworkin/artgallery/blob/master/grapes.jpg?raw=true" alt="Grapes"/>
        </div>
        <br></br>
        <div className="answers">
            <input type="radio" id="q2-orange" name="q2" value="Orange"onChange={() => handleResponseChange('q2', 'Orange')}/>
            <label htmlFor="q2-orange"style={{ marginRight: '50px' }} className="info">Orange</label>
            <input type="radio" id="q2-banana" name="q2" value="Banana"onChange={() => handleResponseChange('q2', 'Banana')}/>
            <label htmlFor="q2-banana"style={{ marginRight: '50px' }} className="info">Banana</label>
            <input type="radio" id="q2-grapes" name="q2" value="Grapes"onChange={() => handleResponseChange('q2', 'Grapes')}/>
            <label htmlFor="q2-grapes"style={{ marginRight: '50px' }} className="info">Grapes</label>
            <input type="radio" id="q2-mango" name="q2" value="Mango"onChange={() => handleResponseChange('q2', 'Mango')}/>
            <label htmlFor="q2-mango" className="info">Mango</label>
        </div>
        </div>
        <div className="question-box">
        <label htmlFor="q3" className="info">Question III</label>
        <br></br>
        <div className="info">Check whether these two alphabets are same or not?</div>
        <br></br>
        <div className="question-images">
            <img className="question-image" src="https://github.com/dyslexiaworkin/artgallery/blob/master/p.png?raw=true" alt="Letter P"/>
            <img className="question-image" src="https://github.com/dyslexiaworkin/artgallery/blob/master/q.png?raw=true" alt="Letter Q"/>
        </div>
        <br></br>
        <div className="answers">
            <input type="radio" id="q3-yes" name="q3" value="Yes"onChange={() => handleResponseChange('q3', 'Yes')}/>
            <label className="info" htmlFor="q3-yes"style={{ marginRight: '50px' }}>Yes</label>
            <input type="radio" id="q3-no" name="q3" value="No"onChange={() => handleResponseChange('q3', 'No')}/>
            <label className="info" htmlFor="q3-no">No</label>
        </div>
        </div>
        <div className="question-box">
        <label className="info" htmlFor="q4">Question IV</label>
        <br></br>
        <div className="info">Which letter is G?</div>
        <br></br>
        <div className="question-images">
            <img className="question-image" src="https://github.com/dyslexiaworkin/artgallery/blob/master/G.jpg?raw=true" alt="Letter G"/>
            <img className="question-image" src="https://github.com/dyslexiaworkin/artgallery/blob/master/C.png?raw=true" alt="Letter C"/>
        </div>
        <br></br>
        <div className="answers">
            <input type="radio" id="q4-first-letter" name="q4" value="The First Letter" className="answer-radio"onChange={() => handleResponseChange('q4', 'The First Letter')}/>
            <label className="info" htmlFor="q4-first-letter"style={{ marginRight: '50px' }}>The First Letter</label>
            <input type="radio" id="q4-second-letter" name="q4" value="The Second Letter" className="answer-radio"onChange={() => handleResponseChange('q4', 'The Second Letter')}/>
            <label className="info" htmlFor="q4-second-letter">The Second Letter</label>
        </div>
        </div>
        <div className="question-box">
        <label className="info" htmlFor="q5">Question V</label>
        <br></br>
        <div className="info">Which letter CAT starts with?</div>
        <br></br>
        <div className="answers">
            <input type="radio" id="q5-f" name="q5" value="F" className="answer-radio"onChange={() => handleResponseChange('q5', 'F')}/>
            <label className="info" htmlFor="q5-f"style={{ marginRight: '50px' }}>F</label>
            <input type="radio" id="q5-c" name="q5" value="C" className="answer-radio"onChange={() => handleResponseChange('q5', 'C')}/>
            <label className="info" htmlFor="q5-c"style={{ marginRight: '50px' }}>C</label>
            <input type="radio" id="q5-a" name="q5" value="A" className="answer-radio"onChange={() => handleResponseChange('q5', 'A')}/>
            <label className="info" htmlFor="q5-a"style={{ marginRight: '50px' }}>A</label>
            <input type="radio" id="q5-t" name="q5" value="T" className="answer-radio"onChange={() => handleResponseChange('q5', 'T')}/>
            <label className="info" htmlFor="q5-t">T</label>
        </div>
        </div>
        <div className="question-box">
        <label className="info" htmlFor="q6">Question VI</label>
        <br></br>
        <div className="info">What is the smaller version of this letter?</div>
        <br></br>
        <div className="question-images">
        <img className="question-image" src="https://github.com/dyslexiaworkin/artgallery/blob/master/B.png?raw=true" alt="Letter B"/>
        </div>
        <br></br>
        <div className="answers">
            <input type="radio" id="q6-d" name="q6" value="d" className="answer-radio"onChange={() => handleResponseChange('q6', 'd')}/>
            <label className="info" htmlFor="q6-d"style={{ marginRight: '50px' }}>d</label>
            <input type="radio" id="q6-b" name="q6" value="b" className="answer-radio"onChange={() => handleResponseChange('q6', 'b')}/>
            <label className="info" htmlFor="q6-b">b</label>
        </div>
        </div>
        <div className="question-box">
        <label className="info" htmlFor="q7">Question VII</label>
        <br></br>
        <div className="info">What do you hear?</div>
        <br></br>
        <audio controls>
            <source src="https://github.com/dyslexiaworkin/artgallery/blob/master/ed.mpeg?raw=true" type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
        <br></br>
        <br></br>
        <div className="answers">
            <input type="radio" id="q7-ab" name="q7" value="AB" className="answer-radio"onChange={() => handleResponseChange('q7', 'AB')}/>
            <label className="info" htmlFor="q7-ab"style={{ marginRight: '50px' }}>AB</label>
            <input type="radio" id="q7-ed" name="q7" value="ED" className="answer-radio"onChange={() => handleResponseChange('q7', 'ED')}/>
            <label className="info" htmlFor="q7-ed">ED</label>
        </div>
        </div>
        <div className="question-box">
        <label className="info" htmlFor="q8">Question VIII</label>
        <br></br>
        <div className="info">What do you see in the picture?</div>
        <br></br>
        <div className="question-images">
        <img className="question-image" src="https://github.com/dyslexiaworkin/artgallery/blob/master/Dog.jpg?raw=true" alt="Dog"/>
        </div>
        <br></br>
        <div className="answers">
            <input type="radio" id="q8-god" name="q8" value="GOD" className="answer-radio"onChange={() => handleResponseChange('q8', 'GOD')}/>
            <label className="info" htmlFor="q8-god"style={{ marginRight: '50px' }}>GOD</label>
            <input type="radio" id="q8-dog" name="q8" value="DOG" className="answer-radio"onChange={() => handleResponseChange('q8', 'DOG')}/>
            <label className="info" htmlFor="q8-dog">DOG</label>
        </div>
        </div>
        <div className="question-box">
        <label className="info" htmlFor="q9">Question IX</label>
        <br></br>
        <div className="info">Which hand is left and Which hand is right?</div>
        <br></br>
        <div className="question-images">
        <img className="question-image" src="https://github.com/dyslexiaworkin/artgallery/blob/master/hands.jpg?raw=true" style={{width: '250px'}} alt="Hands"/>
        </div>
        <br></br>
        <div className="answers">
            <input type="radio" id="q9-right-left" name="q9" value="Right is first, Left is next" className="answer-radio"onChange={() => handleResponseChange('q9', 'Right is first, Left is next')}/>
            <label className="info" htmlFor="q9-right-left"style={{ marginRight: '50px' }}>First one is right and next one is left</label>
            <input type="radio" id="q9-left-right" name="q9" value="Left is first, Right is next" className="answer-radio"onChange={() => handleResponseChange('q9', 'Left is first, Right is next')}/>
            <label className="info" htmlFor="q9-left-right">First one is left and next one is right</label>
        </div>
        </div>
        <div className="question-box">
        <label className="info" htmlFor="q10">Question X</label>
        <br></br>
        <div className="info">What do you hear?</div>
        <br></br>
        <audio className="audio-player" controls>
            <source src="https://github.com/dyslexiaworkin/artgallery/blob/master/cake.mpeg?raw=true" type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
        <br></br>
        <br></br>
        <div className="answers">
            <input type="radio" id="q10-cake" name="q10" value="cake" className="answer-radio"onChange={() => handleResponseChange('q10', 'cake')}/>
            <label className="info" htmlFor="q10-cake"style={{ marginRight: '50px' }}>Cake</label>
            <input type="radio" id="q10-lake" name="q10" value="lake" className="answer-radio"onChange={() => handleResponseChange('q10', 'lake')}/>
            <label className="info" htmlFor="q10-lake"style={{ marginRight: '50px' }}>Lake</label>
            <input type="radio" id="q10-take" name="q10" value="take" className="answer-radio"onChange={() => handleResponseChange('q10', 'take')}/>
            <label className="info" htmlFor="q10-take"style={{ marginRight: '50px' }}>Take</label>
            <input type="radio" id="q10-fake" name="q10" value="fake" className="answer-radio"onChange={() => handleResponseChange('q10', 'fake')}/>
            <label className="info" htmlFor="q10-fake">Fake</label>
        </div>
        </div>
                                    {/* Repeat the structure for other questions */}
                                </div>
                                <br></br>
                                <button type="button" onClick={handleSubmit}style={{ backgroundColor: '#C71585', color: 'white', padding: '10px 30px',marginBottom: '30px', border: 'none', cursor: 'pointer', fontSize: '18px'}}>Submit</button>
                            </form>
                            <br></br>

                        <h2>Test Score</h2>
                        <div>
                            {responseText ? (  // If the state is truthy, it should display
                                <div id="responseText" className='info' style={{marginBottom: '30px'}}>{responseText}</div>
                                    ) : (
                                 <div id="loading" className='info' style={{marginBottom: '30px'}}>Result</div>  // Test with a placeholder to ensure rendering works
                                    )}
                        </div>
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Language Vocab</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Memory</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Speed</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Visual Discrimination</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Audio Discrimination</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Survey Score</h5>
                            </div>
                        </Carousel> */}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    </div>
  );
}

export default Test