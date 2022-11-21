function Hex(props) {
    return <div className="hex">
            <div className={"sqr-int1-" + props.tipo + " rl-" + props.rieles[4]}></div>
            <div className={"sqr-int2-" + props.tipo + " rl-" + props.rieles[1]}></div>
            <div className={"sup-izq-" + props.tipo}>
                <div className={"line2 rl-" + props.rieles[5]}></div>
            </div>
            <div className={"sup-der-" + props.tipo}>
                <div className={"line1 rl-" + props.rieles[0]}></div>
            </div>
            <div className={"inf-izq-" + props.tipo}>
                <div className={"line1 rl-" + props.rieles[3]}></div>
            </div>
            <div className={"inf-der-" + props.tipo}>
                <div className={"line2 rl-" + props.rieles[2]}></div>
            </div>
        </div>
}

export default Hex;