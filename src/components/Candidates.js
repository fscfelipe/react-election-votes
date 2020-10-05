import React from 'react'
import Candidate from './Candidate'
import Card from './Card'

import FlipMove from 'react-flip-move'

export default function Candidates({ candidates, previousValues }) {
  return (
    <div>

      <FlipMove>
        {candidates.map((candidate, index) => {


          const previousValueObj = previousValues.find(item => item.id === candidate.id);

          const previousVote = !!previousValueObj ? previousValueObj.votes : 0;
          const previousPercentage = !!previousValueObj ? previousValueObj.percentage : 0;

          return (
            <div key={candidate.id}>
              <Card>
                <Candidate candidate={candidate} previousVote={previousVote} previousPercentage={previousPercentage} position={index + 1} />
              </Card>
            </div>

          )
        })
        }
      </FlipMove>

    </div>
  )
}
