import React, { useState } from "react";

function FeedbackForm ({ onSubmit }: any) {
   const [score, setScore] = useState<String>("10")
   const [comment, setComment] = useState<String>("");

   const isDisabled = Number(score) < 5 && comment.length <= 10
   const textAreaPlaceHolder = isDisabled ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters"
   : "Optional feedback"

   const handleSubmit = (e: any) => {
      e.preventDefault()
      onSubmit({score, comment})
   };

   // This is the final version of the feedback form
   return (
      <div className="App">
         <form onSubmit={handleSubmit}>
            <fieldset>
               <h2>Feedback form</h2>
               <div className="Field">
                  <label htmlFor="score">Score: ⭐</label>
                  <input 
                     id="score"
                     type="range"
                     value={Number(score)}
                     onChange={(e: any) => setScore(e.target.value)}
                     min="0"
                     max="10"
                   />

               </div>
               <div className="Field">
                  <label htmlFor="comments">Comments: </label>
                  <textarea 
                     name="comment" id="comment" 
                     cols={30} 
                     rows={10}
                     placeholder={textAreaPlaceHolder}
                     onChange={(e: any) => setComment(e.target.value)} ></textarea>
               </div>
            </fieldset>
            <button type="submit" disabled={isDisabled}>Submit</button>
         </form>
      </div>
   )
}

export default FeedbackForm;