Timed Javascript Quiz Game

Summary:
A Javascript quiz "game" with a series of questions and a timer. When user answers properly, time is added, when user answers incorrectly, time is deducted.

Conditions:
1. Start Quiz by pressing a button
2. Present questions and start timer
3. When user answers correctly, proceed to next question. When user answers incorrectly, proceed to next question AND deduct time from the timer.
4. When all questions are answered timer reaches 0
5. THEN game is over
6. When game is over, prompt user to save initials and score

Structure:
1. Define DOM Elements:
    - start button
    - quiz questions
    - timer
    - proceed function
    - IF statement: correct answer, run proceed function, no time deduction
    - IF statement: wrong answer function: deduct time + proceed
    - End function
    - Input prompt for user's intials and save score
    - Local storage function

2. Write function for "Start Button" to display quesitions AND start timer
3. Display questions and have function for correct/wrong answer
4. IF wrong, deduct time from the timer
5. When questions are complete, run End function
6. Input prompt for initials
7. Put timer to 0 and allow user to use localStorage to store their initials and score.