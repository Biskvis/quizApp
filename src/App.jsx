import { useState } from 'react';
import './App.css';

function App() {
  const correctAnswers = ['A', 'A', 'C', 'B', 'B'];

  const [score, setScore] = useState(0);
  const [checkedState, setCheckedState] = useState({
    q1: ['', '', 'checked'],
    q2: ['', '', 'checked'],
    q3: ['', '', 'checked'],
    q4: ['', '', 'checked'],
    q5: ['', '', 'checked'],
  });

  const handleCheckboxChange = (question, optionIndex) => {
    const newCheckedState = { ...checkedState };
    newCheckedState[question] = newCheckedState[question].map((state, index) =>
      index === optionIndex ? 'checked' : ''
    );
    
    setCheckedState(newCheckedState);
  };

  function checkWon() {
    let userScore = 0;
    
    for (let i = 1; i <= 5; i++) {
      
      const selectedOption = checkedState[`q${i}`].findIndex((state) => state === 'checked');
      
      if (selectedOption !== -1 && String.fromCharCode(65 + selectedOption) === correctAnswers[i - 1]) {
        userScore++; 
      }
    }
    
    setScore(userScore);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkWon()
  };


  return (
    <>
      <h1 className='text-center text-lime-600 text-4xl font-bold mt-20'>Quiz</h1>
      <div className='flex justify-center items-center mt-8'>
        <div className='w-9/12 bg-slate-500 rounded-lg'>
          <form className='' onSubmit={handleSubmit}>
            <div className='flex flex-col p-8'>
              <p className='text-white text-xl'>What is the capital of France?</p>

              <label className={`p-2 text-lg text-black ${checkedState.q1[0]}`}>
                <span className='text-xl text-white'>A.</span> <span>Paris</span>
                <input
                  type='checkbox'
                  checked={checkedState.q1[0] === 'checked'}
                  onChange={() => handleCheckboxChange('q1', 0)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>

              <label className={`p-2 text-lg text-black ${checkedState.q1[1]}`}>
                <span className='text-xl text-white'>B.</span> Bordeux
                <input
                  type='checkbox'
                  checked={checkedState.q1[1] === 'checked'}
                  onChange={() => handleCheckboxChange('q1', 1)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
              
              <label className={`p-2 text-lg text-black ${checkedState.q1[2]}`}>
                <span className='text-xl text-white'>C.</span> Lyon
                <input
                  type='checkbox'
                  checked={checkedState.q1[2] === 'checked'}
                  onChange={() => handleCheckboxChange('q1', 2)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
            </div>
              
              <div className='flex flex-col p-8'>
              <p className='text-white text-xl'>Who wrote "Romeo and Juliet"?</p>
              
              <label className={`p-2 text-lg text-black ${checkedState.q2[0]}`}>
                <span className='text-xl text-white'>A.</span> <span>William Shakespeare</span>
                <input
                  type='checkbox'
                  checked={checkedState.q2[0] === 'checked'}
                  onChange={() => handleCheckboxChange('q2', 0)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
              
              <label className={`p-2 text-lg text-black ${checkedState.q2[1]}`}>
                <span className='text-xl text-white'>B.</span> Jane Austen
                <input
                  type='checkbox'
                  checked={checkedState.q2[1] === 'checked'}
                  onChange={() => handleCheckboxChange('q2', 1)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
              
              <label className={`p-2 text-lg text-black ${checkedState.q2[2]}`}>
                <span className='text-xl text-white'>C.</span> Charles Dickens
                <input
                  type='checkbox'
                  checked={checkedState.q2[2] === 'checked'}
                  onChange={() => handleCheckboxChange('q2', 2)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
            </div>
            
             <div className='flex flex-col p-8'>
              <p className='text-white text-xl'>What is the chemical symbol for water?</p>
              
              <label className={`p-2 text-lg text-black ${checkedState.q3[0]}`}>
                <span className='text-xl text-white'>A.</span> <span>H</span>
                <input
                  type='checkbox'
                  checked={checkedState.q3[0] === 'checked'}
                  onChange={() => handleCheckboxChange('q3', 0)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
              
              <label className={`p-2 text-lg text-black ${checkedState.q3[1]}`}>
                <span className='text-xl text-white'>B.</span> B
                <input
                  type='checkbox'
                  checked={checkedState.q3[1] === 'checked'}
                  onChange={() => handleCheckboxChange('q3', 1)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
              
              <label className={`p-2 text-lg text-black ${checkedState.q3[2]}`}>
                <span className='text-xl text-white'>C.</span> H2O
                <input
                  type='checkbox'
                  checked={checkedState.q3[2] === 'checked'}
                  onChange={() => handleCheckboxChange('q3', 2)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
            </div>
            

            
            <div className='flex flex-col p-8'>
              <p className='text-white text-xl'>What is the largest planet in our solar system?</p>
              
              <label className={`p-2 text-lg text-black ${checkedState.q4[0]}`}>
                <span className='text-xl text-white'>A.</span> <span>Earth</span>
                <input
                  type='checkbox'
                  checked={checkedState.q4[0] === 'checked'}
                  onChange={() => handleCheckboxChange('q4', 0)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
              
              <label className={`p-2 text-lg text-black ${checkedState.q4[1]}`}>
                <span className='text-xl text-white'>B.</span> Jupiter
                <input
                  type='checkbox'
                  checked={checkedState.q4[1] === 'checked'}
                  onChange={() => handleCheckboxChange('q4', 1)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
              
              <label className={`p-2 text-lg text-black ${checkedState.q4[2]}`}>
                <span className='text-xl text-white'>C.</span> Mars
                <input
                  type='checkbox'
                  checked={checkedState.q4[2] === 'checked'}
                  onChange={() => handleCheckboxChange('q4', 2)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
            </div>
            

            
            <div className='flex flex-col p-8'>
              <p className='text-white text-xl'>Which country is known as the Land of the Rising Sun?</p>
              
              <label className={`p-2 text-lg text-black ${checkedState.q5[0]}`}>
                <span className='text-xl text-white'>A.</span> <span>China</span>
                <input
                  type='checkbox'
                  checked={checkedState.q5[0] === 'checked'}
                  onChange={() => handleCheckboxChange('q5', 0)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
              
              <label className={`p-2 text-lg text-black ${checkedState.q5[1]}`}>
                <span className='text-xl text-white'>B.</span> Japan
                <input
                  type='checkbox'
                  checked={checkedState.q5[1] === 'checked'}
                  onChange={() => handleCheckboxChange('q5', 1)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
              
              <label className={`p-2 text-lg text-black ${checkedState.q5[2]}`}>
                <span className='text-xl text-white'>C.</span> South Korea
                <input
                  type='checkbox'
                  checked={checkedState.q5[2] === 'checked'}
                  onChange={() => handleCheckboxChange('q5', 2)}
                  className='checkbox checkbox-success ml-2'
                />
              </label>
            </div>
            <div className='flex justify-center items-center pb-8'>
              <button type='submit' className='bg-lime-600 text-white w-20 p-2 hover:text-black'>
                Submit
              </button>
            </div>
          </form>
          {score > 0 && <h1 className='text-4xl text-lime-500 text-center pb-4'>You got <span className='text-white'>{score}</span> question{score === 1 ? '' : 's'} right!</h1>}
        </div>
      </div>
    </>
  );
}

export default App;
