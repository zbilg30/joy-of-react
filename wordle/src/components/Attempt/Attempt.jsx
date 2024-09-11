import { Cell } from "../Cell"

export function Attempt({ attempt }) {
    const cells = []
    for (let i = 0; i < 5; i++) {
        cells.push(<Cell key={Math.random()}  attempt={attempt} index={i}/>)
    }
    
    return <div>{cells}</div>
}