import {Redirect} from "react-router-dom" 
import {useAuth} from "../../hooks/useAuth"

export function Home(props){
    const {acessToken} = useAuth()

    if (acessToken){
        return <Redirect to="/dashboard"/>
    }
    return(
        <>
        <h1>Home</h1>
        <p>{props.text}</p>
        </>
    )
}