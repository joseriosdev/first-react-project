const CustomCmp = (args) => {
    const title = 'Custom Component'
    const yes = true
    return (
        <div className="custom">
            <h4 style={cmoStyle}>
                {title+'!!!'} {yes ? 'YES':'NO'}<br/>
                <i style={{ color:'red',backgroundColor:'black' }}>
                    {args.name} {args.nickname} {args.nick}
                </i>
            </h4>
        </div>
    )
}

CustomCmp.defaultProps = {
    name: 'Daniel',
    nickname: 'Penguin'
}

const cmoStyle = {
    color: 'steelblue',
    textDecoration: 'underline'
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default CustomCmp