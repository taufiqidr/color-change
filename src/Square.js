import React from 'react'


const Square = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section
            className='square'
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? "#000000" : "#FFFFFF"

            }}
        >
            <p>{colorValue ? colorValue : "What is Value?"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>

    )
}
Square.defaultProps = {
    colorValue: "Empty Color Value"
}
export default Square