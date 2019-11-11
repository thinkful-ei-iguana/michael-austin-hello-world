import React from 'react';

const student = {
  name: 'Sally Student',
  grade: 'A',
};

// const name = student.map(name)

function App() {
  return (
    <main className='App'>
    <div>
  <h1>{student.name}</h1>
    </div>
    <div>
      <ul>
      <li>{student.name}</li>
      <li><address><a href="mailto:Sallystudent@gmail.com">Sallystudent@gmail.com</a></address></li>
          <li><a href="tel:+1234567890">(123) 456-7890</a></li>
      </ul>
    </div>

    <div>
      <section>
        <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="Sally's picture" />     
      </section>
    </div>

    <section>
      <h2>Education</h2>
      <ul>
        <li>Highschool Diploma</li>
        <li>College 2yr</li>
        <li>College 4yr</li>
      </ul>
    </section>

    <section>
    <h2>Work History</h2>
    <h3>Bigcorp Research</h3>
      <ul>
          <li>Researcher from 12/15/2015 to 12/15/2017</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
      </ul>
    <h3>CompTech Inc.</h3>
      <ul>
          <li>Programmer from 12/15/2017 to 12/15/2019 </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
      </ul>
  </section>

  </main>
  
  );
}

export default App;
