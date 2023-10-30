/**
 * score: vehicle score, from 0 to 40
 * rate: loan rates
 */
export const loanRate = [
    {
        score: "10",
        rate: "0.03"
    },
    {
        score: "15",
        rate: "0.0274"
    },
    {
        score: "25",
        rate: "0.0252"
    },
    {
        score: "33",
        rate: "0.0210"
    },
    {
        score: "40",
        rate: "0.0185"
    }
]

/**
 * name: number of passengers
 * rate: bonus or malus on loan rates
 */
export const passengers = [
    {
        name: "1",
        rate: "+0.0011"
    },
    {
        name: "2",
        rate: "-0.0017"
    },
    {
        name: "3",
        rate: "-0.0029"
    },
    {
        name: "4",
        rate: "-0.0053"
    }
]