function Card(props){
 return(<div className="container" 
 style={{backgroundColor: props.bgcolor, width: props.width}}>
<h1>{props.title}</h1>
<h2>{props.subtitle}</h2>
<p>{props.description}</p>
 </div>
 )   
}
export default Card 