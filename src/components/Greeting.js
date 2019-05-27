import React from "react"

function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "orange"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "green"
    } else {
        timeOfDay = "night"
        styles.color = "brown"
    }

    return (
        <h3 className="greet" style={styles}>Good {timeOfDay} , monsieur !</h3>
    )
}

export default Greeting