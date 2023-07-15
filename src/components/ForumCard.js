import React from 'react'
import './ForumCard.css'

export const ForumCard = (
    {
        Title,
        Description,
        Author
    }
)=>
{
  return (
   <>
    <div class="ForumCard">
            <div class="ForumInfo">
                <h1 class="ForumTitle">{Title}</h1>
                <p class="ForumDesc">{Description}</p>
                <p class="sentence-spacing">By: {Author}<span class="spacing"></span>Likes:300</p>
            </div>
    </div>
   </>
  )
}

export default ForumCard