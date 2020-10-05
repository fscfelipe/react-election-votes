import React from 'react'
import Candidate from './Candidate'
import Card from './Card'

import FlipMove from 'react-flip-move'

export default function Candidates({ candidates }) {
  return (
    <div>

      <FlipMove>
        {candidates.map((candidate, index) => {
          return (
            <div key={candidate.id}>
              <Card>
                <Candidate candidate={candidate} position={index + 1} />
              </Card>
            </div>

          )
        })
        }
      </FlipMove>

    </div>
  )
}
