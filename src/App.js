import React from "react"
import Question from "./components/Question";


function App() {
  return (
    <div className="contacts grid grid-cols-3 gap-8 bg-gray-300 min-h-screen p-16">
        
            <Question 
            
                // img="asa"
                name="Question 1"
                question="1 "
                
            />
            <Question 
                // img="cat"
                name="Question 2"
                question=" I always felt like I could do anything. That’s the main
                thing people are controlled by! Thoughts- their perception
                of themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you
                won’t do anything. I was taught I could do everything.
                "
            />
            <Question 
                // img="./images/ssj.png"
                name="Question 3"
                question="3"
            />
            <Question 
                // img="./images/ssj.png"
                name="Question 4"
                question="4"
            />
            <Question 
                // img="asas"
                name="Question 5"
                question="4"
            />
            <Question 
                // img="asas"
                name="Question 6"
                question="4"
            />
        </div>
  );
}

export default App;
