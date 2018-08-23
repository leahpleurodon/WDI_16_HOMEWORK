import React from 'react'

export default function PasswordChecker(props){
    let score = props.pass.getScore()
    function passStrengths(){
        let strengths =  {
            0: "Unless you're checking this password, in which case... ಠ_ಠ",
            1: "Your password is weak and your bloodline is weak!",
            2: "Dishonour on you, dishonour on your family, dishonour on your cow...dishonour on your password...",
            3: "This is the Drake of passwords...not exactly good, but there's worse out there...",
            4: "Your password is but an inch from greatness! Where did it go wrong??!?",
            5: "You and your password will quench your thirsts with the tears of your enemies and feast upon the lamentations of their women together in the sweet halls of Valhalla..."
        }
        return strengths[score]
    }

    function heading(){
        return score > 0 ? "We've analysed your password..." : "Type a password in to begin..."
    }

    return (
        <div>
            <h4>{heading()}</h4>
            <section>
                {passStrengths()} {`${score} / 5`}
            </section>
        </div>
    )
}