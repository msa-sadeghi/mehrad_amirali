import { useRef } from "react"


function ScrollToSection(){
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)
   const scrollToSection = (ref)=>{
    ref.current.scrollIntoView({behavior:'smooth'})
   }
    return(
        <div style={{width:'100%'}}>
            <div style={{position : 'fixed',  top:0, backgroundColor:"white"}}>
                <button onClick={()=>scrollToSection(section1Ref)}>S1</button>
                <button onClick={()=>scrollToSection(section2Ref)}>S2</button>
                <button onClick={()=>scrollToSection(section3Ref)}>S3</button>
            </div>

            <div ref={section1Ref} style={{height:'100vh',width:'100%', backgroundColor:'red'}}>
                <h1>section1</h1>
            </div>
            <div ref={section2Ref} style={{height:'100vh', backgroundColor:'blue'}}>
                <h1>section2</h1>
            </div>
            <div ref={section3Ref} style={{height:'100vh', backgroundColor:'green'}}>
                <h1>section3</h1>
            </div>
        </div>
    )
}

export default ScrollToSection