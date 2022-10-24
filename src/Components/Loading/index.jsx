import { ProgressBar } from "react-bootstrap"

export const Loading = ({progress}) =>{
    return <ProgressBar animated now={progress} label={`${Math.round(progress)}%`} className="AreaText" />
}