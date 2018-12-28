//stateful gets array of data to be displayed

export default class OldGuess extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            prev:[]
        }
    }

    addPrev(value){
        this.setState({
            cards:[...this.state.cards, {
                value
            }]
        });
    }

    render(){
        const lists= props.prevList.map((value,index)=>{
            <li key={index}>
                {value}
            </li>
        });

        return(
            <div className="OldGuess">
                <ul className="list">
                    {lists}
                </ul>
            </div>
        );
    }

    
}